import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import Modal from "./Components/ModalAuthorization/Modal";
import Categories from './Components/Categories/Categories';

function App() {

    const elModal = React.useRef();

    return (
        <>
            <Header />
            <Nav />
            <Hero />
            <Categories />
            {/* <button onClick={() => {
                // elModal.current.classList.add("modal--open")
            }}>Click</button>
            <Modal elModal={elModal} /> */}
        </>
    )
}

export default App;
