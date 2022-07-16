// Import React
import React, { useContext, useEffect, useState } from "react";
import { NavLink as Link } from "react-router-dom";
import axios from "axios";

// Import useContext => Localization
import { Context } from "../../Context/LangContext";
import content from "../../Localization/Content";

// Import Mui
import { Menu, MenuItem, Divider, Container } from "@mui/material";

// Import Components
import "../Nav/Nav.scss";

// Import => Img Componnet
import GoogleImg from "../../Assets/Img/google.svg";
import LogOut from "../../Utils/logOut";

let url = process.env.REACT_APP_URL;

function Nav({ elHeader }) {
    const { lang, setLang } = useContext(Context);
    const [categoriesData, setCategoriesData] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        event.preventDefault();
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        axios.get(`${url}htype`).then((res) => {
            setCategoriesData(res.data.data);
        });
    }, []);

    const elNavbarMenu = React.useRef();


    return (
        <Container>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to="/adverts?sale=6" className="nav__link">
                            {content[lang].sal}
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/adverts?sale=5" className="nav__link">
                            {content[lang].rent}
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to={"/catalogreltor"} className="nav__link">
                            {content[lang].rel}
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link
                            to="#"
                            className="nav__link"
                            onClick={handleClick}
                        >
                            {content[lang].mor}
                        </Link>
                    </li>
                    <Menu
                        id="nav__more-menu"
                        MenuListProps={{
                            "aria-labelledby": "nav__bottom-more",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        {categoriesData.map((category) => (
                            <>
                                <MenuItem
                                    onClick={handleClose}
                                    sx={{ py: 0.5 }}
                                >
                                    <Link
                                        className="nav__more__items"
                                        to={`/adverts?htype=${category.id}`}
                                    >
                                        {lang == "uz"
                                            ? category.name_uz
                                            : lang == "ru"
                                                ? category.name_ru
                                                : category.name_en}
                                    </Link>
                                </MenuItem>
                                <Divider sx={{ my: 0.1 }} />
                            </>
                        ))}
                    </Menu>
                </ul>
            </nav>

            {/* Responsiv Navbar */}
            <div
                className="navbar-wrapper"
                ref={elNavbarMenu}
                onClick={(event) => {
                    if (
                        event.target.matches(".navbar-wrapper") ||
                        event.target.matches(".nav-menu__clos-btn")
                    ) {
                        elHeader.current.classList.remove("header--open");
                    }
                }}
            >
                <nav className="navbar-menu">
                    <ul className="navbar-menu__list">
                        <li className="navbar-menu__item">
                            <ion-icon name="home-outline"></ion-icon>
                            <Link to={'/'} className="navbar-menu__link">
                                {content[lang].sMenu}
                            </Link>
                        </li>

                        <li className="navbar-menu__item">
                            <ion-icon name="add-outline"></ion-icon>
                            <Link to={'/advertPage'} className="navbar-menu__link">
                                {content[lang].sAdd}
                            </Link>
                        </li>

                        <li className="navbar-menu__item">
                            <ion-icon name="albums-outline"></ion-icon>
                            <Link to={'/userads'} className="navbar-menu__link">
                                {content[lang].sAds}
                            </Link>
                        </li>

                        <li className="navbar-menu__item">
                            <ion-icon name="heart-outline"></ion-icon>
                            <Link to={'/userfavorites'} className="navbar-menu__link">
                                {content[lang].sFeatures}
                            </Link>
                        </li>

                        <li className="navbar-menu__item">
                            <ion-icon name="help-buoy-outline"></ion-icon>
                            <Link to={'/help'} className="navbar-menu__link">
                                {content[lang].sHelp}
                            </Link>
                        </li>

                        <li className="navbar-menu__item">
                            <ion-icon name="enter-outline"></ion-icon>
                            <Link to={'/SignUp'} className="navbar-menu__link">
                                {/* {content[lang].sAdd} */} Royhatdan otish
                            </Link>
                        </li>

                        <li className="navbar-menu__item" >
                            <ion-icon name="exit-outline"></ion-icon>
                            <Link to={'/'} onClick={(e) => LogOut(e)} className="navbar-menu__link">
                                {content[lang].sLogout}
                            </Link>
                        </li>
                    </ul>

                    <button className="nav-menu__clos-btn">✖</button>

                    <ul className="nav-menu__list">
                        <li className="nav-menu__item">
                            <Link
                                to="/adverts?sale=6"
                                className="nav-menu__link"
                            >
                                {content[lang].sal}
                            </Link>
                        </li>

                        <li className="nav-menu__item">
                            <Link
                                to="/adverts?sale=5"
                                className="nav-menu__link"
                            >
                                {content[lang].rent}
                            </Link>
                        </li>

                        {categoriesData.map((category) => (
                            <li className="nav-menu__item">
                                <Link
                                    to={`/adverts?htype=${category.id}`}
                                    className="nav-menu__link"
                                >
                                    {lang == "uz"
                                        ? category.name_uz
                                        : lang == "ru"
                                            ? category.name_ru
                                            : category.name_en}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="nav__footer">
                        <a href="#" className="nav__footer-link">
                            <img
                                className="nav__footer-link"
                                src={GoogleImg}
                                alt="img"
                            />
                        </a>
                    </div>
                </nav>
            </div>
        </Container>
    );
}

export default Nav;
