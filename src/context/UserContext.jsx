'use client'
import { createContext, useCallback, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user,setUser] = useState('');
    const [search,setSearch] = useState(null);

    const addUser = useCallback((name) => {
        setUser(name);
    }, []);

    const setSearchKey = useCallback((key) => {
        setSearch(key);
    }, []);

    return <UserContext.Provider value={{ user, addUser, search, setSearchKey }}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext);