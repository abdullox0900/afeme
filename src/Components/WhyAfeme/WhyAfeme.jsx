import React from "react";
import Button from '@mui/material/Button';
import IlusImgTelegram from "../../Assets/Img/illustration-telegram-bot.svg";
import IlusImgApp from "../../Assets/Img/illustration-app.svg";
import IlusImgMap from "../../Assets/Img/illustration-3-map.svg";

function WhyAfeme() {
    return (
        <>
            <section className="why-section">
                <h2 className="why__title">Nima uchun Afeme?</h2>

                <ul className="why__list">
                    <li className="why__item">
                        <img className="why__img" src={ IlusImgTelegram } alt="telegram-img" />
                        <h3 className="why__item-title">AFEME BOTI VA KANALI</h3>
                        <p className="why__desc">Telegram bot va kanalimizni ishlatib koʻring</p>
                        <Button className="why__button" variant="contained">Contained</Button>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default WhyAfeme;