// Import => React
import React, { useState, useEffect, useContext } from "react";
import { NavLink as Link, useNavigate } from "react-router-dom";
import CardSkeleton from "../../Components/CardSkeleton/CardSkeleton";
import AdvertBtn from "../../Components/AddAdvertBtn/AdvertBtn";
import axios from "axios";

// Import => Style Component
import "../../Components/UserAds/UserAds.scss";

// Import => Component
import Cards from "../../Components/Card/Card";
import ApiError from "../ApiError/ApiError";
import { Context } from "../../Context/LangContext";
import { UserContext } from "../../Context/UserContext";
import Header from "../../Components/Header/Header";
import UserProfilList from "../UserProfilList/UserProfilList";
import Container from "../../Components/Container/Container";
import UserPostEdit from "../UserPostEdit/UserPostEdit";

// Import => Img
import CommercemImg from "../../Assets/Img/e-commerce.svg";

function UserAds() {

    const navigate = useNavigate();
    const { lang, setLang } = useContext(Context);
    const { user, setUser } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
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
            return <CardSkeleton amount={amount} controls={true} />;

        } else if (user.hasOwnProperty('data')) {
            
            if (user.data.posts?.length > 0) {
                return user.data.posts.map((row) => (
                    <Cards data={row} editDelete={true} />
                ));
            } else {
                showWarning();
                return (
                    <div className="userNoAds">
                        <img src={CommercemImg} alt="svg-img" />
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

export default UserAds;
