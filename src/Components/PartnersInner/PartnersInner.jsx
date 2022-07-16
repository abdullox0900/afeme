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

let url = process.env.REACT_APP_URL;

function PartnersInner() {
    const [portData, setPortData] = useState([]);
    const [portDataImg, setPortDataImg] = useState([]);
    const [langData, setLangData] = useState();
    const [langDataBody, setLangDataBody] = useState();
    const { lang, setLang } = useContext(LangContext);

    useEffect(() => {
        axios.get(`${url}partners`).then((res) => {
            const resdata = res.data[0];
            setPortData(resdata);
        });
        axios.get(`${url}partnericons`).then((res) => {
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

    return (
        <>
            <section className="partners-inner">
                <Container>
                    <div className="partners-inner__box">
                        <h3 className="partners-inner__title">Bizning Hamkorlar</h3>
                        <p className="partners-inner__desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium sapiente quaerat reiciendis quas numquam a assumenda unde excepturi repellat possimus.</p>
                                    <img
                                        className="portners-inner__img"
                                        src={ImgPortnor}
                                        alt="img"
                                        width={750}
                                        height={300}
                                    />
                    </div>
                </Container>
            </section>
        </>
    )

}
export default PartnersInner;
