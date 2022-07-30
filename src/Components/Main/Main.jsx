// Import => React and React Hooks React-Router-Dom
import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

// Import Mui
import { Box, Typography, Container } from "@mui/material";

// Import useContext => Localization
import { Context as LangContext } from "../../Context/LangContext";
import content from "../../Localization/Content";
import { IPContext } from "../../Context/IPContext";
import { UserContext } from "../../Context/UserContext";

// Import => Components
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import Cards from "../Card/Card";
import AdvertMap from "../AdvertMap/AdvertMap";
import ApiError from "../ApiError/ApiError";
import OfflineError from "../OfflineError/OfflineError";
import NewBuildingsCard from "../NewBuildingsCard/NewBuildingsCard";

// Import => Components Img
import Realtors1 from "../../Assets/Img/prifile-photo2.png";
import RightArrow from "../../Assets/Img/arrow-right.svg";
import "./Main.scss";

function Main() {
    const { lang, setLang } = useContext(LangContext);
    const { IP, setIP } = useContext(IPContext);
    const { user, setUser } = useContext(UserContext);

    const [data, setData] = useState(null);
    const [adverts, setAdverts] = useState([]);
    const [dataError, setDataError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [rekData, setRekData] = useState([]);

    let url = process.env.REACT_APP_URL;

    const [reltData, setReltData] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`${url}popular/32`)
            .then((response) => {
                let newData = response.data.data;
                if (newData && newData.length > 0) {
                    setData(response.data);
                    setAdverts(response.data.data);
                } else {
                    setData(null)
                }
            })
            .catch(() => {
                setData(null)
            })
            .finally(() => {
                setIsLoading(false);
            });
        axios
            .get(`https://ipapi.co/json`)
            .then((response) => {
                if (response.status == 200) {
                    setIP(response.data);
                    window.localStorage.setItem('IP', JSON.stringify(IP));
                }
            });
    }, []);

    useEffect(() => {
        axios.get(`${url}advertisements`)
            .then(res => {
                const resdata = res?.data;
                setRekData(resdata)
            })

        axios.get(`${url}reltors`)
        .then(res => {
            const persons = res.data.data;
            setReltData(persons)
        })
    }, [])


    function showCards(amount) {
        if (isLoading) {
            return <CardSkeleton amount={amount} />;

        } else if (data && !dataError) {
            return adverts?.slice(0, 8).map((row) => {

                return <Cards data={row} />;
            });
        } else if (!data || dataError) {
            return <ApiError />;
        }
    }

    return (
        <main className="main">
            <Container className="container" maxWidth="1300px">
                <div className="main__content">
                    <div className="sections">
                        <section className="section recommend">
                            <Typography variant="h3" className="section__title">
                                {content[lang].populr_title}
                            </Typography>
                            <div className="cards">{showCards(8)}</div>
                            <Box className="viewAll">
                                <a href="/" className="viewAll__link">
                                    {content[lang].see_desc}
                                </a>
                                <img src={RightArrow} alt="" />
                            </Box>
                        </section>
                    </div>
                    <section className="newBuildings">
                        <div className="newBuildings__content">
                            <Typography variant="h3" className="section__title">
                                {content[lang].new_title}
                            </Typography>
                            <div className="scards">
                                <NewBuildingsCard />
                            </div>
                        </div>
                        <div className="panel">
                            <div style={{marginTop:'40px'}} id="advertMap"><AdvertMap currentAdvert={IP} zoom={8} /></div>

                            <Box className="realtors">
                                <Typography
                                    variant="h5"
                                    className="realtors__title"
                                >
                                    {content[lang].rel}
                                </Typography>

                                <NavLink
                                    to={"/catalogreltor"}
                                    className="realtors__list"
                                >

                                    {
                                        reltData.slice(0, 6).map(rel => {
                                            return (
                                                <>
                                                    <Box className="realtor">
                                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU" alt="" />
                                                        <div className="realtors__content">
                                                            <Typography
                                                                variant="h6"
                                                                className="realtors__name"
                                                            >
                                                                {rel.name}
                                                            </Typography>
                                                            <p className="realtors__offer">
                                                                2 ta taklif
                                                            </p>
                                                        </div>
                                                    </Box>
                                                </>
                                            )
                                        })
                                    }
                                </NavLink>
                            </Box>

                            <section className="advertising">
                                {
                                    rekData?.map((res) => {
                                        return (
                                            <>
                                                <a href={res?.url}>
                                                    <img className="advertising__img" src={res?.image} alt="" />
                                                </a>
                                            </>
                                        )
                                    })
                                }
                            </section>

                        </div>
                    </section>
                </div>
            </Container>
        </main>
    );
}
export default Main;
