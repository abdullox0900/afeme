import { createContext, useState } from "react";

const IPContext = createContext();

function Provider({children}) {

    const [IP, setIP] = useState(JSON.parse(window.localStorage.getItem('IP')) || "");

    return (
        <IPContext.Provider value={{IP, setIP}}>{children}</IPContext.Provider>
    )
}
export { IPContext, Provider}