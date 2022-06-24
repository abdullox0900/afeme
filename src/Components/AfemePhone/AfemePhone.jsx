// Import => React
import React from "react"

// Import => Components
import PlayStore from "../../Assets/Img/downloadPlayStore.png";
import afemePhone from "../../Assets/Img/afemePhone.png";
import Logo from '../../Lib/Svg/logo'
import Container from "../Container/Container";

// Import => Style Component
import "./AfemePhone.scss";

function AfemePhone() {

    return (
        <div className="afemePhone">
            <Container>
                <div className="afemePhone__content">
                    <h3 className="afemePhone__title"><span>Afeme</span> endi har doim qo'lingizda bo'ladi</h3>
                    <p className="afemePhone__text">Ilovada siz uy-joy kommunal xizmatlarini boshqarishingiz va jarayonni kuzatishingiz mumkin: biz barcha muhim narsalar haqida xabar beramiz.</p>
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