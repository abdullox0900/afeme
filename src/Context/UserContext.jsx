import { createContext, useEffect, useState } from "react";
import { getCookie, setCookie } from "../Utils/cookies";

const UserContext = createContext();

function Provider({children}) {

    const [token, setToken] = useState(localStorage.getItem("Token") || null);
    const [isUser, setIsUser] = useState([]);

    useEffect(() => {
        if (token) {
            setIsUser(true);
        } else {
            setIsUser(false);
        }
    }, [token])

    return (
        <UserContext.Provider value={{isUser, setIsUser}}>{children}</UserContext.Provider>
    )
}
export { UserContext, Provider}