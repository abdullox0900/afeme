// Import React
import React from "react";
import { NavLink } from "react-router-dom";

// Import Components
import "../Footer/Footer.scss";
import Container from "../Container/Container";
import Logo from "../../Assets/Img/logo.svg";
import GoogleImg from "../../Assets/Img/google.svg";
import Instagram from "../../Lib/Svg/Instagram";
import Telegram from "../../Lib/Svg/Telegram";

// Import useContext => Localization
import { useContext } from 'react';
import { Context } from '../../Context/LangContext';
import content from '../../Localization/Content';

function Footer() {

    const address = {
        width: "200px",
    }

    const { lang, setLang } = useContext(Context)

    return (
        <>
            <footer className="footer">
                <Container>
                    <section className="footer__row">
                        <section className="footer__holder">
                            <NavLink to={"/Afeme"}>
                                <img src={Logo} className="footer__logo-img" alt="logo-img" />
                            </NavLink>
                            <p className="footer__subtitle">{ content[lang].footer.footer_text}</p>
                            <NavLink to={"/Tezkunda"} className="footer__google-icon">
                                <img src={GoogleImg} alt="google-icon" />
                            </NavLink>
                        </section>
                        <section className="footer__holder">
                            <h3 className="footer__holder-title">Foydalanuvchilarga</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <NavLink to={"/SignUp"} className="footer__link">Roʻyxatdan oʻtish</NavLink>
                                </li>
                                <li className="footer__item">
                                    <NavLink to={"/advertPage"} className="footer__link">Eʻlon qoʻshish</NavLink>
                                </li>
                                <li className="footer__item">
                                    <NavLink to={"/catalogreltor"} className="footer__link">Reltorlar</NavLink>

                                </li>
                                <li className="footer__item">
                                    <NavLink to={"/Tezkunda"} className="footer__link">Biz haqimizda</NavLink>
                                </li>
                            </ul>
                        </section>
                        <section className="footer__holder">
                            <h3 className="footer__holder-title">Biz bilan aloqa</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="tel:+998900431160" className="footer__link footer__link-tel">+998900431160</a>
                                </li>
                                <li className="footer__item">
                                    <a href="mailto: afemegroup@gmail.com" className="footer__link footer__link-email">afemegroup@gmail.com</a>
                                </li>
                                <li className="footer__item">
                                    <a href="https://yandex.uz/maps/org/244577402097/?ll=72.356849%2C40.746957&z=15" className="footer__link footer__link-address" target={"_blank"} style={address}>Andijon shahri, Boburshox ko'chasi, 2-uy</a>
                                </li>
                            </ul>
                        </section>
                        <section className="footer__holder">
                            <h3 className="footer__holder-title">Biz bilan aloqa</h3>
                            <ul className="footer__list footer__list-three">
                                <li className="footer__item-th">
                                    <NavLink to={"/"} className="footer__link-th">
                                        <Instagram />
                                    </NavLink>
                                </li>
                                <li className="footer__item-th">
                                    <a href="https://t.me/afemeuzd" target={"_blank"} className="footer__link-th">
                                        <Telegram />
                                    </a>
                                </li>
                            </ul>
                        </section>

                    </section>
                </Container>
            </footer>
        </>
    )
}
export default Footer