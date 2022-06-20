// Import => React
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

// Import => Components
import Container from "../../Components/Container/Container";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Liked from "../../Components/Liked/Liked";
import Personal from "../../Components/Personal/Personal";
import Posts from "../../Components/Posts/Posts";
import Settings from "../../Components/Settings/Settings";
import CardImg2 from '../../Assets/Img/card_img2.jpg';
import { Cards } from '../../Components/Card/Card';

// Import => Modul Style Component
import style from './Cabinet.module.scss'

function PersonalCabinet() {

    const [data, setData] = useState(null)
    const [dataError, setDataError] = useState(false)
    const URL = 'https://ali98.uz/api/user/169';
    useEffect(() => {
        function getData() {
            const result = axios.get(URL)
            .then((response) => {
                let dataStatus = response.data
                if (dataStatus.status == true || dataStatus.status == 200) {
                    let newData = [];
                    newData.push(dataStatus.data);
                    setData(newData);
                    console.log(data);
                } else {
                    setDataError(true)
                }
            })
            .catch((error) => {
                setDataError(true)
                console.log(error);
            })
        }
        getData();
    }, []);

    const noPost = (
        <p>Siz birorta ham e'lon joylashtirmadingiz</p>
    )

    return (
        <>
            <Container>
                <Header />
                <div className={style.wrapper}>
                    <div className={style.main}>
                        <div className={style.btng}>
                            <NavLink to={"/posts"}>
                                <button className={style.active}> Elonlarim </button>
                            </NavLink>
                            <NavLink to={"/liked"} >
                                <button> Yoqtirganlarim </button>
                            </NavLink>
                            <NavLink to={"/settings"} >
                                <button> Sozlamalar </button>
                            </NavLink>
                        </div>
                        <h1 style={{color: '#0468ff',}}>El’onlarim</h1>
                        <div style={{display:'flex', flexWrap:'wrap', gap:'20px', justifyContent:'center'}}>
                            {data?.posts && data?.posts.length > 0 ? data?.map((row) => (
                                <Cards data={row} editDelete={true} loveBtn={false}/>

                            )) : noPost}
                        </div>
                    </div>
                    <Personal />
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default PersonalCabinet;