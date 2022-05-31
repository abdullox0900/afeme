import React from "react";
import "../Footer/Footer.scss";
import { Container } from "react-bootstrap";
import Logo from "../../Assets/Img/logo.svg";
import GoogleImg from "../../Assets/Img/google.svg";
import Instagram from "../../Lib/Svg/Instagram";
import Telegram from "../../Lib/Svg/Telegram";
import { style } from "@mui/system";

function Footer() {

    const address = {
        width: "200px",
    }

    return (
        <>
            <footer className="footer">
                <Container>
                    <section className="footer__row">
                        <section className="footer__holder">
                            <a href="/">
                                <img src={Logo} className="footer__logo-img" alt="logo-img" />
                            </a>
                            <p className="footer__subtitle">Uzbekistondagi onlayn ko'chmas mulk yetakchisi Afeme Uz</p>
                            <a href="/" className="footer__google-icon">
                                <img src={GoogleImg} alt="google-icon" />
                            </a>
                        </section>
                        <section className="footer__holder">
                            <h3 className="footer__holder-title">Foydalanuvchilarga</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="/" className="footer__link">Biz haqimizda</a>
                                </li>
                                <li className="footer__item">
                                    <a href="/" className="footer__link">Biz haqimizda</a>
                                </li>
                                <li className="footer__item">
                                    <a href="/" className="footer__link">Roʻyxatdan oʻtish</a>
                                </li>
                                <li className="footer__item">
                                    <a href="/" className="footer__link">Eʻlon qoʻshish</a>
                                </li>
                                <li className="footer__item">
                                    <a href="/" className="footer__link">Yordam</a>
                                </li>
                            </ul>
                        </section>
                        <section className="footer__holder">
                            <h3 className="footer__holder-title">Biz bilan aloqa</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="/tel:+998900431160" className="footer__link footer__link-tel">+998900431160</a>
                                </li>
                                <li className="footer__item">
                                    <a href ="/mailto: afemegroup@gmail.com" className="footer__link footer__link-email">afemegroup@gmail.com</a>
                                </li>
                                <li className="footer__item">
                                    <a href="/https://yandex.uz/maps/org/244577402097/?ll=72.356849%2C40.746957&z=15" className="footer__link footer__link-address" target={"_blank"} style={address}>Andijon shahri, Boburshox ko'chasi, 2-uy</a>
                                </li>
                            </ul>
                        </section>
                        <section className="footer__holder">
                            <h3 className="footer__holder-title">Biz bilan aloqa</h3>
                            <ul className="footer__list footer__list-three">
                                <li className="footer__item-th">
                                    <a href="/" className="footer__link-th">
                                        <Instagram />
                                    </a>
                                </li>
                                <li className="footer__item-th">
                                    <a href="/https://t.me/afemeuzd" target={"_blank"} className="footer__link-th">
                                        <Telegram/>
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

export default Footer;