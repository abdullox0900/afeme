// Import => React
import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Import useContext => Localization
import { Context } from "../../Context/LangContext";
import { CurrencyContext } from "../../Context/CurrencyContext";
import { UserContext } from "../../Context/UserContext";

// Import => Mui
import { Select, IconButton, Tooltip, Button, Grow, Badge, MenuItem, Box, Menu, Avatar, Typography } from "@mui/material";

// Import => images
import flagUz from "../../Assets/Img/Icon/uz.svg";
import flagRu from "../../Assets/Img/Icon/ru.svg";
import flagEn from "../../Assets/Img/Icon/en.svg";
import logo from "../../Assets/Img/logo.svg";
import loveIcon from "../../Assets/Img/love.svg";
import locationIcon from "../../Assets/Img/location.svg";

// Import => Components
import LogOut from "../../Utils/logOut";
import { Container } from "@mui/material";
import Modal from "../LoginModals/ModalAuthorization/Modal";
import "../LoginModals/ModalAuthorization/Modal.scss";
import "../Header/Header.scss";
import Nav from "../Nav/Nav";
import content from "../../Localization/Content";
import AdvertBtn from "../AddAdvertBtn/AdvertBtn";
import { getCookie, setCookie } from "../../Utils/cookies";

function Header() {
    const elModal = React.useRef();
    const elHeader = React.useRef();

    const navigate = useNavigate();

    const { lang, setLang } = useContext(Context);
    const { isUser, setIsUser } = useContext(UserContext);
    const { currency, setCurrency } = useContext(CurrencyContext);
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [currencyTooltip, setCurrencyTooltip] = useState(false);
    const [langTooltip, setLangTooltip] = useState(false);

    const currencyChange = (e) => {
        setCurrency(e.target.value);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const currencyTooltipOpen = () => {
        setCurrencyTooltip(true);
    };
    const currencyTooltipClose = () => {
        setCurrencyTooltip(false);
    };
    const langTooltipOpen = () => {
        setLangTooltip(true);
    };
    const langTooltipClose = () => {
        setLangTooltip(false);
    };

    const profile = (
        <>
            <AdvertBtn />
            <Box sx={{ flexGrow: 0, ml: 2 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar
                            alt="Profile picture"
                            src=""
                            sx={{ width: "36px", height: "36px" }}
                        />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center" className="profileTools">
                            <NavLink to={"/userprofil"}>My Profile</NavLink>
                        </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center" className="profileTools">
                            <NavLink to={"/posts"}>My Adverts</NavLink>
                        </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center" className="profileTools">
                            <NavLink to={"/Afeme"}>Main menu</NavLink>
                        </Typography>
                    </MenuItem>
                    <MenuItem onClick={LogOut}>
                        
                        <Typography textAlign="center" className="profileTools">
                            Log out
                        </Typography>
                    </MenuItem>
                </Menu>
            </Box>
        </>
    );

    const userTools = (
        <>
            <Button
                className="btn header__button login__btn modal-dialog modal-dialog-scrollable"
                variant="text"
                sx={{ ml: 2, py: 1.5, px: 2.5 }}
                onClick={() => {
                    elModal.current.classList.add("modal--open");
                    elModal.current.classList.add("modal--style");
                }}
            >
                {content[lang].fromBtn}
            </Button>
        </>
    );

    return (
        <>
            <header className="header" ref={elHeader}>
                <Container className="container">
                    <div className="header__content">
                        <div className="header__logo">
                            <NavLink
                                to={"/Afeme"}
                                className="header__logo-link"
                            >
                                <img
                                    className="header__logo-img"
                                    src={logo}
                                    alt="logo"
                                />
                            </NavLink>

                            <Tooltip
                                className="icon__btn"
                                title={content[lang].placeTooltip}
                                arrow
                                TransitionComponent={Grow}
                            >
                                <Button
                                    className="btn header__location"
                                    variant="text"
                                    sx={{ py: 1, px: 1.2, ml: 1.5 }}
                                >
                                    <img
                                        src={locationIcon}
                                        alt="location-img"
                                        className="header__location-img"
                                    />
                                    Uzbekistan
                                </Button>
                            </Tooltip>
                        </div>
                        <Nav elHeader={elHeader} />
                        <div className="header__items">
                            <div className="header__icons-nav">
                                <Tooltip
                                    title={content[lang].langTooltip}
                                    open={langTooltip}
                                    arrow
                                    TransitionComponent={Grow}
                                >
                                    <IconButton
                                        color="primary"
                                        className="lang__changer"
                                        sx={{ mr: "5px" }}
                                        onMouseEnter={langTooltipOpen}
                                        onMouseLeave={langTooltipClose}
                                    >
                                        <Select
                                            className="header__select header__select-lang"
                                            value="lang"
                                            defaultValue={lang}
                                            onChange={(evt) =>
                                                setLang(evt.target.value)
                                            }
                                            onOpen={langTooltipClose}
                                        >
                                            <MenuItem value="uz">
                                                <img
                                                    className="header__select-img"
                                                    src={flagUz}
                                                />
                                                O'zbekcha
                                            </MenuItem>
                                            <MenuItem value="en">
                                                <img
                                                    className="header__select-img"
                                                    src={flagEn}
                                                />
                                                English
                                            </MenuItem>
                                            <MenuItem value="ru">
                                                <img
                                                    className="header__select-img"
                                                    src={flagRu}
                                                />
                                                Русский
                                            </MenuItem>
                                        </Select>
                                    </IconButton>
                                </Tooltip>

                                <Tooltip
                                    title={content[lang].loveTooltip}
                                    arrow
                                    TransitionComponent={Grow}
                                >
                                    <NavLink to={"/liked"} className="header__likes__link">
                                        <IconButton
                                            color="primary"
                                            sx={{ mr: "5px" }}
                                        >
                                            <Badge
                                                badgeContent={2}
                                                color="error"
                                            >
                                                <img
                                                    src={loveIcon}
                                                    alt=""
                                                    className="header__icon nav__love"
                                                />
                                            </Badge>
                                        </IconButton>
                                    </NavLink>
                                </Tooltip>
                                <Tooltip
                                    title={content[lang].currencyTooltip}
                                    open={currencyTooltip}
                                    arrow
                                    TransitionComponent={Grow}
                                >
                                    <IconButton
                                        color="primary"
                                        className="currency__changer"
                                        sx={{ ml: "4px" }}
                                        onMouseEnter={currencyTooltipOpen}
                                        onMouseLeave={currencyTooltipClose}
                                    >
                                        <Select
                                            className="header__select select__currency"
                                            value="currency"
                                            defaultValue={currency}
                                            onChange={currencyChange}
                                            onOpen={currencyTooltipClose}
                                        >
                                            <MenuItem value="sum">
                                                So'm (uzs)
                                            </MenuItem>
                                            <MenuItem value="usd">
                                                Dollar (usd)
                                            </MenuItem>
                                        </Select>
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <Box className="header__buttons" sx={{ ml: 3 }}>
                                {/* If User have Account show profile else Show Login */}
                                {isUser ? profile : userTools}
                            </Box>
                        </div>
                        <button
                            className="header__menu-btn"
                            onClick={() => {
                                elHeader.current.classList.add("header--open");
                            }}
                        >
                            /
                        </button>
                    </div>
                </Container>
            </header>
            <Modal elModal={elModal} />
        </>
    );
}
export default Header;
