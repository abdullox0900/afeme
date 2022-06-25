// Import => React
import React, { useState, useEffect, useContext } from "react";
import { NavLink as Link } from "react-router-dom";
import CardSkeleton from "../../Components/CardSkeleton/CardSkeleton";
import AdvertBtn from "../../Components/AddAdvertBtn/AdvertBtn";
import axios from "axios";

// Import => Style Component
import "../../Components/UserAds/UserAds.scss";

// Import => Component
import Cards from "../../Components/Card/Card";
import { Context } from "../../Context/LangContext";
import Header from "../../Components/Header/Header";
import UserProfilList from "../UserProfilList/UserProfilList";
import Container from "../../Components/Container/Container";

// Import => Img
import CommercemImg from "../../Assets/Img/e-commerce.svg";

function UserAds() {
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
                    <Cards data={row} editDelete={true} />
                ));
            } else {
                return (
                    <>
                        <img src={CommercemImg} alt="svg-img" />
                        <h3 className="user-ads__title">
                            Birorta ham e'lon joylamagansiz
                        </h3>
                        <AdvertBtn />
                    </>
                );
            }
        }
    }

    return (
        <>
            <Header />
            <Container>
                <div className="user-wrap-router">
                    <UserProfilList />
                    <div className="user-ads">{showPosts(4)}</div>
                </div>
            </Container>
        </>
    );
}

export default UserAds;
