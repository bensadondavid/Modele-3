import { createContext, useState } from "react";

export const Context = createContext()

export const MyContextProvider = ({ children }) =>{
    const [language, setLanguage] = useState('francais')

    return(
        <>
        <Context.Provider value={{ language, setLanguage }}>
            {children}
        </Context.Provider>
        </>
    )
}
