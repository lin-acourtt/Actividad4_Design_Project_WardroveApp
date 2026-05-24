import React, { useState } from "react";
import { Categories } from "/src/data/Categories.jsx";

import { LanguageContext } from '../hooks/useContext.jsx';

const Component_LabelCategory = ({item, onDelete, onToggle, onEdit}) => {

    
    const {language, setLanguage} = useContext(LanguageContext);


    const [isEditing, setIsEditing] = useState(false);
    const [editName, setEditName] = useState(item.name);

    const handleSave = () => {
        onEdit(item.id, editName);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditName(item.name);
        setIsEditing(false);

    };

    return(
        <div className="bg-white rounded-lg shadow-md p-4 mb-3 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between">
                <div className="flex items-center flex-1">

                    {isEditing ? (
                        <input type="text"
                                value={editName}
                                onChange={(e) => setEditName(e.target.value)}
                                className="ml-3 flex-1 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        </input>
                    ) : (
                        
                        <span className="ml-3 flex-1 text-sm">
                            {item.name}
                        </span>

                    )}
                    
                </div>
                <div className="flex items-center space-x-2 ml-4">
                    {isEditing ? (
                        <div>
                            <>
                        <button
                            onClick={handleSave}
                            className="mr-2 text-pink-600 hover:bg-blue-100 rounded-lg p-1 sm:p-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            title={translations[language].item_save}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V7l-4-4z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 3v5h10V3M12 17a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                        </button>
                        <button
                            onClick = {handleCancel}
                            className="text-red-600 hover:bg-red-100 rounded-lg p-1 sm:p-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                            title={translations[language].item_cancel}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        </>
                        </div>
                    ) : (
                        <>
                        <button
                            onClick={
                                () => setIsEditing(true)
                            }
                            className="text-blue-600 hover:bg-blue-100 rounded-lg p-1 sm:p-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            title={translations[language].item_edit}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6.232-6.232a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-2.828 0L9 13zm-6 6h6v-6H3v6z" />
                            </svg>

                        </button>
                        <button
                            onClick = {() => onDelete(task.id)}
                            className="text-red-600 hover:bg-red-100 rounded-lg p-1 sm:p-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                            title={translations[language].item_delete}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m-7 0h8m-4-3h-2a1 1 0 00-1 1v1h4V5a1 1 0 00-1-1z" />
                            </svg>

                        </button>
                        </>
                    )
                    }
                    
                </div>
            </div>


        </div>
    )
}
export default Component_LabelCategory;