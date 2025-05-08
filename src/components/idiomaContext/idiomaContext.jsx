import React, { createContext, useState, useContext } from 'react';
import { es } from '../locales/es.js';
import { en } from '../locales/en.js';

const I18nContext = createContext();

const translations = {
    es,
    en
};

export const I18nProvider = ({ children }) => {
    const [locale, setLocale] = useState('en'); // Idioma por defecto

    const t = (key) => {
        return translations[locale][key] || key; // Devuelve la traducción o la clave si no se encuentra
    };

    const changeLocale = (newLocale) => {
        setLocale(newLocale);
    };

    return (
        <I18nContext.Provider value={{ locale, t, changeLocale }}>
            {children}
        </I18nContext.Provider>
    );
};

export const useTranslation = () => useContext(I18nContext);