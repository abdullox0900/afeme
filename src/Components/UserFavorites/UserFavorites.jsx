// Import => React
import React from "react";

// Import => Style Component
import "../../Components/UserFavorites/UserFavorites.scss";

// Import => Component
import Header from "../Header/Header";
import UserProfilList from "../UserProfilList/UserProfilList";
import Container from "../Container/Container";

// Import => Img
import basketImg from "../../Assets/Img/carzinka.svg";


function UserFavorites() {
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