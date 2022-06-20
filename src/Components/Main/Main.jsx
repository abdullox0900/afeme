// Import => React and React Hooks React-Router-Dom
import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

// Import => Axios
import axios from "axios";

// Import Mui
import { Box, Typography } from "@mui/material";

// Import useContext => Localization
import { Context as  LangContext} from '../../Context/LangContext';
import { InternetContext } from '../../Context/InternetContext';
import content from '../../Localization/Content';

// Import => Components
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import { Cards } from "../Card/Card";
import ApiError from "../ApiError/ApiError";
import OfflineError from "../OfflineError/OfflineError"
import Container from "../Container/Container";
import NewBuildingsCard from "../NewBuildingsCard/NewBuildingsCard";

// Import => Components Img
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
import "./Main.scss"


function Main() {

    const { lang, setLang } = useContext(LangContext);
    const { netStatus, setNetStatus } = useContext(InternetContext);

    const [data, setData] = useState([]);
    const [dataError, setDataError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const URL = 'https://ali98.uz/api/post';
    useEffect(() => {
        const result = axios.get(URL)
        .then((response) => {
            let dataStatus = response.data
            if (dataStatus.status == true || dataStatus.status == 200) {
                setData(response.data.data);
                console.log(data);
            } else {
                setDataError(true)
            }
        })
        .catch((error) => {
            setDataError(true);
            console.log(error);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, [])

    function showCards(amount) {

        if (isLoading) {
            return (
                <CardSkeleton amount={amount}/>
            )
        } else if (data && !dataError) {
            return (
                data?.slice(0, amount)?.map((row) => {
                    return (
                        <Cards data={row} isLoading={isLoading} />
                    )
                })
            )
        } else if (!data || dataError) {
            return (
                <ApiError />
            )
        }
    }

    return (
        <main className="main">
            <Container>
                <div className="main__content">
                    <div className="sections">
                        <section className="section recommend">
                            <Typography variant="h3" className="section__title">{content[lang].recom_title}</Typography>
                            <div className="cards">
                                {showCards(4)}
                            </div>
                            <Box className="viewAll"><a href="/" className="viewAll__link">{content[lang].see_desc}</a><img src={RightArrow} alt="" /></Box>
                        </section>
                        <section className="section popular">
                            <Typography variant="h3" className="section__title">{content[lang].populr_title}</Typography>
                            <div className="cards">
                                {showCards(8)}
                            </div>
                            <Box className="viewAll"><a href="/" className="viewAll__link">{content[lang].see_desc}</a><img src={RightArrow} alt="" /></Box>
                        </section>
                    </div>
                    <section className="newBuildings">

                        <div className="newBuildings__content">
                            <Typography variant="h3" className="section__title">Yangi Binolar</Typography>
                            <div className="scards">
                                <NewBuildingsCard />
                            </div>
                        </div>
                        <div className="panel">
                            <iframe className="iframe__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6608322062507!2d72.3573832156414!3d40.74748804338021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced630e0f4795%3A0xf72460c2369068a8!2sDigital%20City!5e0!3m2!1suz!2s!4v1653553961195!5m2!1suz!2s" width={'100%'} height={400} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                            <Box className="realtors">
                                <Typography variant="h5" className="realtors__title">Rieltorlar</Typography>

                                <NavLink to={"/catalogreltor"} className="realtors__list">
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
                                </NavLink>
                            </Box>
                        </div>
                    </section>
                </div>
            </Container>
        </main>
    )
}
export default Main;