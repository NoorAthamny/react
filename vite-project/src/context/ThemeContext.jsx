/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const ThemeContext = createContext();

export const ThemeProvider = ({children }) => {
 const  [isDayMode, setIsDayMode] = useState(true)

const toggleTheme = () => {
    setIsDayMode(prevMode => !prevMode)
}


    return (
        <ThemeContext.Provider value={{isDayMode , toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )



}