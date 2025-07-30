import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from '~/locales/en/translation.json';
import ruTranslation from '~/locales/ru/translation.json';

i18n
    .use(LanguageDetector) // Language detection plugin
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true, // TODO: disable in production (Enable debugging in console)
        interpolation: {
            escapeValue: false, // Don't escape HTML entities
        },
        resources: {
            en: {
                translation: enTranslation,
            },
            ru: {
                translation: ruTranslation,
            },
        },
        // Language detection configuration
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage', 'cookie'],
        },
        ns: ['translation'], // Namespaces
        defaultNS: 'translation',
    });

export default i18n;