// Import => React
import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

// Import => Components
import { Context } from "../../Context/LangContext";
import content from "../../Localization/Content";
import Container from "../../Components/Container/Container";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Liked from "../../Components/Liked/Liked";
import Personal from "../../Components/Personal/Personal";
import Posts from "../../Components/Posts/Posts";
import Settings from "../../Components/Settings/Settings";
import CardImg2 from "../../Assets/Img/card_img2.jpg";
import emptyPost from "../../Assets/Img/empty_post.webp";
import { Cards } from "../../Components/Card/Card";
import CardSkeleton from "../../Components/CardSkeleton/CardSkeleton";
import AdvertBtn from "../../Components/AddAdvertBtn/AdvertBtn";

// Import => Modul Style Component
import style from "./Cabinet.module.scss";

function PersonalCabinet() {

    const { lang, setLang } = useContext(Context);
    const [data, setData] = useState([]);
    const [dataError, setDataError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const URL = "https://ali98.uz/api/user/169";

    useEffect(() => {
        axios
            .get(URL)
            .then((response) => {
                let status = response.data;
                if (status.status == true || status.status == 200) {
                    setData(response.data.data);
                    console.log(data);
                } else {
                    setDataError(true);
                }
            })
            .catch((error) => {
                console.log(error);
                setDataError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    function showPosts(amount) {
        if (isLoading) {
            return <CardSkeleton amount={amount} controls={true} />;
        } else if (!dataError && data.hasOwnProperty("id")) {
            if (data.posts.length > 0) {
                return data.posts.map((row) => (
                    <Cards data={row} editDelete={true} loveBtn={false} />
                ));
            } else {
                return (
                    <div
                        className="emptyPost"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={emptyPost} alt="No posts" />
                        <p
                            className="emptyPost__text"
                            style={{
                                fontSize: "18px",
                                fontWeight: 500,
                                margin: "20px 0 25px",
                            }}
                        >
                            {content[lang].no_post}
                        </p>
                        <AdvertBtn />
                    </div>
                );
            }
        }
    }

    return (
        <>
            <Container>
                <Header />
                <div className={style.wrapper}>
                    <div className={style.main}>
                        <div className={style.btng}>
                            <NavLink to={"/posts"}>
                                <button className={style.active}>
                                    Elonlarim{" "}
                                </button>
                            </NavLink>
                            <NavLink to={"/liked"}>
                                <button> Yoqtirganlarim </button>
                            </NavLink>
                            <NavLink to={"/settings"}>
                                <button> Sozlamalar </button>
                            </NavLink>
                        </div>
                        <h1 style={{ color: "#0468ff" }}>El’onlarim</h1>
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "20px",
                                justifyContent: "center",
                            }}
                        >
                            {showPosts(4)}
                        </div>
                    </div>
                    <Personal
                        data={data}
                        dataError={dataError}
                        isLoading={isLoading}
                    />
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default PersonalCabinet;
