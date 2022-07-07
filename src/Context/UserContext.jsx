import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

function Provider({ children }) {
    const [user, setUser] = useState([]);
    var myHeaders = new Headers();
    const token = localStorage.getItem("Token")

    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    useEffect(() => {
        fetch("http://ali98.uz/api/getuser", requestOptions)
            .then(response => response.text())
            .then(result => setUser(JSON.parse(result)))
            .catch(error => console.log('error', error));
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
    )
}
export { UserContext, Provider }