"use client"
import { createContext } from "react"

export const UserContext = createContext(null);

export const UserProvider = ({children}) =>{
    const user = "Nikhil";
    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}