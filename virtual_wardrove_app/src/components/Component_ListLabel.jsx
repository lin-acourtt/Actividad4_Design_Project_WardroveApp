import React, {useState} from "react";
import {useLabels} from "../data/Labels.jsx";

import Component_ListItemLabel from "./Component_ListItemLabel.jsx";

const Component_ListLabel = () => {

    const labels = useLabels();
    
    return (
        <>
            <div className="flex flex-col gap-4">
                
                {
                labels.map(
                    label => (
                        <Component_ListItemLabel item={label} />
                    )
                )
                }
                
            </div>
        </>
        
    )
}

export default Component_ListLabel;