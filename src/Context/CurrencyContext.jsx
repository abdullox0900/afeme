import { createContext, useEffect, useState } from "react";
import { getCookie, setCookie } from "../Utils/cookies";

const DefaultCurrency = "usd";
const Context = createContext();

function Provider({children}) {

    const [currency, setCurrency] = useState(getCookie('currency') || DefaultCurrency);

    useEffect(() => {
        setCookie('currency', currency, 5);
    }, [currency])

    return (
        <Context.Provider value={{currency, setCurrency}}>{children}</Context.Provider>
    )
}

export { Context, Provider}