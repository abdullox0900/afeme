// Import React
import React from "react";
import { NavLink } from "react-router-dom";

// Import useContext => Localization
import { useContext } from 'react';
import { Context } from '../../Context/LangContext';
import content from '../../Localization/Content';

// Import Mui
import { Menu, MenuItem, Divider } from '@mui/material';

// Import Components
import Container from "../Container/Container";
import "../Nav/Nav.scss";

function Nav({ elHeader }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        event.preventDefault();
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const elNavbarMenu = React.useRef()
    const { lang, setLang } = useContext(Context)

    return (
        <>
            <Container>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#" className="nav__link">{content[lang].header.nav.sal}</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">{content[lang].header.nav.rent}</a>
                        </li>
                        <li className="nav__item">
                            <NavLink to={"/catalogreltor"} className="nav__link">{content[lang].header.nav.rel}</NavLink>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link" onClick={handleClick}>{content[lang].header.nav.mor}</a>
                        </li>
                        <Menu id="nav__more-menu" MenuListProps={{ 'aria-labelledby': 'nav__bottom-more', }} anchorEl={anchorEl} open={open} onClose={handleClose}>
                            <MenuItem onClick={handleClose} sx={{ py: 0.5 }}><a href="#">Something 1</a></MenuItem>
                            <Divider sx={{ my: 0.1 }} />
                            <MenuItem onClick={handleClose} sx={{ py: 0.5 }}><a href="#">Something 2</a></MenuItem>
                            <Divider sx={{ my: 0.1 }} />
                            <MenuItem onClick={handleClose} sx={{ py: 0.5 }}><a href="#">Something 3</a></MenuItem>
                        </Menu>
                    </ul>
                </nav>

                {/* Responsiv Navbar */}
                <div className="navbar-wrapper" ref={elNavbarMenu} onClick={(event) => {
                    if (event.target.matches(".navbar-wrapper") || event.target.matches(".nav-menu__clos-btn")) {
                        elHeader.current.classList.remove("header--open");
                    }
                }}>
                    <nav className="navbar-menu">

                        <ul className="navbar-menu__list">
                            <li className="navbar-menu__item">
                                <a href="#" className="navbar-menu__link">Bosh sahifaga o'tish</a>
                            </li>

                            <li className="navbar-menu__item">
                                <a href="#" className="navbar-menu__link">E'lon qo'shish</a>
                            </li>

                            <li className="navbar-menu__item">
                                <a href="#" className="navbar-menu__link">Tanlanganlar</a>
                            </li>
                        </ul>

                        <button className="nav-menu__clos-btn">
                            <ion-icon name="close-outline" className="close-outline"></ion-icon>
                        </button>
                    </nav>
                </div>
            </Container>
        </>
    )
}

export default Nav;