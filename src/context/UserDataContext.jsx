import { createContext, useState } from "react";

export const UserDataContext = createContext();

export const UserDataContextProvider = ({ children }) => {

    const [matches, setMatches] = useState([]);
    const [matchesStats, setMatchesStats] = useState([]);

    const getMatchById = (id) => {
       const filtered = matches.filter((el) => el.id === id);
       return filtered[0]
    }


    return (
        <UserDataContext.Provider value={{
            matches, 
            setMatches,
            matchesStats,
            setMatchesStats ,
            getMatchById
            }}>
           
            {children} 
        </UserDataContext.Provider>
    )
}