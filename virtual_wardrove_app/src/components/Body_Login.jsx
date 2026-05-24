import React, {useState, useContext} from "react";
import translations from "/src/translations/translations.json";
import { LanguageContext } from '../hooks/useContext.jsx';

const Body_Login = () => {

    {/* Keeps track of the language that's currently selected*/}
    const {language, setLanguage} = useContext(LanguageContext);
    return (
        <>
            <div className="flex h-full w-full flex-col items-center md:gap-10 gap-6">
                <input 
                    type="text"
                    placeholder={translations[language].login_placeholderuser}
                    className='px-10 mt-10 border border-2 border-gray-400 w-2/5 md:w-1/6 h-9 text-center bg-white rounded-md hover:border-pink-accent hover:border-4 text-gray-600'>
                </input>

                <input 
                    type="text"
                    placeholder={translations[language].login_placeholderpass}
                    className='px-10 border border-2 border-gray-400 w-2/5 md:w-1/6 h-9 text-center bg-white rounded-md hover:border-pink-accent hover:border-4 text-gray-600'>
                </input>

                <button className="bg-pink-secondary w-2/7 md:w-1/8 h-12 border-3 border-double border-pink-accent rounded-2xl hover:bg-pink-accent hover:rounded-full hover:text-white transition-all duration-1000" > 
                    {translations[language].login_login}
                </button>

                <button className="mb-20 w-2/7 md:w-1/8 h-12 border-3 border-double border-pink-accent text-sm rounded-2xl hover:bg-pink-faded hover:rounded-full transition-all duration-1000" > 
                    {translations[language].login_signup}
                </button>


            </div>
        </>
        
    )
}
export default Body_Login;