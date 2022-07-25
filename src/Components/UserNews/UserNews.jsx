// Import => React
import React from "react";

// Import => Img
import UserNewsImg from "../../Assets/Img/Connectivity.svg";

// Import => Component
import Header from "../Header/Header";
import UserProfilList from "../UserProfilList/UserProfilList";
import Container from "../Container/Container";

// Import => Style Component
import "../../Components/UserNews/UserNews.scss";

function UserNews() {
    return(
        <>
            <Header/>
            <Container>
                <div className="user-profil-wrap">
                    <UserProfilList />
                    <div className="user-news">
                        <img src={UserNewsImg} alt="" />
                        <h3 className="user-news__title">Hozircha Afemeda yanglik yok</h3>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default UserNews