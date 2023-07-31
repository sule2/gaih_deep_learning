import {createContext, useState, useEffect} from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
    const [theme,setTheme] = useState(localStorage.getItem('theme') || 'dark');//keeps the value on application local storage

    useEffect(()=>{
        localStorage.setItem('theme',theme);
    },[theme])

    const values = {
        theme,
        setTheme
    };

    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}

export default ThemeContext;