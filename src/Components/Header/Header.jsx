// Import React
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

// Import useContext => Localization
import { useContext } from 'react';
import { Context } from '../../Context/LangContext';

// Import Mui
import { IconButton, Button, Tooltip, Grow, Badge, Menu, MenuItem, Divider } from '@mui/material';


// Import Components
import logo from "../../Assets/Img/logo.svg"
import notificationIcon from "../../Assets/Img/notification.svg"
import loveIcon from "../../Assets/Img/love.svg"
import CurrencyIcon from "../../Assets/Img/currency.svg"
import locationIcon from "../../Assets/Img/location.svg"
import plusIcon from "../../Assets/Img/plus.svg"
import Container from "../Container/Container";
import Modal from '../ModalAuthorization/Modal';
import "../ModalAuthorization/Modal.scss";
import "../Header/Header.scss";
import Nav from '../Nav/Nav';
import content from '../../Localization/Content';

import "../../Utils/I18n";



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
]

function Header() {

    const elModal = React.useRef();
    const elHeader = React.useRef();

    const { lang, setLang } = useContext(Context)

    return (
        <>
            <header className="header" ref={elHeader}>
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
                        <Nav elHeader={elHeader} />
                        <div className="header__items">
                            <div className="header__icons-nav">
                                <Tooltip className="icon__btn" title="Your Currency" arrow TransitionComponent={Grow}>
                                    <IconButton color="primary">

                                        <select className='header__select-lang' defaultValue={lang} onChange={(evt) => setLang(evt.target.value)}>
                                            <option value="uz">Uz</option>
                                            <option value="en">En</option>
                                            <option value="ru">Ru</option>
                                        </select>

                                        <div className="dropdown">
                                            <input type="text" className='header__text-box' readOnly />
                                            <div className="option">
                                                {language.map(({ code, name, country }) => (
                                                    <div key={country}>
                                                        <button className="dropdown-item">
                                                            <span className={`flag-icon flag-icon-${country}`}></span>&nbsp;
                                                            {name}
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
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
                            </div>
                            <div className="header__buttons" sx={{ ml: 3 }}>
                                <NavLink to={"/advertPage"}>
                                    <Button className="btn header__button add__announcement" variant="contained" sx={{ py: 1, px: 1.5 }}><img src={plusIcon} alt="" />{content[lang].header.add}</Button>
                                </NavLink>
                                <Button className="btn header__button login__btn modal-dialog modal-dialog-scrollable"
                                    variant="text" sx={{ ml: 2, py: 1.5, px: 2.5 }} onClick={() => {
                                        elModal.current.classList.add("modal--open");
                                        elModal.current.classList.add("modal--style");
                                    }}>{content[lang].header.fromBtn}</Button>
                            </div>
                        </div>
                        <button className='header__menu-btn' onClick={() => {
                            elHeader.current.classList.add("header--open")
                        }}>/</button>
                    </div>
                </Container>
            </header>
            <Modal elModal={elModal} />
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