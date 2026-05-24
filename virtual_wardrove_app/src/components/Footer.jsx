import React from "react";
import translations from "/src/translations/translations.json";
import { LanguageContext } from '../hooks/useContext.jsx';
import { useContext } from 'react';

const Footer = () => {

    const {language, setLanguage} = useContext(LanguageContext);

    return (
        <footer className="bg-pink-faded text-custom-text-color py-4 shrink-0 border border-pink-accent border-1">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} {translations[language].footer_appname}
                </p>
                <p className="text-xs mt-2">
                    {translations[language].footer_madeby}
                </p>
            </div>
        </footer>
    );
}

export default Footer;