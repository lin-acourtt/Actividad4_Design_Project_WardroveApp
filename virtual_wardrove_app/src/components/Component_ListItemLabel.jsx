import React, {useState, useContext} from "react";
import translations from "/src/translations/translations.json";
import { LanguageContext } from '../hooks/useContext.jsx';

const Component_ListItemLabel = ({item}) => {

    {/** item has .id, .name and .category */}

    
    const {language, setLanguage} = useContext(LanguageContext);
    
    return (
        <>
        <div className="bg-white rounded-lg shadow-sm shadow-pink-faded p-4 mb-3 border border-gray-200 hover:shadow-md hover:shadow-pink-secondary transition-shadow duration-300">
            
            {/* Show item name and edit/delete buttons */}
            <div className="flex items-center justify-between">
                <div className="flex items-center flex-1">
  
                <span className="ml-3 flex-1 text-md">
                    {item.name}
                </span>

                    
                </div>
                <div className="flex items-center space-x-2 ml-4">
                    <>
                        <button
                            className="text-blue-600 hover:bg-blue-50 rounded-lg p-1 sm:p-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-primary focus:ring-offset-2"
                            title={translations[language].item_edit}
                        >
                            <svg class="w-6 h-6 text-green-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="#7ca288" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                            </svg>


                        </button>
                        <button
                            className="text-red-600 hover:bg-red-50 rounded-lg p-1 sm:p-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2"
                            title={translations[language].item_delete}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#c07c8d">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m-7 0h8m-4-3h-2a1 1 0 00-1 1v1h4V5a1 1 0 00-1-1z" />
                            </svg>

                        </button>
                        </>
                    
                </div>

            {/* Show item category */}
            </div>
                <div className="mt-2">
                    <span className="inline-flex px-2 py-1 text-sm font-semibold rounded-full bg-pink-accent text-white">
                        {translations[language].category_category}: {item.category}
                    </span>
                </div>
        </div>
        </>
        
    )
}
export default Component_ListItemLabel;