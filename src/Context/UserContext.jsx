import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

function Provider({ children }) {

    const [user, setUser] = useState([]);
    var myHeaders = new Headers();
    const token = localStorage.getItem("Token")
    let data = {};

    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    function setErrorData() {
        data['status'] = false;
        setUser(data);
    }

    useEffect(() => {
        if (token) {
            fetch("http://ali98.uz/api/getuser", requestOptions)
                .then(response => response.text())
                .then((response) => {
                    let status = JSON.parse(response).status;
                    let newData = JSON.parse(response).data
                    if (status == true && newData.hasOwnProperty("id")) {
                        data['data'] = newData;
                        data['status'] = true;
                        data['favorites'] = newData.favorites.length;
                        setUser(data);
                    } else {
                        setErrorData();
                    }
                })
                .catch((error) => {
                    setErrorData();
                })
        } else {
            setErrorData();
        }
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
    )
}
export { UserContext, Provider }