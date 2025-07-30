import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import {availableLanguages, loadLocale} from '~/locales';
import {COMPANY_NAME, COMPANY_SHORT_NAME, WEBSITE_URL} from '~/config/constants';

const YEAR = new Date().getFullYear();

function injectConstants(obj: any, vars: Record<string, string | number>) {
    const stringified = JSON.stringify(obj);
    const replaced = stringified.replace(/{{(.*?)}}/g, (_, key) =>
        vars[key] !== undefined ? String(vars[key]) : `{{${key}}}`
    );
    return JSON.parse(replaced);
}

const loadAndInjectResources = async () => {
    const injectedResources: Record<string, { translation: any }> = {};

    for (const lang of availableLanguages) {
        const raw = await loadLocale(lang);
        injectedResources[lang] = {
            translation: injectConstants(raw, {
                COMPANY_NAME,
                COMPANY_SHORT_NAME,
                WEBSITE_URL,
                YEAR,
            }),
        };
    }

    return injectedResources;
};

const initI18n = async () => {
    const resources = await loadAndInjectResources();

    await i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            resources,
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
};

initI18n();

export default i18n;