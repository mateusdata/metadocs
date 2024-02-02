import React, { PropsWithChildren, useState, createContext, useEffect } from "react";

export interface FormContext {
    currentUser: any;
    SetCurrentUser: React.Dispatch<React.SetStateAction<any>>;


}
export const GlobalContext = createContext<FormContext>({} as FormContext);

const GlobalContextProvider = ({ children }:any) => {
    const [currentUser, SetCurrentUser] = useState<any>([]);
    useEffect(()=>{
       const data:any =  localStorage.getItem("currentUser");
       SetCurrentUser((JSON.parse(data)));
    },[])


    return (
        <GlobalContext.Provider value={{ currentUser, SetCurrentUser}}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;
