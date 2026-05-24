import React, {useState, useContext} from "react";
import translations from "/src/translations/translations.json";
import { LanguageContext } from '../hooks/useContext.jsx';
import Wardrove0 from "../assets/wardroves/wardrove0.png";
import Wardrove1 from "../assets/wardroves/wardrove1.png";
import Wardrove2 from "../assets/wardroves/wardrove2.png";
import Wardrove3 from "../assets/wardroves/wardrove3.png";

const Body_Suggestions = () => {

    {/* Keeps track of the language that's currently selected*/}
    const {language, setLanguage} = useContext(LanguageContext);

    {/* Confirms if at least 1 outfit has been generated*/}
    const [generated, setGenerated] = useState(false);

    {/* List of images that'll be displayed*/}
    const listImages = [Wardrove0, Wardrove1, Wardrove2, Wardrove3];
    const [imageIndex, setImageIndex] = useState(0);

    {/* Handles the popup save message*/}
    const [showSavedMsg, setShowSavedMsg] = useState(false);

    const handleGenerate = () => {
        let newIndex;

        do {
            newIndex = (Math.floor(Math.random() * 3))+1;
        } while (newIndex === imageIndex);

        setImageIndex(newIndex);
        setGenerated(true);
        };

    {/*Shows the saved messagebox*/}
    const handleSave = () => {
        setShowSavedMsg(true);

        setTimeout(() => {
            setShowSavedMsg(false);
        }, 1000); // disappears after 1 second
        };

    return (
        <>
            <div className="flex h-screen w-full flex-col md:flex-row">

                {/* This is where the picture with the outfit will be displayed */}
                <div className="md:basis-2/3 p-4 bg-custom-bg-color flex justify-center items-center">
                    <div className="h-full object-contain block">
                        <img
                            src={listImages[imageIndex]}
                            className="h-full object-contain rounded-xl border-5 border-pink-accent shadow-pink-secondary shadow-md"
                        />

                    </div>
                    
                </div>

                <div className="md:basis-1/3 px-4 md:py-10 py-4 bg-custom-bg-color flex justify-center">
                    <div className="flex flex-col items-center justify-center md:gap-15 gap-5">
                        <button className="bg-pink-secondary w-70 h-20 border-3 border-double border-pink-accent rounded-2xl hover:bg-pink-primary hover:rounded-full transition-all duration-1000" onClick={handleGenerate}> 
                            {translations[language].body_sgt_bt1}
                        </button>

                        <button className={`${generated ? 'block' : 'hidden'} bg-pink-secondary w-70 h-20 border-3 border-double border-pink-accent rounded-2xl hover:bg-pink-primary hover:rounded-full transition-all duration-1000`} onClick={handleSave}> 
                            {translations[language].body_sgt_bt2}
                        </button>

                        {showSavedMsg && (
                            <div className="md:fixed md:bottom-25 bg-pink-accent text-white px-4 py-2 rounded-xl shadow-lg">
                                {translations[language].body_sgt_saved}
                            </div>
                        )}

                    </div>
                    
                </div>
            </div>
        </>
        
    )
}
export default Body_Suggestions;