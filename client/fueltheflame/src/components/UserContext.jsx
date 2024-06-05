import { createContext, useEffect, useState } from "react";
import axios from 'axios';
export const userContext = createContext({});

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const FetchUser = async () => {
            try {
                const response = await axios.get('/browse')
                setUser(response)
            } catch (err) {
                console.error(err)
            }  finally {
                setLoading(false)
            }
        } 
        FetchUser()
        
    },[])
    
    return (
        <userContext.Provider value={{user, setUser, loading}}>
         {children}
        </userContext.Provider>
    );
}