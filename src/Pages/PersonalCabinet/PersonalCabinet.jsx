import React from "react";
import { NavLink, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Container from "../../Components/Container/Container";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Liked from "../../Components/Liked/Liked";
import Personal from "../../Components/Personal/Personal";
import Posts from "../../Components/Posts/Posts";
import Settings from "../../Components/Settings/Settings";
import style from './Cabinet.module.scss'

function PersonalCabinet() {
    return (
        <>
            <Container>
                <Header />
                <div style={{ display: 'flex' }}>
                    <div className={style.btng}>
                        <NavLink to={"/posts"}>
                            <button>
                                Elonlarim </button>
                        </NavLink>
                        <NavLink to={"/liked"} >
                            <button> Yoktirganlarim </button>
                        </NavLink>
                        <NavLink to={"/setting"} >
                            <button> Sozlamalar </button>
                        </NavLink>
                    </div>
                    <Personal />
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default PersonalCabinet;