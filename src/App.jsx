import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import Main from './Components/Main/Main';
import Modal from "./Components/ModalAuthorization/Modal";
import Categories from './Components/Categories/Categories';
import Loading from './Components/Loading/Loading';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';
import LoginImg from './Components/LoginImg/LoginImg';

function App() {

    const elModal = React.useRef();

    return (
        <>
            <Header />
            <LoginImg />
            {/* <Form /> */}
            {/* <Nav /> */}
            {/* <Hero /> */}
            {/* <Categories /> */}
            {/* <Main /> */}
            {/* <Loading /> */}
            {/* <Footer /> */}
        </>
    )
}

export default App;
