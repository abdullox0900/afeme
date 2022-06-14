//Import => React
import React from "react";
import Container from "../Container/Container";
import Search from "../Search/Search";

// Import => Mui
import { Box } from "@mui/material";
import "../Hero/Hero.scss";

// Import useContext => Localization
import { useContext } from 'react';
import { Context } from '../../Context/LangContext';
import content from '../../Localization/Content';

function Hero() {

    // Localization Functions
    const { lang, setLang } = useContext(Context)

    return (
        <>
            <Box className="hero">
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
