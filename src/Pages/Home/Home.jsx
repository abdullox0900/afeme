import React from "react";
import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";
import Hero from "../../Components/Hero/Hero";
import Categories from "../../Components/Categories/Categories";
import Main from "../../Components/Main/Main";

function Home() {
    return (
        <>
            <Header />
            <Nav />
            <Hero />
            <Categories />
            <Main />
        </>
    )
}

export default Home;