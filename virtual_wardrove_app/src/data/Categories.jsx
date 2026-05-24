import translations from "/src/translations/translations.json";
import { LanguageContext } from '../hooks/useContext.jsx';
import { useContext } from 'react';

export const useCategories = () => {
  const { language } = useContext(LanguageContext);

  return {
    0: translations[language].category_all,
    1: translations[language].category_head,
    2: translations[language].category_torso_ext,
    3: translations[language].category_torso,
    4: translations[language].category_dress,
    5: translations[language].category_legs,
    6: translations[language].category_socks,
    7: translations[language].category_shoes,
  };
};