import { createContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

function Provider({children}) {
    
    const [token, setToken] = useState(localStorage.getItem("Token") || null);
    const [user, setUser] = useState([]);
    const URL = "https://ali98.uz/api/user/169";
    let data = {};

    function setErrorData() {
        data['status'] = false;
        setUser(data);
    }

    useEffect(() => {
        if (token) {
            axios
            .get(URL)
            .then((response) => {
                let status = response.data.status;
                let newData = response.data.data
                if ((status == true || status == 200) && newData.hasOwnProperty("id")) {
                    data['data'] = newData;
                    data['status'] = true;
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
    }, [token]);

    return (
        <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
    )
}
export { UserContext, Provider}