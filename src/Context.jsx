import { createContext, useState } from "react";


const Context = createContext()

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

export { Context };