const languageContext = import.meta.glob('./*/translation.json', { eager: true });

export const resources: Record<string, { translation: any }> = {};

for (const path in languageContext) {
    const lang = path.split('/')[1]; // './en/translation.json' → 'en'
    resources[lang] = { translation: (languageContext[path] as any).default };
}
