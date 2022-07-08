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
    const navigate = useNavigate();
    const { lang, setLang } = useContext(Context);
    const { user, setUser } = useContext(UserContext);

    const [data, setData] = useState([]);
    const [dataError, setDataError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [noFavs, setNoFavs] = useState(false);
    let newData = [];
    let userFavs;

    useEffect(() => {
        if (user.hasOwnProperty("data")) {
            userFavs = user.data.favorites;
            if (userFavs?.length > 0) {
                for (let i = 0; i < userFavs.length; i++) {
                    axios
                        .get(`https://ali98.uz/api/post/${userFavs[i].post_id}`)
                        .then((response) => {
                            let status = response.data.status;
                            if (status == true || status == 200) {
                                newData.push(response.data.data);
                                setData(newData);
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
                }
            } else {
                setNoFavs(true);
                setIsLoading(false);
            }
        } else {
            setIsLoading(false);
        }
    }, []);

    function showPosts(amount) {
        if (isLoading) {
            return <CardSkeleton amount={amount} like={true}/>;

        } else if (user.hasOwnProperty("data") && !dataError) {
            if (data.length > 0) {

                return data.map((row) => <Cards data={row} />);
            } else {
                return (
                    <div className="userNoAds">
                        <img src={basketImg} alt="" />
                        <h3 className="user-favorit__title">
                            Saqlab qo'ygan e'lonlaringiz topilmadi
                        </h3>
                        <AdvertBtn />
                    </div>
                );
            }
        } else {
            return (
                <div className="user-favorit">
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
                    <div className="user-favorit">
                        {showPosts(4)}
                    </div>
                </div>
            </Container>
        </>
    );
}

export default UserFavorites;
