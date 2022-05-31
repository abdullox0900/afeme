import React from "react";
import CardImg1 from "../../Assets/Img/card_img1.jpg";
import CardImg2 from "../../Assets/Img/card_img2.jpg";
import CardImg3 from "../../Assets/Img/card_img3.jpg";
import CardImg4 from "../../Assets/Img/card_img4.jpg";
import CardImg5 from "../../Assets/Img/card_img5.jpg";
import CardImg6 from "../../Assets/Img/card_img6.jpg";
import Realtors1 from "../../Assets/Img/realtors1.jpg";
import Realtors2 from "../../Assets/Img/realtors2.jpg";
import Realtors3 from "../../Assets/Img/realtors3.jpg";
import Realtors4 from "../../Assets/Img/realtors4.jpg";
import Realtors5 from "../../Assets/Img/realtors5.jpg";
import RightArrow from "../../Assets/Img/arrow-right.svg";
import Partners1 from "../../Assets/Img/partners1.jpg";
import Partners2 from "../../Assets/Img/partners2.jpg";
import Partners3 from "../../Assets/Img/partners3.jpg";
import Partners4 from "../../Assets/Img/partners4.jpg";
import { Box, Typography } from "@mui/material";
import WhyAfeme from "../WhyAfeme/WhyAfeme";
import "./Main.scss"
import { Cards, SCard } from "../Card/Card";
import Container from "../Container/Container"
import Carousel from "../Carousel/Carousel"

function Main() {

    const data = {
        houseType: 'Uy',
        housePrice: 1400,
        houseTitle: 'My house',
        houseAddress: 'Andijan',
        houseImg: CardImg1,
    };
    const sData = {
        houseTitle: 'My house',
        houseAddress: 'Andijan',
        houseImg: CardImg6,
    };

    return (
        <main className="main">
            <Container>
                <div className="main__content">
                    <div className="sections">
                        <section className="section recommend">
                            <Typography variant="h3" className="section__title">Tavsiya etilgan turar-joy majmualari</Typography>
                            <div className="cards">
                                <Cards data={data} />
                                <Cards data={data} />
                                <Cards data={data} />
                            </div>
                            <Box className="viewAll"><a href="/" className="viewAll__link">Barchasini ko’rish </a><img src={RightArrow} alt="" /></Box>
                        </section>
                        <section className="section popular">
                            <Typography variant="h3" className="section__title">Ommabop Uylar</Typography>
                            <div className="cards">
                                <Cards data={data} />
                                <Cards data={data} />
                                <Cards data={data} />
                                <Cards data={data} />
                                <Cards data={data} />
                                <Cards data={data} />
                            </div>
                            <Box className="viewAll"><a href="/" className="viewAll__link">Barchasini ko’rish </a><img src={RightArrow} alt="" /></Box>
                        </section>
                        <section className="section newBuildings">
                            <Typography variant="h3" className="section__title">Yangi Binolar</Typography>
                            <div className="scards">
                                <SCard data={sData} />
                                <SCard data={sData} />
                            </div>
                        </section>
                    </div>
                    <div className="panel">
                        <iframe className="iframe__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6608322062507!2d72.3573832156414!3d40.74748804338021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced630e0f4795%3A0xf72460c2369068a8!2sDigital%20City!5e0!3m2!1suz!2s!4v1653553961195!5m2!1suz!2s" width={'100%'} height={400} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                        <Box className="realtors">
                            <Typography variant="h5" className="realtors__title">Rieltorlar</Typography>

                            <a href="/" className="realtors__list">
                                <Box className="realtor">
                                    <img src={Realtors1} alt="" />
                                    <div className="realtors__content">
                                        <Typography variant="h6" className="realtors__name">Abdullox Abdusalomov</Typography>
                                        <p className="realtors__offer">2 ta taklif</p>
                                    </div>
                                </Box>
                                <Box className="realtor">
                                    <img src={Realtors2} alt="" />
                                    <div className="realtors__content">
                                        <Typography variant="h6" className="realtors__name">Abdullox Abdusalomov</Typography>
                                        <p className="realtors__offer">2 ta taklif</p>
                                    </div>
                                </Box>
                                <Box className="realtor">
                                    <img src={Realtors3} alt="" />
                                    <div className="realtors__content">
                                        <Typography variant="h6" className="realtors__name">Abdullox Abdusalomov</Typography>
                                        <p className="realtors__offer">2 ta taklif</p>
                                    </div>
                                </Box>
                                <Box className="realtor">
                                    <img src={Realtors4} alt="" />
                                    <div className="realtors__content">
                                        <Typography variant="h6" className="realtors__name">Abdullox Abdusalomov</Typography>
                                        <p className="realtors__offer">2 ta taklif</p>
                                    </div>
                                </Box>
                                <Box className="realtor">
                                    <img src={Realtors5} alt="" />
                                    <div className="realtors__content">
                                        <Typography variant="h6" className="realtors__name">Abdullox Abdusalomov</Typography>
                                        <p className="realtors__offer">2 ta taklif</p>
                                    </div>
                                </Box>
                            </a>
                        </Box>
                    </div>
                </div>
            </Container>
            <WhyAfeme/>
            <Carousel/>
        </main>
    )
}
export default Main;