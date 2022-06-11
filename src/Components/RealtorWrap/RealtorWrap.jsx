import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
// IMPORT COMPONENTS
import RealtorsCard from "../RealtorsCard/RealtorsCard";
import Container from "../Container/Container"
import Pogination from "../Pogination/Pogination";

// IMPORT IMG
import "../RealtorWrap/RealtorWrap.scss";

function RealtorWrap() {

    const [reltorData, setReltorsData] = useState([])

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
                    <h2 className="realtor-wrap__title">Rieltorlar katalogi</h2>
                    <div className="realtor-wrap__box">
                        <p className="realtor-wrap__dos"><span className="realtor-wrap__number">{reltorData.length}</span> ta rieltor topildi</p>
                        <button className="realtor-wrap__btn">Sartirovka kilish</button>
                    </div>
                    <RealtorsCard />
                    <Pogination />
                </div>
            </Container>
        </>
    )
};

export default RealtorWrap;