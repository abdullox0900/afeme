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
                        <div className="userprofil__wrap">
                            <div>
                                <img className="userprofil__avatar" src="" alt="" />
                                <h3 className="userprofil__username">Abdullox Abdusalomov</h3>
                                <button className="userprofil__avatar-edit">Rasim Yanglash</button>
                                <button className="userprofil__avatar-edit">Rasimni olib tawlash</button>
                            </div>

                            <form action="" className="userprofil__form">
                                <label htmlFor="">Ism</label>
                                <input type="text" placeholder="name" />
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default UserProfil;