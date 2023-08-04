import { createContext, useState } from "react";

export const NavbarStateContext = createContext();

export const NavbarStateContextProvider = ({ children }) => {

    const [active, setActive] = useState(false);

    const toggleActive = () => setActive(!active);

    return (
        <NavbarStateContext.Provider value={{
            toggleActive, 
            active, 
            }}>
           
            {children} 
        </NavbarStateContext.Provider>
    )
}