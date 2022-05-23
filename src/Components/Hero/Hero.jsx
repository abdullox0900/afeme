import React from "react";
import Container from "../Container/Container";
import Search from "../Search/Search";

import { Box } from "@mui/material";
import "../Hero/Hero.scss";

function Hero() {
    return (
        <>
            <Box className="hero">
                <Container>
                    <Box className="hero__blog">
                        <h2 className="hero__main-title">Toshkent shahridagi ko'chmas mulk</h2>

                        <Search />
                    </Box>
                </Container>
            </Box>
        </>
    );
}
export default Hero;
