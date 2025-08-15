interface ImageQualityConfig {
    webp: Record<number, number>;
    jpeg: number;
    png: number;
}

interface ImagePathsConfig {
    src: string;
    dest: string;
    cache: string;
}

interface SharpInstanceConfig {
    limitInputPixels: number | false;
    fastShrinkOnLoad: boolean;
}

export interface ImageConfig {
    sizes: number[];
    fallbackSize: number;
    quality: ImageQualityConfig;
    paths: ImagePathsConfig;
    skipProcessing: string[];
    processFiles: string[];
    sharp: SharpInstanceConfig;
    allowedDomains: string[];
    defaultSizesAttr: string;
    brokenImage: string;
}

export const imageConfig: ImageConfig = {
    sizes: [1200, 800, 400],
    fallbackSize: 800,
    quality: {
        webp: {
            1200: 85,  // for large: tablets, laptops (DPR=3, DPR=2, Retina, HiDPI)
            800: 65,  // for medium: tablets, mobile devices (DPR=2, Retina, HiDPI)
            400: 70  // for small: mobile devices (DPR=1)
        },
        jpeg: 75,
        png: 75
    },
    paths: {
        src: 'src/assets/images-source',
        dest: 'src/assets/images-build',
        cache: '.cache'
    },
    skipProcessing: ['svg', 'gif', 'webp'],
    processFiles: ['jpg', 'jpeg', 'png'],
    sharp: {
        limitInputPixels: false,
        fastShrinkOnLoad: true
    },
    allowedDomains: ['images.unsplash.com', 'googleusercontent.com', 'youtube.com', 'picsum.photos'],
    defaultSizesAttr: '(min-width: 1200px) 1200px, (min-width: 800px) calc(100vw - 30px), (min-width: 400px) calc(100vw - 30px), calc(100vw - 30px)',
    brokenImage: '/broken-image.svg',
};
