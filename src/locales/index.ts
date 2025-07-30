export const rawResources = import.meta.glob('./*/translation.json');

export const availableLanguages = Object.keys(rawResources).map((path) =>
    path.split('/')[1]
);

export const isSupportedLanguage = (lang: string): lang is string => {
    return availableLanguages.includes(lang);
};

export const loadLocale = async (lang: string) => {
    if (!isSupportedLanguage(lang)) lang = 'en';

    const loader = rawResources[`./${lang}/translation.json`];
    if (!loader) {
        const fallback = rawResources[`./en/translation.json`];
        return fallback ? (await fallback()).default : {};
    }

    const module = await loader();
    return module.default;
};