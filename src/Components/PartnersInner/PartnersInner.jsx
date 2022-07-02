// Import => React
import React, { useState, useEffect, useContext } from "react";

// Import => Component
import Container from "../Container/Container";
import { Context as LangContext } from "../../Context/LangContext";

// Import => Img Component
import ImgPortnor from "../../Assets/Img/port-img.png";

// Import => Style Component
import "../../Components/PartnersInner/PartnersInner.scss";

// Import => Axios
import axios from "axios";

function PartnersInner() {
    const [portData, setPortData] = useState([]);
    const [portDataImg, setPortDataImg] = useState([]);
    const [langData, setLangData] = useState();
    const [langDataBody, setLangDataBody] = useState();
    const { lang, setLang } = useContext(LangContext);

    useEffect(() => {
        axios.get(`https://ali98.uz/api/partners`).then((res) => {
            const resdata = res.data[0];
            setPortData(resdata);
        });
        axios.get(`https://ali98.uz/api/partnericons`).then((res) => {
            const resdataImg = res.data;
            setPortDataImg(resdataImg);
        });
    }, []);

    useEffect(() => {
        if (lang == "uz") {
            setLangData(portData?.title_uz);
            setLangDataBody(portData?.body_uz);
        } else if (lang == "ru") {
            setLangData(portData?.title_ru);
            setLangDataBody(portData?.body_ru);
        } else if (lang == "en") {
            setLangData(portData?.title_en);
            setLangDataBody(portData?.body_en);
        }
    }, [lang]);

    return;
    <>
        <section className="partners-inner">
            <Container>
                <div className="partners-inner__box">
                    <h3 className="partners-inner__title">{langData}</h3>
                    <p className="partners-inner__desc"> {langDataBody}</p>
                    <ul className="portners-inner__list">
                        {portDataImg.map((img) => {
                            return (
                                <>
                                    <li className="portners-inner__item">
                                        <a
                                            className="portners-innner__link"
                                            href={img.url}
                                        >
                                            <img
                                                className="portners-inner__img"
                                                src={img.icon}
                                                alt="img"
                                                width={150}
                                                height={100}
                                            />
                                        </a>
                                    </li>
                                </>
                            );
                        })}
                    </ul>
                </div>
            </Container>
        </section>
    </>;
}
export default PartnersInner;
