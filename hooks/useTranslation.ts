'use client';

import { useContext, createContext } from 'react';
import { en } from '@/lib/translations.en';
import { am } from '@/lib/translations.am';

export type Language = 'en' | 'am';

interface I18nContextType {
  language: Language;
  t: (key: string) => string;
  setLanguage: (lang: Language) => void;
}

const I18nContext = createContext<I18nContextType>({
  language: 'en',
  t: (key: string) => key,
  setLanguage: () => {},
});

export const useTranslation = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within I18nProvider');
  }
  return context;
};

export const getTranslations = (language: Language) => {
  return language === 'en' ? en : am;
};

export const useT = (language?: Language) => {
  const { language: currentLang, t } = useTranslation();
  const lang = language || currentLang;
  const translations = getTranslations(lang);
  
  return (key: string): string => {
    return (translations as Record<string, string>)[key] || key;
  };
};

export { I18nContext };
