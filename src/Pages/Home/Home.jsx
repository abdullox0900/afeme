// Import => React
import React from "react";

// Import => Components
import Hero from "../../Components/Hero/Hero";
import Categories from "../../Components/Categories/Categories";
import Main from "../../Components/Main/Main";
import AfemePhone from "../../Components/AfemePhone/AfemePhone"
import Footer from "../../Components/Footer/Footer"
import PartnersInner from "../../Components/PartnersInner/PartnersInner";

// Import => Img Component
import Partners1 from "../../Assets/Img/partners1.jpg";
import Partners2 from "../../Assets/Img/partners2.jpg";
import Partners3 from "../../Assets/Img/partners3.jpg";
import Partners4 from "../../Assets/Img/partners4.jpg";
import Header from "../../Components/Header/Header";

function Home() {

    const data = {
        images: [Partners1, Partners2, Partners3, Partners4],
    }
    return (
        <>
            <Header/>
            <Hero/>
            <Categories />
            <Main />
            <PartnersInner/>
            <AfemePhone />
            <Footer />
        </>
    )
}

export default Home;