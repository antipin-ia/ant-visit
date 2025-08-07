import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ru } from './ru';
import { en } from './en';

const dictionaries = { ru, en };

const I18nContext = createContext({
  t: ru,
  lang: 'ru',
  setLang: () => {},
});

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('lang');
    if (saved && dictionaries[saved]) return saved;
    const prefersRu = navigator.language?.startsWith('ru');
    return prefersRu ? 'ru' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang === 'ru' ? 'ru' : 'en';
  }, [lang]);

  const value = useMemo(
    () => ({ t: dictionaries[lang], lang, setLang }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}

