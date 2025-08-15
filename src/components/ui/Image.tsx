import React, {useState, useEffect, useMemo} from 'react';
import {imageConfig} from '~/config/image.config';

const allImages = import.meta.glob('/src/assets/images-build/**/*.{jpg,jpeg,png,webp,svg,gif}', {
    eager: true,
    query: '?url',
    import: 'default'
});

const isAllowedExternalUrl = (url: string): boolean => {
    try {
        const urlObject = new URL(url);
        return imageConfig.allowedDomains.includes(urlObject.hostname);
    } catch (e) {
        console.error('Invalid URL in isAllowedExternalUrl:', e);
        return false;
    }
};

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string; // Path relative to the source directory, e.g., 'picture4.jpeg' or 'icons/icon.png'
    alt: string;
    fetchpriority?: 'high' | 'low' | 'auto';
    noLazy?: boolean;
}

const Image: React.FC<ImageProps> = ({
                                         src,
                                         alt,
                                         width = 600,
                                         height = 600,
                                         fetchpriority,
                                         noLazy = false,
                                         decoding = 'async',
                                         sizes: customSizes,
                                         ...props
                                     }) => {
    const [error, setError] = useState(false);

    useEffect(() => {
        setError(false);
    }, [src]);

    const imageSources = useMemo(() => {
        if (!src || isAllowedExternalUrl(src)) {
            return {
                src: src || imageConfig.brokenImage,
                srcset: undefined,
                sizes: undefined,
            };
        }

        const pathInfo = src.match(/(.*\/)?([^/]+)\.([^.]+)$/);
        if (!pathInfo) {
            return {src: imageConfig.brokenImage, srcset: undefined, sizes: undefined};
        }

        const [, dir = '', filename, ext] = pathInfo;

        if (imageConfig.skipProcessing.includes(ext.toLowerCase())) {
            const imagePath = `/src/assets/images-build/${dir}${filename}.${ext}`;
            return {
                src: (allImages[imagePath] ?? imageConfig.brokenImage) as string,
                srcset: undefined,
                sizes: undefined,
            };
        }

        const srcsetEntries = imageConfig.sizes
            .map(size => {
                const webpPath = `/src/assets/images-build/${dir}${filename}-${size}.webp`;
                return allImages[webpPath] ? `${allImages[webpPath]} ${size}w` : null;
            })
            .filter(Boolean);

        const fallbackPath = `/src/assets/images-build/${dir}${filename}-${imageConfig.fallbackSize}.${ext}`;
        const fallbackSrc = (allImages[fallbackPath] ?? imageConfig.brokenImage) as string;

        return {
            src: fallbackSrc,
            srcset: srcsetEntries.length > 0 ? srcsetEntries.join(', ') : undefined,
            sizes: srcsetEntries.length > 0 ? (customSizes || imageConfig.defaultSizesAttr) : undefined,
        };
    }, [src, customSizes]);

    if (error) {
        return (
            <img
                src={imageConfig.brokenImage}
                alt="Broken image"
                width={width}
                height={height}
                {...props}
            />
        );
    }

    const loadingAttrs: {
        loading?: 'lazy' | 'eager';
        fetchpriority?: 'high' | 'low' | 'auto';
    } = {};

    if (!noLazy && fetchpriority !== 'high') {
        loadingAttrs.loading = 'lazy';
    }
    if (fetchpriority) {
        loadingAttrs.fetchpriority = fetchpriority;
    }

    return (
        <img
            src={imageSources.src}
            srcSet={imageSources.srcset}
            sizes={imageSources.sizes}
            alt={alt}
            width={width}
            height={height}
            decoding={decoding}
            onError={() => setError(true)}
            {...loadingAttrs}
            {...props}
        />
    );
};

export default Image;
