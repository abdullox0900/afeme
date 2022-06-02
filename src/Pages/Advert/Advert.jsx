import React from "react";
import Loader from "../../Components/Loader/Loader"
import Container from "../../Components/Container/Container";
import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";
import AdvertComponent from "../../Components/Advert/Advert";
import { Box, Typography } from "@mui/material";
import { Cards } from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer"
import RightArrow from "../../Assets/Img/arrow-right.svg";
import CardImg1 from "../../Assets/Img/card_img1.jpg";
import CardImg2 from "../../Assets/Img/card_img2.jpg";
import CardImg3 from "../../Assets/Img/card_img3.jpg";
import CardImg4 from "../../Assets/Img/card_img4.jpg";

function Advert() {

    const data = {
        housePrice: 1400,
        houseType: 'uy',
        houseTitle: 'My house',
        houseAddress: 'Andijan',
        houseImg: CardImg1,
        houseUrl: '/adverts',
        description: "Shinam uy Hovli va joy. Suv Gaz Elektr energiyasi mavjud. Uy 6 xonali bo'lib barcha kerakli sharoitlarga ega. Xonalar: Oshxona Yotoqxona, Mehmonxona Vanna Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, exercitationem! sit amet consectetur adipisicing elit. Doloribus, exercitationem!..."
    };
    return (
        <>
            <Loader/>
            <Header />
            <Nav />
            <AdvertComponent />
            <section className="section recommend">
                <Typography variant="h3" className="section__title">Tavsiya etilgan turar-joy majmualari</Typography>
                <div className="cards">
                    <Cards data={data} />
                    <Cards data={data} />
                    <Cards data={data} />
                </div>
                <Box className="viewAll"><a href="/" className="viewAll__link">Barchasini ko’rish </a><img src={RightArrow} alt="" /></Box>
            </section>
            <Footer />
        </>
    )
}

export default Advert