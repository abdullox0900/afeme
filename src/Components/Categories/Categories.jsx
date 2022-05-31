import React from "react";
import Container from "../Container/Container";
import HomeIcon from "../../Assets/Img/homeIcon.svg";
import Categories1 from "../../Assets/Img/categories1.svg";
import Categories2 from "../../Assets/Img/categories2.svg";
import Categories3 from "../../Assets/Img/categories3.svg";
import Categories4 from "../../Assets/Img/categories4.svg";

import { Box } from "@mui/material";
import "../../Assets/scss/colors.scss";
import "../Categories/Categories.scss";

function Categories() {
    
    const [price, setPrice] = React.useState('');
    const [room, setRoom] = React.useState('');

    const priceChange = (event) => {
        setPrice(event.target.value);
    };
    const roomChange = (event) => {
        setRoom(event.target.value);
    };

    return (
        <>
            <Box className="categories">
                <Container>
                    <Box className="categories__content">
                        <a href="/" className="categories__items">
                            <Box className="categories__img"><img src={Categories1} alt="" /></Box>
                        </a>
                        <a href="/" className="categories__items">
                            <Box className="categories__img"><img src={Categories2} alt="" /></Box>
                        </a>
                        <a href="/" className="categories__items">
                            <Box className="categories__img"><img src={HomeIcon} alt="" /></Box>
                        </a>
                        <a href="/" className="categories__items">
                            <Box className="categories__img"><img src={Categories3} alt="" /></Box>
                        </a>
                        <a href="/" className="categories__items">
                            <Box className="categories__img"><img src={Categories4} alt="" /></Box>
                        </a>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default Categories;
