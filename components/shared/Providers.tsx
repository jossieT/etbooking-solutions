'use client';

import React, { ReactNode, useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { I18nContext } from '@/hooks/useTranslation';
import type { Language } from '@/hooks/useTranslation';
import { en } from '@/lib/translations.en';
import { am } from '@/lib/translations.am';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    setMounted(true);
    
    // Get stored language preference
    const storedLang = localStorage.getItem('language') as Language | null;
    if (storedLang && (storedLang === 'en' || storedLang === 'am')) {
      setLanguage(storedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const getTranslations = (lang: Language) => {
    return lang === 'en' ? en : am;
  };

  const translations = getTranslations(language);

  const i18nContextValue = {
    language,
    t: (key: string): string => {
      return (translations as Record<string, string>)[key] || key;
    },
    setLanguage: handleSetLanguage,
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <I18nContext.Provider value={i18nContextValue}>
        {children}
      </I18nContext.Provider>
    </ThemeProvider>
  );
}
