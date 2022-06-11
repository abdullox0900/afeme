// IMPORT REACT
import React from "react";
import { useEffect, useState } from "react";

// IMPORT COMPONENTS
import Container from "../Container/Container";
import "../../Assets/scss/colors.scss";
import "../Categories/Categories.scss";

// IMPORT IMG
import HomeIcon from "../../Assets/Img/homeIcon.svg";
import Categories1 from "../../Assets/Img/categories1.svg";
import Categories2 from "../../Assets/Img/categories2.svg";
import Categories3 from "../../Assets/Img/categories3.svg";
import Categories4 from "../../Assets/Img/categories4.svg";

// IMPORT MUI
import { Box } from "@mui/material";

// IMPORT AXIOS
import axios from "axios";

function Categories() {

    const [price, setPrice] = React.useState('');
    const [room, setRoom] = React.useState('');

    const priceChange = (event) => {
        setPrice(event.target.value);
    };

    const roomChange = (event) => {
        setRoom(event.target.value);
    };

    // axios.get('https://ali98.uz/api/htype')
    //     .then(function (response) {
    //         // handle success
    //         console.log(response.data.data);
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     })
    //     .then(function () {
    //         // always executed
    //     });


    const [categorieData, setCategorieData] = useState([])

    useEffect(() => {
        axios.get('https://ali98.uz/api/htype').then(res => {
            const persons = res.data.data;
            setCategorieData(persons)
        })
    }, [])

    return (
        <>
            <Box className="categories">
                <Container>
                    <Box className="categories__content">

                        {
                            categorieData?.map((categ) => {
                                return (
                                    <Box className="categories__items" key={categ.id}>
                                        <img className="categories__img-icon" src={`https://ali98.uz/public/admin2/categories/${categ.icon}`} alt="" />
                                        <h3 className="categories__items-title">{categ.name}</h3>
                                    </Box>
                                )
                            })
                        }

                        {/* <a href="/" className="categories__items">
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
                        </a> */}
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default Categories;
