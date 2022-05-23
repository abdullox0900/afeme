import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import Modal from "./Components/ModalAuthorization/Modal";

function App() {
    return (
        <>
            <Header />
            <Search />
            <Modal />
        </>
    )
}

export default App;
