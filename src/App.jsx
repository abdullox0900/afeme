import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Modal from "./Components/ModalAuthorization/Modal";
import Categories from './Components/Categories/Categories';

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Categories />
            <Modal />
        </>
    )
}

export default App;
