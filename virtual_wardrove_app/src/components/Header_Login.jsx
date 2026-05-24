import React from 'react';
import translations from "/src/translations/translations.json";
import { LanguageContext } from '../hooks/useContext.jsx';
import { useContext } from 'react';

const Header_Login = () => {

    {/*Gets the current state of the website, by default it's supposed to be Spanish*/}
    const {language, setLanguage} = useContext(LanguageContext);

    return (
        <header className="bg-pink-primary text-white shadow-lg shadow-pink-secondary h-50">
                    <h1 className="flex justify-center h-full items-center text-4xl text-center border border-5">
                        {translations[language].login_appname} 👗
                    </h1>


        </header>
    )
}

export default Header_Login;