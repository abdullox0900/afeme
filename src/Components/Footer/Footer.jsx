import React from "react";
import "../Footer/Footer.scss";
import { Container } from "react-bootstrap";
import Logo from "../../Assets/Img/logo.svg";
import GoogleImg from "../../Assets/Img/google.svg";

function Footer() {
    return (
        <>
            <footer className="footer">
                <Container>
                    <section className="footer__row">
                        <section className="footer__holder">
                            <a href="#">
                                <img src={Logo} className="footer__logo-img" alt="logo-img" />
                            </a>
                            <p className="footer__subtitle">Uzbekistondagi onlayn ko'chmas mulk yetakchisi Afeme Uz</p>
                            <a href="#" className="footer__google-icon">
                                <img src={GoogleImg} alt="google-icon" />
                            </a>
                        </section>
                        <section className="footer__holder">
                            <h3 className="footer__holder-title">Foydalanuvchilarga</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Biz haqimizda</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Biz haqimizda</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Roʻyxatdan oʻtish</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Eʻlon qoʻshish</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Yordam</a>
                                </li>
                            </ul>
                        </section>
                        <section className="footer__holder">
                            <h3 className="footer__holder-title">Biz bilan aloqa</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="#" className="footer__link">+998900431160</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">afemegroup@gmail.com</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Andijon shahri, Boburshox ko'chasi, 2-uy</a>
                                </li>
                            </ul>
                        </section>
                        <section className="footer__holder">
                            <h3 className="footer__holder-title">Biz bilan aloqa</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="#" className="footer__link">
                                        <img src="" alt="" />
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">
                                        <img src="" alt="" />
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