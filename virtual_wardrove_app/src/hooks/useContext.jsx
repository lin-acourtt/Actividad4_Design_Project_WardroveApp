import { createContext, useState } from 'react';

export const LanguageContext = createContext("es");

export function LanguageProvider({ children }) {

  const [language, setLanguage] = useState("es");

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}