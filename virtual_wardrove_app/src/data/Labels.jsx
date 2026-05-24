import translations from "/src/translations/translations.json";

import {useCategories} from "./Categories.jsx";
import { LanguageContext } from '../hooks/useContext.jsx';
import { useContext } from 'react';


export const useLabels = () => {
  const { language } = useContext(LanguageContext);


  const Categories = useCategories();

  return (
        [
    {
        id: 1, // Head
        name: translations[language].label_1,
        category: Categories[1]
    },
    {
        id: 2, // Head
        name: translations[language].label_2,
        category: Categories[1]
    },
    {
        id: 3, // Head
        name: translations[language].label_3,
        category: Categories[1]
    },
    {
        id: 4, // Torso - Ext
        name: translations[language].label_4,
        category: Categories[2]
    },
    {
        id: 5, // Torso - Ext
        name: translations[language].label_5,
        category: Categories[2]
    },
    {
        id: 6, // Torso
        name: translations[language].label_6,
        category: Categories[3]
    },
    {
        id: 7, // Torso
        name: translations[language].label_7,
        category: Categories[3]
    },
    {
        id: 8, // Torso
        name: translations[language].label_8,
        category: Categories[3]
    },
    {
        id: 9, // Dress
        name: translations[language].label_9,
        category: Categories[4]
    },
    {
        id: 10, // Dress
        name: translations[language].label_10,
        category: Categories[4]
    },
    {
        id: 11, // Legs
        name: translations[language].label_11,
        category: Categories[5]
    },
    {
        id: 12, // Legs
        name: translations[language].label_12,
        category: Categories[5]
    },
    {
        id: 13, // Legs
        name: translations[language].label_13,
        category: Categories[5]
    },
    {
        id: 14, // Legs
        name: translations[language].label_14,
        category: Categories[5]
    },
    {
        id: 15, // Socks
        name: translations[language].label_15,
        category: Categories[6]
    },
    {
        id: 16, // Socks
        name: translations[language].label_16,
        category: Categories[6]
    },
    {
        id: 17, // Shoes
        name: translations[language].label_17,
        category: Categories[7]
    },
    {
        id: 18, // Shoes
        name: translations[language].label_18,
        category: Categories[7]
    }
        ]
  ) 
};

