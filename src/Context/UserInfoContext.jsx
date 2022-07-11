import { createContext, useEffect, useState } from "react";
import UserContext from "./UserContext";

const UserInfo = createContext();

function Provider({ children }) {

    const [user, setUser] = useState([]);
    var myHeaders = new Headers();
    let data = {};

    useEffect(() => {
        if (user.hasOwnProperty('data')) {
            data['favorites'] = user.favorites;
        }
    }, [])

    return (
        <UserInfo.Provider value={{ user, setUser }}>{children}</UserInfo.Provider>
    )
}
export { UserContext, Provider }