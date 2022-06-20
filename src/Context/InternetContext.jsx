import { createContext, useState } from "react";

const InternetContext = createContext();

function Provider({children}) {

    const [netStatus, setNetStatus] = useState(true);

    const checkInternetStatus = async () => {
        try {
            const online = await fetch("./test.svg");
            return online.status == 200 && online.status < 300
        } catch (error) {
            return false
        }
    };

    setTimeout(() => {
        setInterval(async () => {
            const result = await checkInternetStatus();
            setNetStatus(result);
        }, 3000);
    }, 5000);

    return (
        <InternetContext.Provider value={{netStatus, setNetStatus}}>{children}</InternetContext.Provider>
    )
}

export { InternetContext, Provider}