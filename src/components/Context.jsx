import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
    const [data,setData] = useState({
        lang:"br",
    });
             
    return(
        <LanguageContext.Provider value={{data,setData}}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguageContext = () => useContext(LanguageContext);