// Import => React
import { React, useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Import => Component
import Container from "../../Components/Container/Container";

// Import => Style Component
import "../../Components/UserProfilList/UserProfilList.scss";

// Import useContext => Localization
import ContentLoader from "react-content-loader";
import { Context } from "../../Context/LangContext";
import { CurrencyContext } from "../../Context/CurrencyContext";
import { UserContext } from "../../Context/UserContext";
import content from "../../Localization/Content";

// Import => logout
import LogOut from "../../Utils/logOut";

function UserProfilList() {
    
    const navigate = useNavigate();
    const { lang, setLang } = useContext(Context);
    const { user, setUser } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user.hasOwnProperty("data")) {
            setIsLoading(false);
        }
    }, [user]);

    let activeStyle = {
        borderRadius: "5px",
        color: "dodgerblue",
        backgroundColor: "#cacaca",
    };
    console.log(user);

    if (isLoading) {
        return (
            <div className="user-prof">
                <ContentLoader
                    speed={1.25}
                    width={300}
                    height={"100%"}
                    interval={0.25}
                    backgroundColor="#ebebeb"
                    foregroundColor="#0066ff00"
                >
                    <rect x="110" y="20" rx="82" width="80" height="80" />
                    <rect x="60" y="120" rx="10" width="160" height="20" />
                    <rect x="0" y="180" rx="10" width="95%" height="46" />
                    <rect x="0" y="245" rx="10" width="95%" height="46" />
                    <rect x="0" y="310" rx="10" width="95%" height="46" />
                    <rect x="0" y="375" rx="10" width="95%" height="46" />
                    <rect x="0" y="440" rx="10" width="95%" height="46" />
                    <rect x="0" y="505" rx="10" width="95%" height="46" />
                </ContentLoader>
            </div>
        );
    } else if (user.hasOwnProperty("data")) {
        return (
            <div className="user-prof">
                <div className="user-prof__avatar">
                    <img
                        className="user-prof__img"
                        src={
                            user.data.image
                                ? user.data.image
                                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU"
                        }
                    />
                    <h3 className="user-prof__title">
                        {user.data.name} {user.data.lastname}
                    </h3>
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
                        <NavLink
                            to={"/userprofilmessage"}
                            className="user-prof__link"
                        >
                            <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                            {content[lang].user_profil_message}
                        </NavLink>
                    </li>

                    <li className="user-prof__item">
                        <NavLink
                            to={"/userfavorites"}
                            className="user-prof__link"
                        >
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
                        <NavLink to={"/"} className="user-prof__link" onClick={LogOut}>
                            <ion-icon name="log-in-outline"></ion-icon>
                            {content[lang].user_profil_clos}
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    } else {
        navigate("/Afeme");
    }
}
export default UserProfilList;