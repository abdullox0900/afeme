import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
import App from "./App";
import { Provider as LangProvider } from "./Context/LangContext";
import { Provider as UserProvider } from "./Context/UserContext";
import { Provider as UpdateUserProvider } from "./Context/UpdateUserContext";
import { Provider as CurrencyProvider } from "./Context/CurrencyContext";
import { Provider as IPProvider } from "./Context/IPContext";
import { Provider as SearchContext } from "./Context/SearchContext";
import Modal from "./Components/LoginModals/ModalAuthorization/Modal"

const root = ReactDOM.createRoot(document.getElementById("root"));

window.addEventListener('load', function(){
    document.body.style.overflow = 'auto';
    document.body.classList.add('loaded');
})
root.render(
    <BrowserRouter>
        <LangProvider>
            <UpdateUserProvider>
                <UserProvider>
                    <CurrencyProvider>
                        <IPProvider>
                            <SearchContext>
                                <Loader />
                                <App />
                                <Modal/>
                            </SearchContext>
                        </IPProvider>
                    </CurrencyProvider>
                </UserProvider>
            </UpdateUserProvider>
        </LangProvider>
    </BrowserRouter>
);
