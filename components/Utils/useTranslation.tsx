// @ts-nocheck
import React, { createContext, useContext, useState, useEffect } from "react";
import _ from "lodash";
import dicts from "../../locales";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState("vi-VN");

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale && dicts[savedLocale]) {
      setLocale(savedLocale);
    }
  }, []);

  const changeLocale = (newLocale) => {
    if (dicts[newLocale]) {
      setLocale(newLocale);
      localStorage.setItem("locale", newLocale);
    }
  };

  const value = {
    locale,
    changeLocale,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      t: (key, defaultValue) => {
        const dict = dicts["vi-VN"];
        const value = _.get(dict, key);
        return value === undefined ? (defaultValue || key) : value;
      },
      locale: "vi-VN",
      changeLocale: () => { },
    };
  }

  const { locale, changeLocale } = context;
  const dict = dicts[locale] || dicts["vi-VN"];

  const t = (key, defaultValue) => {
    const value = _.get(dict, key);
    if (value === undefined) {
      return defaultValue || key;
    }
    return value;
  };

  return { t, locale, changeLocale };
}
