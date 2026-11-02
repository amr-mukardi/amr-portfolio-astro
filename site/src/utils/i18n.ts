import enTranslations from '../i18n/en.json';
import arTranslations from '../i18n/ar.json';

const translations = {
  en: enTranslations,
  ar: arTranslations,
};

type TranslationKeys = keyof typeof arTranslations; // Or enTranslations, assuming they have the same keys

// Helper function to safely access nested keys like "nav.start"
function getNestedValue(obj: any, path: string): string | undefined {
  const keys = path.split('.');
  let current = obj;
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return undefined;
    }
  }
  return typeof current === 'string' ? current : undefined;
}

export function t(key: string, lang: string | undefined): string {
  const currentLang = lang || 'ar'; // Default to 'en' if lang is undefined
  const langTranslations = translations[currentLang as keyof typeof translations] || translations.ar;

  const value = getNestedValue(langTranslations, key);

  if (value === undefined) {
    console.warn(`Translation key "${key}" not found for language "${currentLang}". Falling back to key.`);
    // Fallback to trying the default language if not already trying it
    if (currentLang !== 'ar') {
      const fallbackValue = getNestedValue(translations.ar, key);
      if (fallbackValue !== undefined) {
        return fallbackValue;
      }
    }
    return key; // Return the key itself as a last resort
  }
  return value;
}

// Utility to get all translations for a specific language, useful for passing to components
export function getTranslations(lang: string | undefined) {
  const currentLang = lang || 'ar';
  return translations[currentLang as keyof typeof translations] || translations.ar;
}
