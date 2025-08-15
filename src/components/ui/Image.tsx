import React, {useState, useEffect, useMemo} from 'react';
import {imageConfig} from '~/config/image.config';
import clsx from 'clsx';
import {BASE_PATH} from '~/config/constants';

const allImages = import.meta.glob('/src/assets/images-build/**/*.{jpg,jpeg,png,webp,svg,gif}', {
    eager: true,
    query: '?url',
    import: 'default'
});

const isAllowedExternalUrl = (url: string): boolean => {
    if (!/^https?:\/\//i.test(url)) {
        return false;
    }
    try {
        const urlObject = new URL(url);
        const result = imageConfig.allowedDomains.includes(urlObject.hostname);

        if (!result) {
            console.error('Domain not allowed:', urlObject.hostname);
        }

        return result;
    } catch (e) {
        console.error('Invalid URL in isAllowedExternalUrl:', e, url);
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

    const {className, ...restProps} = props;

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
            const imagePath = `/${imageConfig.paths.dest}/${dir}${filename}.${ext}`;
            return {
                src: (allImages[imagePath] ?? imageConfig.brokenImage) as string,
                srcset: undefined,
                sizes: undefined,
            };
        }

        const srcsetEntries = imageConfig.sizes
            .map(size => {
                const webpPath = `/${imageConfig.paths.dest}/${dir}${filename}-${size}.webp`;
                return allImages[webpPath] ? `${allImages[webpPath]} ${size}w` : null;
            })
            .filter(Boolean);

        const fallbackPath = `/${imageConfig.paths.dest}/${dir}${filename}-${imageConfig.fallbackSize}.${ext}`;
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
                src={BASE_PATH + imageConfig.brokenImage}
                alt="Broken image"
                width={width}
                height={height}
                className={clsx('max-w-full h-auto object-fill ', className)}
                {...restProps}
            />
        );
    }

    const loadingAttrs: {
        loading?: 'lazy' | 'eager';
        fetchPriority?: 'high' | 'low' | 'auto';
    } = {};

    if (!noLazy && fetchpriority !== 'high') {
        loadingAttrs.loading = 'lazy';
    }

    if (fetchpriority) {
        loadingAttrs.fetchPriority = fetchpriority;
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
            className={clsx('max-w-full h-auto', className)}
            {...loadingAttrs}
            {...restProps}
        />
    );
};

export default Image;
