import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {resources as rawResources} from '~/locales';
import {COMPANY_NAME, COMPANY_SHORT_NAME, WEBSITE_URL} from '~/config/constants';

const YEAR = new Date().getFullYear();

function injectConstants(obj: any, vars: Record<string, string | number>) {
    const stringified = JSON.stringify(obj);
    const replaced = stringified.replace(/{{(.*?)}}/g, (_, key) => {
        return vars[key] ?? `{{${key}}}`;
    });
    return JSON.parse(replaced);
}

const injectedResources: typeof rawResources = {};

for (const lang in rawResources) {
    injectedResources[lang] = {
        translation: injectConstants(rawResources[lang].translation, {
            COMPANY_NAME,
            COMPANY_SHORT_NAME,
            WEBSITE_URL,
            YEAR,
        }),
    };
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: injectedResources,
        lng: 'en',
        fallbackLng: 'en',
        debug: import.meta.env.DEV,
        interpolation: {
            escapeValue: false,
            nestingPrefix: '{{',
            nestingSuffix: '}}',
        },
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