import React from 'react';
import translations from "/src/translations/translations.json";
import { LanguageContext } from '../hooks/useContext.jsx';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const [isOpen, setIsOpen] = React.useState(true);
    {/**Manages the visibility of the drop down menu for the Wardrove button */}
    const [isOpenWardrove, setIsOpenWardrove] = React.useState(false);
    {/**Manages the visibility of the drop down menu for the Account button */}
    const [isOpenAccount, setIsOpenAccount] = React.useState(false);
    {/**Manages the visibility of the drop down menu for the Hamburguer button */}
    const [isOpenHamburger, setIsOpenHamburger] = React.useState(false);
    {/**Manages the visibility of the "Wardrove" option in drop down menu for the Hamburguer button */}
    const [isOpenHamburger_Wardrove, setIsOpenHamburger_Wardrove] = React.useState(false);
    {/**Manages the visibility of the "Account" option in drop down menu for the Hamburguer button */}
    const [isOpenHamburger_Account, setIsOpenHamburger_Account] = React.useState(false);
    {/*const language = "es";*/}
    const {language, setLanguage} = useContext(LanguageContext);
    const navigate = useNavigate();

    return (
        <header className="bg-pink-primary text-white shadow-lg shadow-pink-secondary min-w-full">
            <div className="container max-auto px-4 sm:px-6 lg:px-10">
                <div className="flex items-center md:justify-start justify-between h-16">
                    <h1 className="text-xl sm:text-2xl flex whitespace-nowrap">
                        {translations[language].header_appname} 👗
                    </h1>

                    <nav className="hidden md:block">
                        <div className="flex items-center space-x-4">
                            <button className="px-5 py-2 text-lg hover:bg-pink-secondary hover:rounded-2xl"
                            onClick={() => navigate('/suggestions')}
                            >
                                {translations[language].header_opt1} {/*Suggestions*/}
                            </button>
                            <div className="relative">
                                <button className="px-5 py-2 text-lg hover:bg-pink-secondary hover:rounded-2xl" onClick={() => {setIsOpenWardrove(!isOpenWardrove); if(isOpenAccount) {setIsOpenAccount(false) }}}>
                                    {translations[language].header_opt2} {/*Wardrobe*/}
                                </button>
                                
                                <div className={`absolute text-custom-text-color bg-white shadow-md shadow-pink-secondary rounded-lg p-4 top-14 w-48 ${isOpenWardrove ? 'block' : 'hidden'}`}>
                                    <Link to="/gallery" className="block hover:text-pink-accent px-3 py-2 text-sm">
                                        {translations[language].header_opt2_1} {/*Gallery*/}
                                    </Link>
                                    <Link to="/labels" className="block hover:text-pink-accent px-3 py-2 text-sm">
                                        {translations[language].header_opt2_2} {/*Labels*/}
                                    </Link>
                                    <Link to="/categories" className="block hover:text-pink-accent px-3 py-2 text-sm">
                                        {translations[language].header_opt2_3} {/*Categories*/}
                                    </Link>
                                </div>

                            </div>
                            <button className="px-5 py-2 text-lg hover:bg-pink-secondary hover:rounded-2xl">
                                {translations[language].header_opt3} {/*Favorites*/}
                            </button>
                            <button className="px-5 py-2 text-lg hover:bg-pink-secondary hover:rounded-2xl">
                                {translations[language].header_opt4} {/*Guide*/}
                            </button>
                            <div className="relative">
                                <button className="px-5 py-2 text-lg hover:bg-pink-secondary hover:rounded-2xl" onClick={() => {setIsOpenAccount(!isOpenAccount); if(isOpenWardrove) {setIsOpenWardrove(false) }}}>
                                    {translations[language].header_opt5} {/*Account*/}
                                </button>

                                <div className={`absolute text-custom-text-color bg-white shadow-md shadow-pink-secondary rounded-lg p-4 top-14 w-48 ${isOpenAccount ? 'block' : 'hidden'}`}>
                                    <a className="block hover:text-pink-accent px-3 py-2 text-sm">
                                        {translations[language].header_opt5_1} {/*Edit*/}
                                    </a>
                                    <a className="block hover:text-pink-accent px-3 py-2 text-sm">
                                        {translations[language].header_opt5_2} {/*Theme*/}
                                    </a>
                                    <Link to="/login" className="block hover:text-pink-accent px-3 py-2 text-sm">
                                        {translations[language].header_opt5_3} {/*Logout*/}
                                    </Link>
                                </div>
                            </div>
                            <a href="https://www.youtube.com/watch?v=dqP5n3yL2RU" target="_blank">
                            <button className=" cursor-pointer px-5 py-2 text-lg rounded-2xl border-3 border-pink-950 bg-rose-500 hover:bg-fuchsia-900 hover:rounded-2xl">
                                VIDEO
                            </button></a>
                        </div>
                    </nav>

                

                    <div className="flex-1 flex justify-end w-full whitespace-nowrap">

                        {/*Toggle Language Button*/}
                        <button className="px-4 py-2 text-lg hover:bg-pink-secondary hover:rounded-2xl"
                            onClick={() =>
                                setLanguage(language === "en" ? "es" : "en")
                            }
                        >

                            {language === "en" ? "ES 🌐" : "EN 🌐"}
                            
                        </button>
                    </div>

                    {/**Hamburger button & Menu */}

                    <div className="md:hidden relative">
                        <div className={`absolute text-custom-text-color bg-white shadow-md shadow-pink-secondary rounded-lg p-4 right-0 top-14 w-48 ${isOpenHamburger ? 'block' : 'hidden'}`}>
                            <Link to="/suggestions" className="block hover:text-custom-text-color hover:bg-pink-faded px-3 py-2 text-sm transition-all duration-300">
                                {translations[language].header_opt1} {/*Suggestions H-Menu*/}
                            </Link>
                            <a className="block hover:text-custom-text-color hover:bg-pink-faded px-3 py-2 text-sm transition-all duration-300"
                                onClick={() => setIsOpenHamburger_Wardrove(!isOpenHamburger_Wardrove)}
                            >
                                {translations[language].header_opt2} {/*Wardrobe H-Menu*/}
                            </a>

                            <Link to="/gallery" className={`block bg-pink-50 hover:text-pink-accent px-3 py-2 text-sm transition-all duration-300 ${isOpenHamburger_Wardrove ? 'block' : 'hidden'}`}>
                                ✅{translations[language].header_opt2_1} {/*Gallery*/}
                            </Link>
                            <Link to="/labels" className={`block bg-pink-50 hover:text-pink-accent px-3 py-2 text-sm transition-all duration-300 ${isOpenHamburger_Wardrove ? 'block' : 'hidden'}`}>
                                ✅{translations[language].header_opt2_2} {/*Labels*/}
                            </Link>
                            <Link to="/categories" className={`block bg-pink-50 hover:text-pink-accent px-3 py-2 text-sm transition-all duration-300 ${isOpenHamburger_Wardrove ? 'block' : 'hidden'}`}>
                                ✅{translations[language].header_opt2_3} {/*Categories*/}
                            </Link>

                            <a className="block hover:text-custom-text-color hover:bg-pink-faded px-3 py-2 text-sm transition-all duration-300">
                                {translations[language].header_opt3} {/*Favorites H-Menu*/}
                            </a>
                            <a className="block hover:text-custom-text-color hover:bg-pink-faded px-3 py-2 text-sm transition-all duration-300">
                                {translations[language].header_opt4} {/*Guide H-Menu*/}
                            </a>
                            <a className="block hover:text-custom-text-color hover:bg-pink-faded px-3 py-2 text-sm transition-all duration-300"
                                onClick={() => setIsOpenHamburger_Account(!isOpenHamburger_Account)}
                            >
                                {translations[language].header_opt5} {/*Account H-Menu*/}
                            </a>
                            
                            <a className={`block bg-pink-50 hover:text-pink-accent px-3 py-2 text-sm transition-all duration-300 ${isOpenHamburger_Account ? 'block' : 'hidden'}`}>
                                ✅{translations[language].header_opt5_1} {/*Edit*/}
                            </a>
                            <a className={`block bg-pink-50 hover:text-pink-accent px-3 py-2 text-sm transition-all duration-300 ${isOpenHamburger_Account ? 'block' : 'hidden'}`}>
                                ✅{translations[language].header_opt5_2} {/*Theme*/}
                            </a>
                            <Link to="/login" className={`block bg-pink-50 hover:text-pink-accent px-3 py-2 text-sm transition-all duration-300 ${isOpenHamburger_Account ? 'block' : 'hidden'}`}>
                                ✅{translations[language].header_opt5_3} {/*Logout*/}
                            </Link>
                        </div>
                        <button className="hover:bg-pink-secondary hover:rounded-xl p-2" onClick={() => setIsOpenHamburger(!isOpenHamburger)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <rect x="4" y="6" width="16" height="2" rx="1" />
                                <rect x="4" y="11" width="16" height="2" rx="1" />
                                <rect x="4" y="16" width="16" height="2" rx="1" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;