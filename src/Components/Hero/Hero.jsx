import React, { useState, useContext, useEffect } from "react";
// Import useContext => Localization
import { Context } from '../../Context/LangContext';
import content from '../../Localization/Content';
import Container from "../Container/Container";
import Search from "../Search/Search";

// Import => Mui
import { Box } from "@mui/material";
import HeroImg1 from "../../Assets/Img/header_banner1.jpg"
import HeroImg2 from "../../Assets/Img/header_banner2.jpg"
import HeroImg3 from "../../Assets/Img/header_banner3.png"
import HeroImg4 from "../../Assets/Img/header_banner4.jpg"
import HeroImg5 from "../../Assets/Img/header_banner5.jpg"
import HeroImg6 from "../../Assets/Img/advertImg.jpg"
import "../Hero/Hero.scss";

function Hero() {

    // Localization Functions
    const { lang, setLang } = useContext(Context);
    const images = [HeroImg1, HeroImg2, HeroImg3, HeroImg4, HeroImg5, HeroImg6];
    const [randImg, setRandImg ] = useState('');
    useEffect(() => {
        let randomNumb = Math.floor(Math.random() * images.length);
        setRandImg(images[randomNumb]);
    });

    return (
        <>
            <Box className="hero" style={{backgroundImage: `url(${randImg})`}}>
                <Container>
                    <Box className="hero__blog">
                        <h2 className="hero__main-title">{content[lang].hero_title}</h2>
                        <Search />
                    </Box>
                </Container>
            </Box>
        </>
    );
}
export default Hero;
