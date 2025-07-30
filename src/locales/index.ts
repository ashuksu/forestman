import enTranslation from './en/translation.json';
import ruTranslation from './ru/translation.json';
import ukTranslation from './uk/translation.json';

export const resources = {
    en: {translation: enTranslation},
    ru: {translation: ruTranslation},
    uk: {translation: ukTranslation},
} as const;