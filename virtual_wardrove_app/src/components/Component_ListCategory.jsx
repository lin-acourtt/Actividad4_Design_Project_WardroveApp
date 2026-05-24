import React, {useState} from "react";
import {useCategories} from "../data/Categories.jsx";

import Component_ListItemCategory from "./Component_ListItemCategory.jsx";

const Component_ListCategory = () => {

    const categories = useCategories();
    
    return (
        <>
            <div className="flex flex-col gap-4">
                
                {Object.entries(categories).filter(([key]) => key !== "0").map(([key, value]) => (
                    <Component_ListItemCategory item={value} />
                ))}
   
                
            </div>
        </>
        
    )
}

export default Component_ListCategory;