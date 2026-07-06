import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { it, type TranslationKey } from "./dictionaries/it";
import { en } from "./dictionaries/en";

export type Language = "it" | "en";

const dictionaries: Record<Language, Record<TranslationKey, string>> = {
  it,
  en,
};

const STORAGE_KEY = "site-lang";

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggle: () => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // SSR-safe default: always "it" on first render, hydrate from storage after mount
  const [language, setLanguageState] = useState<Language>("it");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "it" || stored === "en") {
        setLanguageState(stored);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, []);

  const toggle = useCallback(() => {
    setLanguageState((cur) => {
      const next: Language = cur === "it" ? "en" : "it";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const t = useCallback(
    (key: TranslationKey) => {
      return dictionaries[language][key] ?? dictionaries.it[key] ?? key;
    },
    [language],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage, toggle, t }),
    [language, setLanguage, toggle, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
