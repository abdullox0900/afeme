// Import => React
import React from "react";

// Import => Components
import Container from "../../Components/Container/Container";
import UserProfilList from "../UserProfilList/UserProfilList";

// Import => Style Component
import "../../Components/UserProfil/UserProfil.scss";

function UserProfil() {
    return (
        <>
            <Container>
                <div className="user-profil-wrap">
                    <UserProfilList />
                    <div className="userprofil"></div>
                </div>
            </Container>
        </>
    )
}

export default UserProfil;