// Import => React
import React, { useState, useEffect, useContext } from "react";
import { NavLink as Link, useNavigate } from "react-router-dom";
import CardSkeleton from "../../Components/CardSkeleton/CardSkeleton";
import { Box, Tabs, Tab } from "@mui/material";

// Import => Style Component
import "../../Components/UserAds/UserAds.scss";

// Import => Component
import Cards from "../../Components/Card/Card";
import AdvertBtn from "../../Components/AddAdvertBtn/AdvertBtn";
import ApiError from "../ApiError/ApiError";
import { Context } from "../../Context/LangContext";
import { UserContext } from "../../Context/UserContext";
import Header from "../../Components/Header/Header";
import UserProfilList from "../UserProfilList/UserProfilList";
import Container from "../../Components/Container/Container";

// Import => Img
import CommercemImg from "../../Assets/Img/e-commerce.svg";

function UserAds() {
    const navigate = useNavigate();
    const { lang, setLang } = useContext(Context);
    const { user, setUser } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (user.hasOwnProperty("status")) {
            setIsLoading(false);
        }
    }, [user]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function showWarning() {
        let cards = document.querySelector(".user__cards");
        cards.style.gridTemplateColumns = "1fr";
        cards.style.placeItems = "center";
    }

    function showPosts(type) {
        if (isLoading) {
            return <CardSkeleton amount={4} controls={true} />;
        } else if (user.hasOwnProperty("data")) {

            let userPosts = user.data.posts;
            if (userPosts?.length > 0) {
                
                return userPosts.map((advert) => {
                    switch (type) {
                        case "all":
                            return <Cards data={advert} isUserPost={true} />;
                            break;

                        case "sold":
                            if (advert.solt == true || advert.solt == "true") {
                                return (
                                    <Cards data={advert} isUserPost={true} />
                                );
                            }
                            break;

                        case "pending":
                            if (!advert.check || advert.check == "null") {
                                return (
                                    <Cards data={advert} isUserPost={true} />
                                );
                            }
                            break;

                        case "denied":
                            if (!advert.check || advert.check == "false") {
                                return (
                                    <Cards data={advert} isUserPost={true} />
                                );
                            }
                            break;
                    }
                });
            } else {
                showWarning();
                return (
                    <div className="userNoAds">
                        <img
                            className="user-ads__img"
                            src={CommercemImg}
                            alt="svg-img"
                        />
                        <h3 className="user-ads__title">
                            Birorta ham e'lon joylamagansiz
                        </h3>
                        <AdvertBtn />
                    </div>
                );
            }
        } else {
            showWarning();
            return (
                <div className="userNoAds">
                    <ApiError />
                </div>
            );
        }
    }

    function TabPanel(props) {
        const { children, value, index } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
            >
                {value === index && <Box sx={{p: 0}} className="user__cards">{children}</Box>}
            </div>
        );
    }

    return (
        <>
            <Header />
            <Container>
                <div className="user-profil-wrap">
                    <UserProfilList />
                    <Box className="user__adverts">
                        <Box>
                            <Box
                                sx={{ borderBottom: 1, borderColor: "divider" }}
                            >
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    variant="scrollable"
                                    scrollButtons="auto"
                                >
                                    <Tab label="Hammasi" />
                                    <Tab label="Sotilganlar" />
                                    <Tab label="Ko'rib chiqilmoqda" />
                                    <Tab label="Rad etilgan" />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                {showPosts("all")}
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                {showPosts("sold")}
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                {showPosts("pending")}
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                {showPosts("denied")}
                            </TabPanel>
                        </Box>
                    </Box>
                </div>
            </Container>
        </>
    );
}

export default UserAds;
