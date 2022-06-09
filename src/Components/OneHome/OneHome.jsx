// Import React
import React from "react";

// Import Components
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Hero from "../Hero/Hero";
import Categories from "../Categories/Categories";
import "../OneHome/OneHome.scss";

function OneHome() {
    return (
        <>
            <div className="wrapper-home">
                <Header />
                <Hero/>
            </div>
        </>
    )
};

export default OneHome;