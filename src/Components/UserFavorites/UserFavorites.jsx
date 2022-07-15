// Import => React
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Import => Style Component
import "../../Components/UserFavorites/UserFavorites.scss";

// Import => Component
import Header from "../Header/Header";
import UserProfilList from "../UserProfilList/UserProfilList";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import Cards from "../Card/Card";
import ApiError from "../ApiError/ApiError";
import AdvertBtn from "../../Components/AddAdvertBtn/AdvertBtn";
import { Context } from "../../Context/LangContext";
import { UserContext } from "../../Context/UserContext";
import Container from "../Container/Container";

// Import => Img
import basketImg from "../../Assets/Img/carzinka.svg";

function UserFavorites() {

    const { lang, setLang } = useContext(Context);
    const { user, setUser } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log(user);
        if (user.hasOwnProperty('status')) {
            setIsLoading(false);
        }
    }, [user]);

    function showWarning() {
        let cards = document.querySelector('.user__cards');
        cards.style.gridTemplateColumns = '1fr';
        cards.style.placeItems = 'center';
    }

    function showPosts(amount) {
        if (isLoading) {
            return <CardSkeleton amount={amount} like={true} />;

        } else if (user.hasOwnProperty('data')) {
            
            if (user.favorites > 0) {
                return user.data.favorites.map((row) => (
                    <Cards data={row} like={true} />
                ));
            } else {
                showWarning();
                return (
                    <div className="userNoAds">
                        <img src={basketImg} alt="svg-img" />
                        <h3 className="user-ads__title">
                            Yoqtirgan e'lonlaringiz yo'q
                        </h3>
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

    return (
        <>
            <Header />
            <Container>
                <div className="user-wrap-router">
                    <UserProfilList />
                    <div className="user__cards">
                        {showPosts(4)}
                    </div>
                </div>
            </Container>
        </>
    );
}

export default UserFavorites;
