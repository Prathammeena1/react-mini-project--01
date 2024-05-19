import { createContext, useState } from "react";

export const usercontext = createContext(null) 

const UserContext = ({ children }) => {
    const [users, setusers] = useState(JSON.parse(localStorage.getItem('Users')) || []);

    return (
        <usercontext.Provider value={[users, setusers]}>
            {children}
        </usercontext.Provider>
    )
}

export default UserContext