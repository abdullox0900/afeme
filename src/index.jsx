import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
import App from "./App";
import { Provider as LangProvider } from "./Context/LangContext";
import { Provider as UserProvider } from "./Context/UserContext";
import { Provider as CurrencyProvider } from "./Context/CurrencyContext";
import { Provider as IPProvider } from "./Context/IPContext";
import { Provider as SearchContext } from "./Context/SearchContext";

window.replainSettings = { id: "c2f4a578-9a1f-49ac-9214-44448b236714" };
(function (u) {
    var s = document.createElement("script");
    s.async = true;
    s.src = u;
    var x = document.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);
    x.style.zIndex = "1";
})("https://widget.replain.cc/dist/client.js");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <LangProvider>
            <UserProvider>
                <CurrencyProvider>
                    <IPProvider>
                        <SearchContext>
                            <Loader />
                            <App />
                        </SearchContext>
                    </IPProvider>
                </CurrencyProvider>
            </UserProvider>
        </LangProvider>
    </BrowserRouter>
);
