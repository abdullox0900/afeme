import { createContext, useEffect, useState } from "react";
import { getCookie, setCookie } from "../Utils/cookies";

const DefaultCurrency = "usd";
const CurrencyContext = createContext();

function Provider({children}) {

    const [currency, setCurrency] = useState(getCookie('currency') || DefaultCurrency);

    useEffect(() => {
        setCookie('currency', currency, 5);
    }, [currency])

    return (
        <CurrencyContext.Provider value={{currency, setCurrency}}>{children}</CurrencyContext.Provider>
    )
}

export { CurrencyContext, Provider}