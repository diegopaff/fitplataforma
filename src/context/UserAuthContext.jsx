import { createContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword , onAuthStateChanged , signOut} from "firebase/auth";
import { auth } from '../../utilities/firebase';



export const userAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
    const[user, setUser] = useState({});
    

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        signOut(auth);
        
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            
        });
        return () => {
            unsubscribe(); //clean up when the component is dismounted
        }
        

    },[]);


    return (
        <userAuthContext.Provider 
        value={{
            logIn, 
            user, 
            logOut,
            }}>
            {children}
        </userAuthContext.Provider>
    )
};


