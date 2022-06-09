import React from "react";
import Loader from "../../Components/Loader/Loader"
import Container from "../../Components/Container/Container";
import Header from "../../Components/Header/Header";
import AdvertComponent from "../../Components/Advert/Advert";
import { Box, Typography } from "@mui/material";

import Footer from "../../Components/Footer/Footer"
import RightArrow from "../../Assets/Img/arrow-right.svg";
import CardImg1 from "../../Assets/Img/card_img1.jpg";
import CardImg2 from "../../Assets/Img/card_img2.jpg";
import CardImg3 from "../../Assets/Img/card_img3.jpg";
import CardImg4 from "../../Assets/Img/card_img4.jpg";
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

export default Advert