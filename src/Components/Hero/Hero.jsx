import React, { useState, useContext, useEffect } from "react";
// Import useContext => Localization
import { Context } from '../../Context/LangContext';
import content from '../../Localization/Content';
import { Container } from "@mui/material";
import Search from "../Search/Search";

// Import => Mui
import { Box } from "@mui/material";
import HeroImg1 from "../../Assets/Img/home-hero-1.jpg";
import HeroImg2 from "../../Assets/Img/home-hero-2.jpg";
import HeroImg3 from "../../Assets/Img/home-hero-3.jpg";
import HeroImg4 from "../../Assets/Img/home-hero-4.jpg";
import HeroImg5 from "../../Assets/Img/home-hero-5.jpg";
import HeroImg6 from "../../Assets/Img/home-hero-6.jpg";
import "../Hero/Hero.scss";

function Hero() {

    const { lang, setLang } = useContext(Context);
    const images = [HeroImg1, HeroImg2, HeroImg3, HeroImg4, HeroImg5, HeroImg6];
    const [randImg, setRandImg] = useState('');
    useEffect(() => {
        let randomNumb = Math.floor(Math.random() * images.length);
        setRandImg(images[randomNumb]);
    }, []);

    return (
        <Box className="hero" style={{ backgroundImage: `url(${randImg})` }}>
            <Container className="container">
                <div className="hero__object">
                    <Box className="hero__blog">
                        <h2 className="hero__main-title">{content[lang].hero_title}</h2>
                        <Search />
                    </Box>
                </div>
            </Container>
        </Box>
    );
}
export default Hero;
