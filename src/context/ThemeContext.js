import React, { createContext, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const themeContextInfo = {
    dark_mode: true
}

export const ThemeContext = createContext(themeContextInfo);

export function ThemeProviderComponent({ children }) {

  const [darkMode, setDarkMode] = useState(themeContextInfo.dark_mode);
  
  return <ThemeContext.Provider value={{darkMode: darkMode, setDarkMode: setDarkMode}}>{children}</ThemeContext.Provider>
}