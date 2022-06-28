// Import => React
import React, { useState, useEffect } from "react";

// Import => Component
import Container from "../Container/Container";

// Import => Style Component
import "../../Components/PartnersInner/PartnersInner.scss";

// Import => Axios
import axios from "axios";

function PartnersInner() {

    const [portData, setPortData] = useState([]);

    useEffect(() => {
        axios.get(`https://ali98.uz/api/partners`)
            .then(res => {
                const resdata = res.data;
                setPortData(resdata)
            })
    }, [])

    return (
        <>

            <section className="partners-inner">
                <Container>
                    {
                        portData.map(por => {
                            return (
                                <>
                                    <div className="partners-inner__box">
                                        <h3 className="partners-inner__title">{por.title_uz}</h3>
                                        <p className="partners-inner__desc">{por.body_uz}</p>
                                        <ul className="portners-inner__list">
                                            <li className="portners-inner__item">
                                                <a className="portners-innner__link" href={por.url}>
                                                    <img className="portners-inner__img" src={por.image} alt="img" width={80} height={80} />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            )
                        })
                    }
                </Container>
            </section>

        </>
    )
}

export default PartnersInner