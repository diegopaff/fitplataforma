import { createContext, useEffect, useState } from "react";

export const UserDataContext = createContext();

export const UserDataContextProvider = ({ children }) => {

    const [matches, setMatches] = useState([]);
    const [matchesStats, setMatchesStats] = useState([]);

    const getMatchById = (id) => {
       const filtered = matches.filter((el) => el.id === id);
       return filtered[0]
    }

    const getMatchStatsById = (id) => {
        const filtered = matchesStats.filter((el) => el.id === id);
        return filtered[0]
    }

    useEffect(()=> {
        console.log(matchesStats)
    },[matchesStats]);
    
    return (
        <UserDataContext.Provider value={{
            matches, 
            setMatches,
            matchesStats,
            setMatchesStats,
            getMatchById, 
            getMatchStatsById
            }}>
           
            {children} 
        </UserDataContext.Provider>
    )
}