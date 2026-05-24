import React, {useState} from "react";
import translations from "/src/translations/translations.json";
import Component_ListCategory from "./Component_ListCategory.jsx";
import { LanguageContext } from '../hooks/useContext.jsx';
import { useContext } from 'react';
import {useCategories} from "../data/Categories.jsx";

const Body_Categories = () => {

    const categories = useCategories();

    const {language, setLanguage} = useContext(LanguageContext);
    
    return (
        <>
            <div className="flex min-h-full flex-col items-center mx-auto mt-5 max-w-6/7 md:max-w-4/6 gap-3 mt-2">
                <h1 className="text-6xl text-custom-text-color p-4  text-left font-bold mb-4 items-center">
                    {translations[language].category_category}
                </h1>

                <div className=" block w-full h-1 bg-pink-secondary">
                    
                </div>

                <form className="mb-2 min-w-3/4">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="text"
                            placeholder={translations[language].item_new}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-secondary"
                        />
                        <button type="submit" className="px-6 py-2 bg-pink-secondary border-3 border-double border-pink-accent rounded-2xl hover:bg-pink-primary hover:rounded-full transition-all duration-1000">
                        {translations[language].item_add}
                        </button>
                    </div>
                </form>

                <div className=" block w-full h-1 bg-pink-secondary">
                    
                </div>
  

                <div className=" block w-9/10">
                    <Component_ListCategory />  
                </div>

                

            </div>
        </>
        
    )
}

export default Body_Categories;