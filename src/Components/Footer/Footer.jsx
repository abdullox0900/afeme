// Import => React
import React from "react";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';

// Import => Components
import "../Footer/Footer.scss";
import { Container } from "@mui/material";
import Logo from "../../Assets/Img/logo.svg";
import GoogleImg from "../../Assets/Img/google.svg";
import Instagram from "../../Lib/Svg/Instagram";
import Telegram from "../../Lib/Svg/Telegram";

// Import useContext => Localization
import { Context } from '../../Context/LangContext';
import content from '../../Localization/Content';

// Import => Axios
import axios from "axios";
import { v4 } from "uuid";

let url = process.env.REACT_APP_URL;

function Footer() {

    const { lang, setLang } = useContext(Context);
    const [useData, setUseData] = useState([])
    const [useNetWorkData, setNetWorkData] = useState([])

    useEffect(() => {
        axios.get(`${url}addresses`)
            .then(res => {
                const resdat = res?.data;
                setUseData(resdat)
            })
    }, [])

    useEffect(() => {
        axios.get(`${url}networks`)
            .then(res => {
                const resdat = res?.data;
                setNetWorkData(resdat)
            })
    }, [])

    const address = {
        width: "200px",
    }

    // const style = {
    //     position: "fixed",
    //     left: "0",
    //     bottom: "0",
    //     height: "380px",
    //     width: "100%"
    //   };

    return (
        <>
            <footer className="footer">
                <Container className="container">
                    <section className="footer__row">
                        <section className="footer__holder">
                            <NavLink to={"/"}>
                                <img src={Logo} className="footer__logo-img" alt="logo-img" />
                            </NavLink>
                            <p className="footer__subtitle">{content[lang].footer_text}</p>
                            <NavLink to={"/Tezkunda"} className="footer__google-icon">
                                <img src={GoogleImg} alt="google-icon" />
                            </NavLink>
                        </section>
                        <section className="footer__holder">
                            <h3 className="footer__holder-title">{content[lang].users_title}</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <NavLink to={"/SignUp"} className="footer__link">{content[lang].from_sign}</NavLink>
                                </li>
                                <li className="footer__item">
                                    <NavLink to={"/advertPage"} className="footer__link">{content[lang].add}</NavLink>
                                </li>
                                <li className="footer__item">
                                    <NavLink to={"/catalogreltor"} className="footer__link">{content[lang].rel}</NavLink>
                                </li>
                                <li className="footer__item">
                                    <NavLink to={"/Tezkunda"} className="footer__link">{content[lang].we}</NavLink>
                                </li>
                                <li className="footer__item">
                                    <NavLink to={"/help"} className="footer__link">{content[lang].help}</NavLink>
                                </li>
                                <li className="footer__item">
                                    <NavLink to={"/chat"} className="footer__link">{content[lang].chat}</NavLink>
                                </li>
                            </ul>
                        </section>
                        <section className="footer__holder">
                            <h3 className="footer__holder-title">{content[lang].contact_us}</h3>
                            <>
                                {
                                    useData.map((res) => {
                                        return (
                                            <ul className="footer__list" key={v4()}>
                                                <li className="footer__item">
                                                    <a href="tel:+998900431160" className="footer__link footer__link-tel">{res.tel}</a>
                                                </li>
                                                <li className="footer__item">
                                                    <a href="mailto: afemegroup@gmail.com" className="footer__link footer__link-email">{res.email}</a>
                                                </li>
                                                <li className="footer__item">
                                                    <a href="https://yandex.uz/maps/org/244577402097/?ll=72.356849%2C40.746957&z=15" className="footer__link footer__link-address" target={"_blank"} style={address}>{res.location}</a>
                                                </li>
                                            </ul>
                                        )
                                    })
                                }
                            </>
                        </section>
                        <section className="footer__holder">
                            <h3 className="footer__holder-title">{content[lang].social_networks}</h3>
                            <>
                                {
                                    useNetWorkData.map((resNetwork) => {
                                        return (
                                            <ul className="footer__list footer__list-three" key={v4()}>
                                                <li className="footer__item-th">
                                                    <a href={resNetwork.instagram} target={"_blank"} className="footer__link-th">
                                                        <Instagram />
                                                    </a>
                                                </li>
                                                <li className="footer__item-th">
                                                    <a href={resNetwork.telegram} target={"_blank"} className="footer__link-th">
                                                        <Telegram />
                                                    </a>
                                                </li>
                                            </ul>
                                        )
                                    })
                                }
                            </>
                        </section>
                    </section>
                </Container>
            </footer>
        </>
    )
}
export default Footer