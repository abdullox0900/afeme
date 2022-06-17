// Import => React
import React from "react";
import { useEffect, useState } from "react";

// Import => Axios
import axios from "axios";

// Import => Components
import RealtorsCard from "../RealtorsCard/RealtorsCard";
import Container from "../Container/Container"
import Pogination from "../Pogination/Pogination";
import "../RealtorWrap/RealtorWrap.scss";

// Import useContext => Localization
import { useContext } from 'react';
import { Context } from '../../Context/LangContext';
import content from '../../Localization/Content';

function RealtorWrap() {

    const [reltorData, setReltorsData] = useState([]);

    const { lang, setLang } = useContext(Context);


    useEffect(() => {
        axios.get('https://ali98.uz/api/reltors').then(res => {
            const persons = res.data.data;
            setReltorsData(persons)
        })
    }, [])

    return (
        <>
            <Container>
                <div className="realtor-wrap">
                    <h2 className="realtor-wrap__title">{content[lang].reltor_title}</h2>
                    <div className="realtor-wrap__box">
                        <p className="realtor-wrap__dos"><span className="realtor-wrap__number">{reltorData.length}</span> {content[lang].reltor_lenght}</p>
                        <button className="realtor-wrap__btn">{content[lang].reltor_sort}</button>
                    </div>
                    <RealtorsCard />
                    <Pogination />
                </div>
            </Container>
        </>
    )
};

export default RealtorWrap;