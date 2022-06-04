import React, { Component } from 'react';
// import axios from 'axios';
import logo from "../../Assets/Img/logo.svg"
import notificationIcon from "../../Assets/Img/notification.svg"
import loveIcon from "../../Assets/Img/love.svg"
import CurrencyIcon from "../../Assets/Img/currency.svg"
import locationIcon from "../../Assets/Img/location.svg"
import plusIcon from "../../Assets/Img/plus.svg"
import Container from "../Container/Container";
import Modal from '../ModalAuthorization/Modal';
import "../ModalAuthorization/Modal.scss";
import { IconButton, Button, Tooltip, Grow, Badge, } from '@mui/material';
import "../Header/Header.scss";
import { NavLink } from "react-router-dom";
// import i18next from 'i18next';/
// import bootstrap from 'bootstrap';
// import i18n from "../i18next.js"
// import { useTranslation } from 'react-i18next';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {

    const elModal = React.useRef();
    // const { t } = useTranslation();

    const language = [
        {
            code: "uz",
            name: "Uzbekistan",
            country: "uz",
        },
        {
            code: "en",
            name: "English",
            country: "gb",
        },
        {
            code: "ru",
            name: "Rossian",
            country: "ru",
        },
    ];

    return (
        <>
            <header className="header">
                <Container>
                    <div className="header__content">
                        <div className="header__logo">

                            <NavLink to={"/Afeme"} className="header__logo-link">
                                <img className="header__logo-img" src={logo} alt="logo" />
                            </NavLink>

                            <Tooltip className="icon__btn" title="Joylashuvingiz" arrow TransitionComponent={Grow}>
                                <Button className="btn header__location" variant="text" sx={{ py: 1, px: 1.2, ml: 1.5 }}>
                                    <img src={locationIcon} alt="location-img" className="header__location-img" />
                                    Uzbekistan
                                </Button>
                            </Tooltip>
                        </div>
                        <div className="header__items">
                            <Tooltip className="icon__btn" title="Your Currency" arrow TransitionComponent={Grow}>
                                <IconButton color="primary">
                                    {/* <img src={CurrencyIcon} alt="" className="header__icon nav__currency" /> */}
                                    <div className="dropdown">
                                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">

                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            {/* {language.map(({ code, name, country }) => (
                                                <li key={country}>
                                                    <button className="dropdown-item"
                                                        onClick={() => i18next.changeLanguage(code)}>
                                                        <span className={`flag-icon flag-icon-${country}`}></span>&nbsp;
                                                        {name}
                                                    </button>
                                                </li>
                                            ))} */}
                                        </ul>
                                    </div>
                                </IconButton>
                            </Tooltip>
                            <Tooltip className="icon__btn" title="Your Loves" arrow TransitionComponent={Grow}>
                                <IconButton color="primary">
                                    <img src={loveIcon} alt="" className="header__icon nav__love" />
                                </IconButton>
                            </Tooltip>
                            <Badge badgeContent={100} color="secondary">
                                <Tooltip className="icon__btn" title="Notifications" arrow TransitionComponent={Grow}>
                                    <IconButton color="success">
                                        <img src={notificationIcon} alt="" className="header__icon nav__notification" />
                                    </IconButton>
                                </Tooltip>
                            </Badge>
                            <div className="header__buttons" sx={{ ml: 3 }}>
                                <NavLink to={"/advertPage"}>
                                    <Button className="btn header__button add__announcement" variant="contained" sx={{ py: 1, px: 1.5 }}><img src={plusIcon} alt="" /></Button>
                                </NavLink>
                                <Button className="btn header__button login__btn modal-dialog modal-dialog-scrollable"
                                    variant="text" sx={{ ml: 2, py: 1.5, px: 2.5 }} onClick={() => {
                                        elModal.current.classList.add("modal--open");
                                        elModal.current.classList.add("modal--style");
                                    }}>Kirish</Button>
                            </div>
                        </div>
                    </div>
                </Container>

                <Modal elModal={elModal} />

            </header>
        </>
    )
}
export default Header

// class Header extends Component {
//     state = {
//         // IP: ""
//     }

    // componentDidMount() {
    //     axios.get(`https://ipapi.co/json/`)
    //         .then(response => {
    //             const IP = response.data;
    //             console.log(IP.country_name);
    //             if (IP.ip) {
    //                 this.setState({ IP });
    //             }
    //         })
    //         .catch((err) => { console.log(err); });
    // }

    // Iltomos errorlarni tozalab yuring
    // {this.state.IP.country_name}



    // render() {

    //     return (
    //         <>

    //         </>
    //     )
    // }
// }