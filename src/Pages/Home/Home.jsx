import React from "react";
import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";
import Hero from "../../Components/Hero/Hero";
import Categories from "../../Components/Categories/Categories";
import Main from "../../Components/Main/Main";
import Loader from "../../Components/Loader/Loader"
import Footer from "../../Components/Footer/Footer"
import WhyAfeme from "../../Components/WhyAfeme/WhyAfeme";
import Carousel from "../../Components/Carousel/Carousel"

function Home() {

    return (
        <>
            <Loader/>
            <Header />
            <Nav />
            <Hero />
            <Categories />
            <Main />
            <WhyAfeme />
            <Carousel />
            <Footer />
        </>
    )
}

export default Home;