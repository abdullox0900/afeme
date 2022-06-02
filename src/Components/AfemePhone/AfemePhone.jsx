import React from "react"
import PlayStore from "../../Assets/Img/downloadPlayStore.png";
import Container from "../Container/Container";
import "./AfemePhone.scss";

function AfemePhone() {

    return (
        <Container>
            <div className="afemePhone">
                <div className="afemePhone__content">
                    <h3 className="afemePhone__title"><span>Afeme</span> endi har doim qo'lingizda bo'ladi</h3>
                    <p className="afemePhone__text">Ilovada siz uy-joy kommunal xizmatlarini boshqarishingiz va jarayonni kuzatishingiz mumkin: biz barcha muhim narsalar haqida xabar beramiz.</p>
                    <a href="#"><img src={PlayStore} alt="" /></a>
                </div>
            </div>
        </Container>
    )
}
export default AfemePhone;