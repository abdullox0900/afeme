// Import React
import React, { Component, useEffect } from 'react';
import { NavLink } from "react-router-dom";

// Import useContext => Localization
import { useContext } from 'react';
import { Context } from '../../Context/LangContext';

// Import Mui
import { IconButton, Button, Tooltip, Grow, Badge, MenuItem, } from '@mui/material';
import Select from '@mui/material/Select';

// Import Components
import flagUz from "../../Assets/Img/Icon/uz.svg"
import flagRu from "../../Assets/Img/Icon/ru.svg"
import flagEn from "../../Assets/Img/Icon/en.svg"
import logo from "../../Assets/Img/logo.svg"
import notificationIcon from "../../Assets/Img/notification.svg"
import loveIcon from "../../Assets/Img/love.svg"
import locationIcon from "../../Assets/Img/location.svg"
import plusIcon from "../../Assets/Img/plus.svg"
import Container from "../Container/Container";
import Modal from '../ModalAuthorization/Modal';
import "../ModalAuthorization/Modal.scss";
import "../Header/Header.scss";
import Nav from '../Nav/Nav';
import content from '../../Localization/Content';

import "../../Utils/I18n";

function Header() {

    const elModal = React.useRef();
    const elHeader = React.useRef();

    const { lang, setLang } = useContext(Context);
    const [currency, setCurrency] = React.useState('usd');

    const currencyChange = (e) => {
        setCurrency(e.target.value);
        console.log(e.target.value);
    }

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

                                <IconButton color="primary" className='lang__changer'>
                                    <Select
                                        className='header__select select__lang'
                                        value={lang}
                                        defaultValue={lang}
                                        onChange={(evt) => setLang(evt.target.value)}>
                                        <MenuItem  value="uz">
                                            <img className='header__select-img' src={flagUz}/>O'zbekcha</MenuItem>
                                        <MenuItem value="en">
                                            <img className='header__select-img' src={flagEn}/>English</MenuItem>
                                        <MenuItem value="ru">
                                            <img className='header__select-img' src={flagRu}/>Русский</MenuItem>
                                    </Select>
                                </IconButton>

                                <Tooltip className="icon__btn" title="Your Loves" arrow TransitionComponent={Grow}>
                                    <NavLink to={"/liked"}>
                                        <IconButton color="primary">
                                            <img src={loveIcon} alt="" className="header__icon nav__love" />
                                        </IconButton>
                                    </NavLink>
                                </Tooltip>
                                <IconButton color="primary" className='currency__changer'>
                                    <Select className='header__select select__currency'
                                    value={currency}
                                        defaultValue={currency}
                                        onChange={currencyChange}>
                                        <MenuItem  value="sum">
                                            <img className='header__select-img' src={flagUz}/>So'm</MenuItem>
                                        <MenuItem value="usd">
                                            <img className='header__select-img' src={flagEn}/>Dollar</MenuItem>
                                    </Select>
                                </IconButton>
                            </div>
                            <div className="header__buttons" sx={{ ml: 3 }}>
                                <NavLink to={"/advertPage"}>
                                    <Button className="btn header__button add__advert" variant="contained" sx={{ py: 1, px: 1.5 }}><img src={plusIcon} alt="" />{content[lang].header.add}</Button>
                                </NavLink>
                                <Button className="btn header__button login__btn modal-dialog modal-dialog-scrollable"
                                    variant="text" sx={{ ml: 2, py: 1.5, px: 2.5 }} onClick={() => {
                                        elModal.current.classList.add("modal--open");
                                        elModal.current.classList.add("modal--style");
                                    }}>{content[lang].fromBtn}</Button>
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