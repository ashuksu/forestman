import en from './en/translation.json';
import uk from './uk/translation.json';
import ru from './ru/translation.json';

export const allTranslations = { en, uk, ru };

export type Language = keyof typeof allTranslations;

export const availableLanguages = Object.keys(allTranslations) as Language[];

export const isSupportedLanguage = (lang: string): lang is Language =>
    availableLanguages.includes(lang as Language);

export const loadLocale = (lang: string) =>
    allTranslations[isSupportedLanguage(lang) ? lang : 'en'];
