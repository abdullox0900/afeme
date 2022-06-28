// Import => React
import { React, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";


// Import => Component
import Container from "../../Components/Container/Container";

// Import => Style Component
import "../../Components/UserProfilList/UserProfilList.scss";

// Import useContext => Localization
import { Context } from "../../Context/LangContext";
import { CurrencyContext } from "../../Context/CurrencyContext";
import { UserContext } from "../../Context/UserContext";
import content from "../../Localization/Content";

function UserProfilList() {

    const navigate = useNavigate();
    const { lang, setLang } = useContext(Context);
    const { isUser, setIsUser } = useContext(UserContext);

    let activeStyle = {
        borderRadius: "5px",
        color: "dodgerblue",
        backgroundColor: "#cacaca"
    };

    const normalLink = "";

    if (isUser) {
        return (
            <div className="user-prof">
                <div className="user-prof__avatar">
                    <img className="user-prof__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU" alt="user-avatar" />
                    <h3 className="user-prof__title">Abdullox Abdusalomov</h3>
                </div>
    
                <ul className="user-prof__list">
    
                    <li className="user-prof__item">
                        <NavLink to={"/userprofil"} className="user-prof__link">
                            <ion-icon name="person-circle-outline"></ion-icon>
                            {content[lang].user_profil}
                        </NavLink>
                    </li>
    
                    <li className="user-prof__item">
                        <NavLink to={"/userads"} className={"user-prof__link"}>
                            <ion-icon name="albums-outline"></ion-icon>
                            {content[lang].user_profil_ads}
                        </NavLink>
                    </li>
    
                    <li className="user-prof__item">
                        <NavLink to={"/userprofilmessage"} className="user-prof__link">
                            <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                            {content[lang].user_profil_message}
                        </NavLink>
                    </li>
    
                    <li className="user-prof__item">
                        <NavLink to={"/userfavorites"} className="user-prof__link">
                            <ion-icon name="heart-outline"></ion-icon>
                            {content[lang].user_profil_favorintes}
                        </NavLink>
                    </li>
    
                    <li className="user-prof__item">
                        <NavLink to={"/usernews"} className="user-prof__link">
                            <ion-icon name="newspaper-outline"></ion-icon>
                            {content[lang].user_profil_news}
                        </NavLink>
                    </li>
    
                    <li className="user-prof__item">
                        <NavLink to={"#"} className="user-prof__link">
                            <ion-icon name="log-in-outline"></ion-icon>
                            {content[lang].user_profil_clos}
                        </NavLink>
                    </li>
    
                </ul>
    
            </div>
        )
    } else {
        navigate("/Afeme");
    }
    
}

export default UserProfilList;