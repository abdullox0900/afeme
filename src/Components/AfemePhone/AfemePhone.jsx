// Import => React
import React, { useContext } from "react"

// Import => Components
import PlayStore from "../../Assets/Img/downloadPlayStore.png";
import afemePhone from "../../Assets/Img/afemePhone.png";
import Logo from '../../Lib/Svg/logo'
import { Container } from "@mui/material";

// Import => Style Component
import "./AfemePhone.scss";

// Import useContext => Localization
import { Context } from '../../Context/LangContext';
import content from '../../Localization/Content';

function AfemePhone() {
    const { lang, setLang } = useContext(Context);

    return (
        <div className="afemePhone">
            <Container className="container">
                <div className="afemePhone__content">
                    <h3 className="afemePhone__title"><span>Afeme </span>{content[lang].afemePhoneTitle}</h3>
                    <p className="afemePhone__text">{content[lang].afemePhonetitleDescr}</p>
                    <a href="#"><img src={PlayStore} alt="" /></a>
                </div>
                <img className="afemePhone__img-phone" src={afemePhone} alt="" />
                <span className="afemePhone__bubbles bubbles1"><Logo width="80" height="80"/></span>
                <span className="afemePhone__bubbles bubbles2"></span>
                <span className="afemePhone__bubbles bubbles3"></span>
                <span className="afemePhone__bubbles bubbles4"></span>
            </Container>
        </div>
    )
}
export default AfemePhone;