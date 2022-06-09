import React from "react"
import Container from "../Container/Container";
import { Box, Button, IconButton } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import "./Advert.scss";
import AdvertImg from "../../Assets/Img/advertImg.jpg";
import { Cards } from "../../Components/Card/Card";
import Person from "../../Assets/Img/realtors1.jpg";
import callIcon from "../../Assets/Img/call.svg"
import messageIcon from "../../Assets/Img/message.svg"
import CardImg1 from "../../Assets/Img/card_img1.jpg";
import CardImg2 from "../../Assets/Img/card_img2.jpg";
import CardImg3 from "../../Assets/Img/card_img3.jpg";
import CardImg4 from "../../Assets/Img/card_img4.jpg";

function Advert() {

    const data = {
        images: [CardImg1, CardImg2, CardImg3, CardImg4],
    };
    let breakpoints = {
        1050: {
            perPage: 2
        },
        700: {
            perPage: 1
        }
    };

    // const data = {
    //     housePrice: 1400,
    //     houseType: 'uy',
    //     houseTitle: 'My house',
    //     houseAddress: 'Andijan',
    //     houseImg: CardImg1,
    //     houseUrl: '/advert',
    //     description: "Shinam uy Hovli va joy. Suv Gaz Elektr energiyasi mavjud. Uy 6 xonali bo'lib barcha kerakli sharoitlarga ega. Xonalar: Oshxona Yotoqxona, Mehmonxona Vanna Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, exercitationem! sit amet consectetur adipisicing elit. Doloribus, exercitationem!..."
    // };

    return (
        <Box className="advert">
            <Container>
                <div className="advert__blog">
                    <Box className="advert__content">
                        <Box className="advert__images">
                            <Box className="advert__main__img">
                                <img src={AdvertImg} alt="" />
                            </Box>
                            <Carousel data={data} gap="15px" slideWidth="250px" breakpoints={breakpoints}/>
                        </Box>
                        <Box className="advert__description">
                            <h5 className="descr__title">Tavsif</h5>
                            <p className="descr__text">Ijara <br /> Yangi bino <br /> Yakkasaroy tumani <br /> Sobiq zavod <br /> Belgilangan karvon <br /> 4/2/9 <br /> mebel va maishiy texnika <br /> 100 m2 <br /> Uzoq muddatli oila. <br /> 1300 <br /> +998901207800 Qo'shimcha ma'lumotlar <br /> dushanbadan yakshanbagacha <br /> 10:00 dan 18:0 gacha</p>
                        </Box>
                    </Box>
                    <Box className="advert__panel">
                        <Box className="sellerProfile">
                            <Box className="sellerProfile__header">
                                <img src={Person} alt="" className="sellerProfile__img" />
                                <Box className="sellerProfile__content">
                                    <a href="#" className="sellerProfile__title">Abdusalomov Abdullox</a>
                                    <span className="sellerProfile__type">Sotuvchi</span>
                                </Box>
                            </Box>
                            <Box className="sellerProfile__actions">
                                <IconButton variant="contained" className="sellerProfile__btn sellerProfile__call">
                                    <img src={callIcon} alt="" />
                                </IconButton>
                                <IconButton variant="contained" className="sellerProfile__btn sellerProfile__msg">
                                    <img src={messageIcon} alt="" />
                                </IconButton>
                            </Box>
                        </Box>
                        <iframe className="iframe__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6608322062507!2d72.3573832156414!3d40.74748804338021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced630e0f4795%3A0xf72460c2369068a8!2sDigital%20City!5e0!3m2!1suz!2s!4v1653553961195!5m2!1suz!2s" width={'100%'} height={400} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </Box>
                </div>

                {/* <section className="section recommend">
                    <Typography variant="h3" className="section__title">Tavsiya etilgan turar-joy majmualari</Typography>
                    <div className="cards">
                        <Cards data={data} />
                        <Cards data={data} />
                        <Cards data={data} />
                    </div>
                    <Box className="viewAll"><a href="/" className="viewAll__link">Barchasini ko’rish </a><img src={RightArrow} alt="" /></Box>
                </section> */}
            </Container>
        </Box>
    )
}
export default Advert;