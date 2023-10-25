import { createContext, useState } from "react";

export const UserDataContext = createContext();

export const UserDataContextProvider = ({ children }) => {

    const [matches, setMatches] = useState([]);
    const [matchesStats, setMatchesStats] = useState([]);


    return (
        <UserDataContext.Provider value={{
            matches, 
            setMatches,
            matchesStats,
            setMatchesStats 
            }}>
           
            {children} 
        </UserDataContext.Provider>
    )
}