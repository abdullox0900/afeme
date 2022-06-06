import React from "react";
import Loader from "../../Components/Loader/Loader"
import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";
import Hero from "../../Components/Hero/Hero";
import Categories from "../../Components/Categories/Categories";
import Main from "../../Components/Main/Main";
import WhyAfeme from "../../Components/WhyAfeme/WhyAfeme";
import Carousel from "../../Components/Carousel/Carousel"
import AfemePhone from "../../Components/AfemePhone/AfemePhone"
import Footer from "../../Components/Footer/Footer"


function Home() {

    return (
        <>
            {/* <Loader/> */}
            <Header />
            <Nav />
            <Hero />
            <Categories />
            <Main />
            <WhyAfeme />
            <Carousel />
            <AfemePhone />
            <Footer />
        </>
    )
}

export default Home;