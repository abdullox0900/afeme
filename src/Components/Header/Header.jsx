// Import => React
import React, { useState, useContext, useEffect } from "react";
import { NavLink as Link, useNavigate } from "react-router-dom";

// Import useContext => Localization
import { Context } from "../../Context/LangContext";
import { CurrencyContext } from "../../Context/CurrencyContext";
import { UserContext } from "../../Context/UserContext";
import { IPContext } from "../../Context/IPContext";

// Import => Mui
import {
    Container,
    Select,
    IconButton,
    Tooltip,
    Button,
    Grow,
    Badge,
    MenuItem,
    Box,
    Menu,
    Avatar,
    Divider,
    ListItemIcon,
} from "@mui/material";
import {
    Settings,
    Logout,
    PostAdd,
    Chat as ChatIcon,
} from "@mui/icons-material/";

// Import => images
import flagUz from "../../Assets/Img/Icon/uz.svg";
import flagRu from "../../Assets/Img/Icon/ru.svg";
import flagEn from "../../Assets/Img/Icon/en.svg";
import logo from "../../Assets/Img/Icon/logo.png";
import loveIcon from "../../Assets/Img/love.svg";
import locationIcon from "../../Assets/Img/location.svg";

// Import => Components
import LogOut from "../../Utils/logOut";
import Modal from "../LoginModals/ModalAuthorization/Modal";
import "../LoginModals/ModalAuthorization/Modal.scss";
import "../Header/Header.scss";
import Nav from "../Nav/Nav";
import content from "../../Localization/Content";
import AdvertBtn from "../AddAdvertBtn/AdvertBtn";
import CheckUserLogin from "../../Utils/modalOpener";

// Import => Axios
import axios from "axios";

function Header() {
    const elModal = React.useRef();
    const elHeader = React.useRef();

    const { IP, setIP } = useContext(IPContext);
    // Logo State
    const [logoImg, setLogoImg] = useState([]);
    const defaultAvatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU"

    const { lang, setLang } = useContext(Context);
    const { user, setUser } = useContext(UserContext);
    const { currency, setCurrency } = useContext(CurrencyContext);
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [currencyTooltip, setCurrencyTooltip] = useState(false);
    const [langTooltip, setLangTooltip] = useState(false);
    const userMenuOpen = Boolean(anchorElUser);

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

    let url = process.env.REACT_APP_URL;

    const newImgArr = [];

    const profile = (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleOpenUserMenu}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={
                            userMenuOpen ? "account-menu" : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={
                            userMenuOpen ? "true" : undefined
                        }
                        className="profile__menu"
                    >
                        {user.data?.image ? (
                            <img
                                className="user-profil__avatar"
                                src={user?.data.image}
                                alt=""
                                onError={(e) =>
                                    (e.target.src = defaultAvatar)
                                }
                            />
                        )
                         :
                          (
                            <Avatar sx={{ width: 32, height: 32 }}>
                                {user?.data?.name.slice(0, 1)}
                            </Avatar>
                        )
                        }
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorElUser}
                id="account-menu"
                className="userAccountMenu"
                open={userMenuOpen}
                onClose={handleCloseUserMenu}
                onClick={handleCloseUserMenu}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{
                    horizontal: "right",
                    vertical: "top",
                }}
                anchorOrigin={{
                    horizontal: "right",
                    vertical: "bottom",
                }}
            >
                <MenuItem>
                    <Link
                        to={"/userprofil"}
                        className="profile__menu__link"
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>
                            {user?.data?.name.slice(0, 1)}
                        </Avatar>
                        {user?.data?.name} {user?.data?.lastname}
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                        to={"/userads"}
                        className="profile__menu__link"
                    >
                        <ListItemIcon>
                            <PostAdd />
                        </ListItemIcon>
                        Mening e'lonlarim
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to={"/chat"} className="profile__menu__link">
                        <ListItemIcon>
                            <ChatIcon />
                        </ListItemIcon>
                        Xabarlar
                    </Link>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <Link
                        to={"/userprofil"}
                        className="profile__menu__link"
                    >
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Sozlamalar
                    </Link>
                </MenuItem>
                <MenuItem onClick={(e) => LogOut(e)}>
                    <Link to={"#"} className="profile__menu__link">
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Chiqish
                    </Link>
                </MenuItem>
            </Menu>
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
                            <Link to={"/Afeme"} className="header__logo-link">
                                <img
                                    className="header__logo-img"
                                    src={logo}
                                    alt="logo"
                                />
                            </Link>

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
                                    {user.hasOwnProperty("data")
                                        ? lang == "uz"
                                            ? user?.data?.region_id?.name_uz
                                            : lang == "ru"
                                            ? user?.data?.region_id?.name_ru
                                            : user?.data?.region_id?.name_en
                                        : IP?.region}
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
                                            onClose={langTooltipClose}
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
                                    <Link
                                        to={"/userfavorites"}
                                        className="header__likes__link"
                                        onClick={(e) => CheckUserLogin(e, user)}
                                    >
                                        <IconButton
                                            color="primary"
                                            sx={{ mr: "5px" }}
                                        >
                                            <Badge
                                                badgeContent={
                                                    user?.favorites
                                                        ? user?.favorites
                                                        : 0
                                                }
                                                color="error"
                                            >
                                                <img
                                                    src={loveIcon}
                                                    alt=""
                                                    className="header__icon nav__love"
                                                />
                                            </Badge>
                                        </IconButton>
                                    </Link>
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
                                            onClose={currencyTooltipClose}
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
                            <Box className="header__buttons">
                                {/* If User have Account show profile else Show Login */}
                                {window.location.pathname != "/advertPage" ? (
                                    <AdvertBtn />
                                ) : (
                                    ""
                                )}

                                {user.hasOwnProperty("data")
                                    ? profile
                                    : userTools}
                            </Box>
                        </div>
                        <button
                            className="header__menu-btn"
                            onClick={() => {
                                elHeader.current.classList.add("header--open");
                                document.body.style.overflow =
                                    "-moz-hidden-unscrollable";
                            }}
                        >
                            ☰
                        </button>
                    </div>
                </Container>
            </header>
            <Modal elModal={elModal} />
        </>
    );
}
export default Header;
