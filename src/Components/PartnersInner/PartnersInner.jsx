// Import => React
import React from "react";

// Import => Img Component
import PartnersImg from "../../Assets/Img/partners-inner.png";

// Import => Component
import Container from "../Container/Container";

// Import => Style Component
import "../../Components/PartnersInner/PartnersInner.scss";

// Import useContext => Localization
import { useContext } from 'react';
import { Context } from '../../Context/LangContext';
import content from '../../Localization/Content';

function PartnersInner() {
    const { lang, setLang } = useContext(Context);

    return (
        <>

            <section className="partners-inner">
                <Container>
                    <div className="partners-inner__box">
                        <h3 className="partners-inner__title">{content[lang].partners_title}</h3>
                        <p className="partners-inner__desc">{content[lang].partners_descr}</p>
                        <img className="partners-inner__img" src={PartnersImg} alt="partners-img" />
                    </div>
                </Container>
            </section>

        </>
    )
}

export default PartnersInner