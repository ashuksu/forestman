import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {resources} from '~/locales';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: import.meta.env.DEV,
        interpolation: {
            escapeValue: false,
            nestingPrefix: '{{',
            nestingSuffix: '}}',
        },
        resources,
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage', 'cookie'],
        },
        ns: ['translation'],
        defaultNS: 'translation',
        react: {
            useSuspense: false,
        },
    });

export default i18n;