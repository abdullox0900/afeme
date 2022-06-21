// Import => React
import React from "react";

// Import => Components
import Container from "../../Components/Container/Container";
import UserProfilList from "../UserProfilList/UserProfilList";

// Import => Img
import UserIlustration from "../../Assets/Img/userIlutration.svg"

// Import => Style Component
import "../../Components/UserProfil/UserProfil.scss";

function UserProfil() {
    return (
        <>
            <Container>
                <div className="user-profil-wrap">
                    <UserProfilList />
                    <div className="userprofil">
                        <img src={UserIlustration} alt="" />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default UserProfil;