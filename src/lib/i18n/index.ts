import it from './it';

const locales = { it };

export type Language = (typeof locales)[keyof typeof locales]['code'];
export const languages: Language[] = Object.values(locales).map((locale) => locale.code);

export type Locale = (typeof locales)[keyof typeof locales];

export default locales;
