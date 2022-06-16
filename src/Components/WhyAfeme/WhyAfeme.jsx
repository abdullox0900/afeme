// Import => React
import React from "react";

// Import => Mui
import Button from '@mui/material/Button';

// Import => Components
import "../WhyAfeme/WhyAfeme.scss";
import IlusImgTelegram from "../../Assets/Img/illustration-telegram-bot.svg";
import IlusImgApp from "../../Assets/Img/illustration-app.svg";
import IlusImgMap from "../../Assets/Img/illustration-3-map.svg";

function WhyAfeme() {
    return (
        <>
            <section className="why-section">
                <div className="container-why">
                    <h2 className="why__title">Nima uchun Afeme?</h2>

                    <ul className="why__list">
                        <li className="why__item">
                            <img className="why__img" src={IlusImgTelegram} alt="telegram-img" />
                            <h3 className="why__item-title">AFEME BOTI VA KANALI</h3>
                            <span className="why__line-l"></span>
                            <p className="why__desc">Telegram bot va kanalimizni ishlatib koʻring</p>
                            <Button className="why__button" variant="contained">Contained</Button>
                        </li>
                        <li className="why__item">
                            <img className="why__img" src={IlusImgApp} alt="telegram-img" />
                            <h3 className="why__item-title">AFEME BOTI VA KANALI</h3>
                            <span className="why__line-l"></span>
                            <p className="why__desc">Telegram bot va kanalimizni ishlatib koʻring</p>
                            <Button className="why__button" variant="contained">Contained</Button>
                        </li>
                        <li className="why__item">
                            <img className="why__img" src={IlusImgMap} alt="telegram-img" />
                            <h3 className="why__item-title">AFEME BOTI VA KANALI</h3>
                            <span className="why__line-l"></span>
                            <p className="why__desc">Telegram bot va kanalimizni ishlatib koʻring</p>
                            <Button className="why__button" variant="contained">Contained</Button>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default WhyAfeme;