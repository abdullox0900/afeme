import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../../Components/Container/Container";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Liked from "../../Components/Liked/Liked";
import Personal from "../../Components/Personal/Personal";
import Posts from "../../Components/Posts/Posts";
import Settings from "../../Components/Settings/Settings";
import style from './Cabinet.module.scss'
import CardImg6 from '../../Assets/Img/card_img1.jpg'
import CardImg1 from '../../Assets/Img/card_img1.jpg'
import { Ucards } from '../../Components/Card/Card'

function PersonalCabinet() {
    const data = {
        houseType: 'Uy',
        housePrice: 1400,
        houseTitle: 'My house',
        houseAddress: 'Andijan',
        houseUrl: '/adverts',
        houseImg: CardImg1,
    };
    const sData = {
        houseTitle: 'My house',
        houseAddress: 'Andijan',
        houseUrl: '/adverts',
        houseImg: CardImg6,
    };
    return (
        <>
            <Container>
                <Header />
                <div style={{ display: 'flex' }}>
                    <div style={{ flexDirection: 'column' }}>
                        <div className={style.btng}>
                            <NavLink to={"/posts"}>
                                <button className={style.active}> Elonlarim </button>
                            </NavLink>
                            <NavLink to={"/liked"} >
                                <button> Yoktirganlarim </button>
                            </NavLink>
                            <NavLink to={"/settings"} >
                                <button> Sozlamalar </button>
                            </NavLink>
                        </div>
                        <h1 style={{color: '#0468ff',}}>El’onlarim</h1>
                        <div style={{display:'flex', flexWrap:'wrap', gap:'20px', justifyContent:'center'}}>
                            <Ucards data={data} />
                            <Ucards data={data} />
                            <Ucards data={data} />
                            <Ucards data={data} />
                        </div>
                    </div>
                    <Personal />
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default PersonalCabinet;