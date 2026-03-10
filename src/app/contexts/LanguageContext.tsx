"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, type Lang, type TranslationKey } from "../i18n/translations";

type LanguageContextType = {
  language: Lang;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "EN",
  toggleLanguage: () => {},
  t: (key) => translations.EN[key],
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Lang>("EN");

  // Read preference from cookie on mount
  useEffect(() => {
    const match = document.cookie.match(/(?:^|;\s*)otito_lang=([^;]*)/);
    if (match && (match[1] === "EN" || match[1] === "HI")) {
      setLanguage(match[1]);
    }
  }, []);

  const toggleLanguage = () => {
    const next: Lang = language === "EN" ? "HI" : "EN";
    setLanguage(next);
    document.cookie = `otito_lang=${next}; path=/; max-age=31536000`;
  };

  const t = (key: TranslationKey): string => translations[language][key];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
