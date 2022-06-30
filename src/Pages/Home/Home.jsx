// Import => React
import React from "react";

// Import => Components
import Hero from "../../Components/Hero/Hero";
import Categories from "../../Components/Categories/Categories";
import Main from "../../Components/Main/Main";
import AfemePhone from "../../Components/AfemePhone/AfemePhone"
import Footer from "../../Components/Footer/Footer"
import PartnersInner from "../../Components/PartnersInner/PartnersInner";
import Header from "../../Components/Header/Header";
import useWindowDimensions from "../../Utils/windowDimension";

function Home() {

    const { windowWidth } = useWindowDimensions();
    return (
        <>
            <Header/>
            <Hero/>
            <Categories />
            <Main />
            <PartnersInner/>
            {windowWidth > 800 ? (<AfemePhone />) : ''}
            <Footer />
        </>
    )
}
export default Home;