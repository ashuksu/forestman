import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import {allTranslations, availableLanguages} from '~/locales';
import {
    COMPANY_NAME,
    COMPANY_SHORT_NAME,
    PROJECT_AUTHOR,
    PROJECT_AUTHOR_EMAIL,
    PROJECT_AUTHOR_URL,
    WEBSITE_URL
} from '~/config/constants';

const YEAR = new Date().getFullYear();

type TranslationValue = string | number | boolean | null | TranslationObject | Array<TranslationValue>;

interface TranslationObject {
    [key: string]: TranslationValue;
}

const processTranslationWithConstants = (rawTranslation: TranslationObject): TranslationObject => {
    const globalConstants = {
        COMPANY_NAME,
        COMPANY_SHORT_NAME,
        WEBSITE_URL,
        PROJECT_AUTHOR,
        PROJECT_AUTHOR_URL,
        PROJECT_AUTHOR_EMAIL,
        YEAR
    };

    const processObject = (obj: TranslationValue): TranslationValue => {
        if (typeof obj === 'string') {
            return obj.replace(/{{(.*?)}}/g, (match, key) => {
                if (Object.prototype.hasOwnProperty.call(globalConstants, key)) {
                    return String(globalConstants[key as keyof typeof globalConstants]);
                }
                return match;
            });
        }
        if (typeof obj === 'object' && obj !== null) {
            if (Array.isArray(obj)) {
                return (obj as Array<TranslationValue>).map(item => processObject(item));
            }
            const newObj: TranslationObject = {};
            for (const key in obj) {
                newObj[key] = processObject((obj as TranslationObject)[key]);
            }
            return newObj;
        }
        return obj;
    };

    return processObject(rawTranslation) as TranslationObject;
};

const prepareAllResources = () => {
    const resources: Record<string, { translation: TranslationObject }> = {};

    for (const lang of availableLanguages) {
        const rawTranslation = allTranslations[lang] as TranslationObject;
        resources[lang] = {
            translation: processTranslationWithConstants(rawTranslation),
        };
    }
    return resources;
};

const initI18n = async () => {
    const resources = prepareAllResources();

    await i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            resources,
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