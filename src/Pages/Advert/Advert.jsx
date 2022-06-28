// Import => React
import React from "react";

// Import => Components
import Header from "../../Components/Header/Header";
import AdvertComponent from "../../Components/Advert/Advert";
import Footer from "../../Components/Footer/Footer";

// IMport => Style Components
import "./Advert.scss";

function Advert() {

    return (
        <>
            <Header />
            <AdvertComponent />
            <Footer />
        </>
    )
}

export default Advert;