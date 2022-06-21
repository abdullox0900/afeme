// Import => React
import React from "react";
import { NavLink } from "react-router-dom";

// Import => Component
import Container from "../../Components/Container/Container";

// Import => Style Component
import "../../Components/UserProfilList/UserProfilList.scss";

function UserProfilList() {

    let activeStyle = {
        borderRadius: "5px",
        color: "dodgerblue",
        backgroundColor: "#cacaca"
    };

    const normalLink = "";

    return (
        <>
            <div className="user-prof">
                <div className="user-prof__avatar">
                    <img className="user-prof__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU" alt="user-avatar" />
                    <h3 className="user-prof__title">Abdullox Abdusalomov</h3>
                </div>

                <ul className="user-prof__list">

                    <li className="user-prof__item">
                        <NavLink to={"/userprofil"} className="user-prof__link">
                            <ion-icon name="person-circle-outline"></ion-icon>
                            Mening profilim
                        </NavLink>
                    </li>

                    <li className="user-prof__item">
                        <NavLink to={"/userads"} className={"user-prof__link"}>
                            <ion-icon name="albums-outline"></ion-icon>
                            Mening eʻlonlarim
                        </NavLink>
                    </li>

                    <li className="user-prof__item">
                        <NavLink to={"/userprofilmessage"} className="user-prof__link">
                            <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                            Mening xabarlarim
                        </NavLink>
                    </li>

                    <li className="user-prof__item">
                        <NavLink to={"#"} className="user-prof__link">
                            <ion-icon name="heart-outline"></ion-icon>
                            Tanlanganlar
                        </NavLink>
                    </li>

                    <li className="user-prof__item">
                        <NavLink to={"#"} className="user-prof__link">
                            <ion-icon name="newspaper-outline"></ion-icon>
                            Yangiliklar
                        </NavLink>
                    </li>

                    <li className="user-prof__item">
                        <NavLink to={"#"} className="user-prof__link">
                            <ion-icon name="log-in-outline"></ion-icon>
                            Chiqish
                        </NavLink>
                    </li>

                </ul>

            </div>
        </>
    )
}

export default UserProfilList;