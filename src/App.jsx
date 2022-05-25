import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import Modal from "./Components/ModalAuthorization/Modal";
import Categories from './Components/Categories/Categories';
import Loading from './Components/Loading/Loading';
import Footer from './Components/Footer/Footer';

function App() {

    const elModal = React.useRef();

    return (
        <>
            <Header />
            <Nav />
            <Hero />
            <Categories />
            {/* <Loading /> */}
            <Footer />
        </>
    )
}

export default App;
