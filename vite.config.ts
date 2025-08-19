import {defineConfig} from 'vite';
import type {Plugin} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import {BASE_PATH} from "./src/config/constants";
import {WEBSITE_URL} from "./src/config/constants";
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import cliProgress from 'cli-progress';
import md5 from 'md5';
import {imageConfig} from './src/config/image.config';
import sitemap from 'vite-plugin-sitemap';

/**
 * Recursively gets all original file paths from a directory, excluding generated files.
 * @param {string} dirPath - The directory path to scan.
 * @param {string[]} files - Accumulator for file paths.
 * @returns {Promise<string[]>} A promise that resolves to an array of full file paths.
 */
const getAllFiles = async (dirPath: string, files: string[] = []): Promise<string[]> => {
    const entries = await fs.readdir(dirPath, {withFileTypes: true});
    const generatedFilePattern = /-\d+\.(webp|jpeg|jpg|png)$/;

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
            await getAllFiles(fullPath, files);
        } else if (!generatedFilePattern.test(entry.name)) {
            files.push(fullPath);
        }
    }
    return files;
};

/**
 * Processes an image with caching.
 * @param {string} srcPath - Full path to the source image.
 * @param {string} destPath - Full path to the destination for the processed image.
 * @param {number} size - Target width for resizing.
 * @param {string} format - Target format (e.g., 'webp', 'jpeg', 'png').
 * @param {cliProgress.SingleBar} progressBar - The progress bar instance to update.
 * @returns {Promise<void>}
 */
const processImageWithCache = async (srcPath: string, destPath: string, size: number, format: string, progressBar: cliProgress.SingleBar): Promise<void> => {
    const fileContent = await fs.readFile(srcPath);
    const contentHash = md5(fileContent);
    const cacheKey = `${path.basename(srcPath)}-${contentHash}-${size}-${format}`;
    const cachePath = path.join(imageConfig.paths.cache, cacheKey);

    try {
        await fs.access(cachePath);
        progressBar.update({operation: 'Cached (Copying)...'});
        await fs.copyFile(cachePath, destPath);
    } catch {
        progressBar.update({operation: 'Processing...'});
        const image = sharp(srcPath, imageConfig.sharp);
        await fs.mkdir(path.dirname(destPath), {recursive: true});

        let ctxImage = image.resize(size, null, {
            withoutEnlargement: true,
            fit: 'inside'
        });

        if (format === 'webp') {
            ctxImage = ctxImage.webp({
                quality: imageConfig.quality.webp[size] || 75, // Default quality if size not in config
                effort: 6
            });
        } else if (format === 'jpeg' || format === 'jpg') {
            ctxImage = ctxImage.jpeg({quality: imageConfig.quality.jpeg});
        } else if (format === 'png') {
            ctxImage = ctxImage.png({quality: imageConfig.quality.png});
        }
        await ctxImage.toFile(destPath);
        await fs.copyFile(destPath, cachePath);
    }
};

/**
 * Handles a single file: copies or processes into multiple formats/sizes.
 * @param {string} srcPath - Full path to the source file.
 * @param {string} destDir - Destination directory for the output files.
 * @param {string} basename - Base name of the file (without extension).
 * @param {string} ext - Extension of the file (without dot).
 * @param {cliProgress.SingleBar} progressBar - The progress bar instance to update.
 * @returns {Promise<void>}
 */
const processFile = async (srcPath: string, destDir: string, basename: string, ext: string, progressBar: cliProgress.SingleBar): Promise<void> => {
    await fs.mkdir(destDir, {recursive: true});

    if (imageConfig.skipProcessing.includes(ext)) {
        progressBar.update({operation: 'Copying...'});
        const destPath = path.join(destDir, `${basename}.${ext}`);
        await fs.copyFile(srcPath, destPath);
        return;
    }

    if (imageConfig.processFiles.includes(ext)) {
        const tasks: Promise<void>[] = [];

        // Generate WebP versions for specified sizes
        for (const size of imageConfig.sizes) {
            tasks.push(processImageWithCache(
                srcPath,
                path.join(destDir, `${basename}-${size}.webp`),
                size,
                'webp',
                progressBar
            ));
        }

        // Generate a fallback image in its original format and specified fallback size
        tasks.push(processImageWithCache(
            srcPath,
            path.join(destDir, `${basename}-${imageConfig.fallbackSize}.${ext}`),
            imageConfig.fallbackSize,
            ext,
            progressBar
        ));

        await Promise.all(tasks);
    }
};

/**
 * Vite plugin to optimize images.
 * @returns {Plugin}
 */
const imagePlugin = (): Plugin => ({
    name: 'vite-plugin-image-optimizer',
    apply: 'build',
    async buildStart() {
        console.log('Starting image optimization...');
        try {
            await fs.mkdir(imageConfig.paths.dest, {recursive: true});
            await fs.mkdir(imageConfig.paths.cache, {recursive: true});
        } catch (error) {
            console.error('Failed to create directories:', error);
            return;
        }

        const allSrcFiles = await getAllFiles(imageConfig.paths.src);
        if (allSrcFiles.length === 0) {
            console.log('No original images found to process.');
            return;
        }

        const progressBar = new cliProgress.SingleBar({
            format: 'Optimizing: [{bar}] {percentage}% | ETA: {eta_formatted} | {value}/{total} | {operation}'
        }, cliProgress.Presets.shades_classic);

        progressBar.start(allSrcFiles.length, 0, {operation: 'Initializing...'});

        const tasks = allSrcFiles.map(async (filePath) => {
            const relativeDir = path.relative(imageConfig.paths.src, path.dirname(filePath));
            const destDir = path.join(imageConfig.paths.dest, relativeDir);
            const ext = path.extname(filePath).toLowerCase().slice(1);
            const basename = path.basename(filePath, `.${ext}`);

            await processFile(filePath, destDir, basename, ext, progressBar);
            progressBar.increment();
        });

        await Promise.all(tasks);
        progressBar.stop();
        console.log('Image optimization completed.');
    }
});

export default defineConfig({
    base: BASE_PATH,

    plugins: [
        react(),
        tailwindcss(),
        tsconfigPaths(),
        imagePlugin(),
        sitemap({hostname: WEBSITE_URL}) //https://forestmanwebsite.com
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@images': path.resolve(__dirname, imageConfig.paths.dest)
        }
    }
});