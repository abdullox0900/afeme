// Import => React
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Import => Style Component
import "../../Components/UserFavorites/UserFavorites.scss";

// Import => Component
import Header from "../Header/Header";
import UserProfilList from "../UserProfilList/UserProfilList";
import { Context } from "../../Context/LangContext";
import { UserContext } from "../../Context/UserContext";
import Container from "../Container/Container";

// Import => Img
import basketImg from "../../Assets/Img/carzinka.svg";

function UserFavorites() {

    const navigate = useNavigate();
    const { lang, setLang } = useContext(Context);
    const { isUser, setIsUser } = useContext(UserContext);

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

    return (
        <>
            <Header />
            <Container>
                <div className="user-wrap-router">
                    <UserProfilList />
                    <div className="user-favorit">
                        <img src={basketImg} alt="" />
                        <h3 className="user-favorit__title">Hozircha sizda Savatchalar yok</h3>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default UserFavorites;