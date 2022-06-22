// Import => React
import React from "react";

// Import => Style Component
import "../../Components/UserMessage/UserMessage.scss";

// Import => Img Component
import NoMessage from "../../Assets/Img/noMessages.svg";

// Import => Component
import Header from "../Header/Header";
import UserProfilList from "../UserProfilList/UserProfilList";
import Container from "../Container/Container";

function UserMessage() {
    return (
        <>
            <Header />
            <Container>
                <div className="user-wrap-router">
                    <UserProfilList />
                    <div className="user-message">
                        <img src={NoMessage} alt="" />
                        <h3 className="user-massage__title">Hozircha sizda xabarlar yok</h3>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default UserMessage;