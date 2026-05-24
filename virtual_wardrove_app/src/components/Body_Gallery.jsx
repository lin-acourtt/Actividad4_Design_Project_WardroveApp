import React, {useState} from "react";
import translations from "/src/translations/translations.json";
import Component_ListCategory from "./Component_ListCategory.jsx";
import { LanguageContext } from '../hooks/useContext.jsx';
import { useContext } from 'react';
import {useCategories} from "../data/Categories.jsx";
import Component_PhotoIcons from "./Component_PhotoIcons.jsx";

const Body_Gallery = () => {

    const galleryItems = [
        "src/assets/gallery/gallery0.png",
        "src/assets/gallery/gallery1.png",
        "src/assets/gallery/gallery2.png",
        "src/assets/gallery/gallery3.png",
        "src/assets/gallery/gallery4.png",
        "src/assets/gallery/gallery5.png",
        "src/assets/gallery/gallery6.png",
        "src/assets/gallery/gallery7.png",
        "src/assets/gallery/gallery8.png",
        "src/assets/gallery/gallery9.png",
        "src/assets/gallery/gallery10.png"
    ]; 

    const categories = useCategories();

    const {language, setLanguage} = useContext(LanguageContext);
    
    return (
        <>
            <div className="flex min-h-full flex-col items-center mx-auto mt-5 w-full gap-3 mt-2">
                <h1 className="text-6xl text-custom-text-color p-4  text-left font-bold mb-4 items-center">
                    {translations[language].gallery_gallery}
                </h1>

                <div className=" block w-full h-1 bg-pink-secondary">
                    
                </div>

                <form className="mb-2 min-w-3/4">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button type="submit" className="px-12 mx-auto py-2 bg-pink-secondary border-3 border-double border-pink-accent rounded-2xl hover:bg-pink-primary hover:rounded-full transition-all duration-1000">
                        {translations[language].item_add}
                        </button>
                    </div>
                </form>

                <div className=" block w-full h-1 bg-pink-secondary">
                    
                </div>

                <p className="text-lg text-left text-custom-text-color mb-2">
                    Filtrar
                </p>
  
                {/* Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:w-7/8 px-3 ">
                    {galleryItems.map((src, index) => (
                        <div key={index} className="m-3  aspect-square overflow-hidden rounded-xl border-5 border-pink-faded shadow-pink-secondary shadow-md hover:border-pink-accent transition-all duration-300">
                            <Component_PhotoIcons src={src} />
                        </div>
                    ))}
                </div>
                

            </div>
        </>
        
    )
}

export default Body_Gallery;