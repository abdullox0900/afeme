import React, { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import { useSearchParams, useParams } from "react-router-dom";
import { Box, IconButton } from "@mui/material";

// Import => Components
import Container from "../Container/Container";
import Spinner from "../Spinner/Spinner"
import AdvertGallery from "../AdvertGallery/AdvertGallery";
import { Cards } from "../../Components/Card/Card";
import ApiError from "../ApiError/ApiError";
import OfflineError from "../OfflineError/OfflineError";
import LoveBtn from "../LoveBtn/LoveBtn";

// Import => Components Img
import Person from "../../Assets/Img/realtors1.jpg";
import callIcon from "../../Assets/Img/call.svg";
import AdvertImg from "../../Assets/Img/advertImg.jpg";
import messageIcon from "../../Assets/Img/message.svg";
import ShareIcon from "../../Lib/Svg/share";
import EyeIcon from "../../Lib/Svg/eye";

// Import => Style Component
import "./Advert.scss";

function Advert() {

    const { postID } = useParams();
    const [data, setData] = useState([]);
    const [renderData, setRenderData] = useState(false);
    const [dataError, setDataError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const URL = `https://ali98.uz/api/post/${postID}`;

    useEffect(() => {
        const result = axios
            .get(URL)
            .then((response) => {
                let dataStatus = response.data;
                if (dataStatus.status == true || dataStatus.status == 200) {
                    setData(response.data.data);
                    console.log(dataStatus);
                } else {
                    setDataError(true);
                }
            })
            .catch((error) => {
                setDataError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [renderData]);
    console.log(data);

    

    if (isLoading) {
        return <Spinner />;

    } else if (data.hasOwnProperty("id") && !dataError) {

        const shareData = {
            title: 'Afeme',
            text: 'Uy sotiladi',
            url: 'http://localhost:3000/advert/118'
        }

        return (
            <Box className="advert">
                <Container>
                    <div className="advert__blog">
                        <Box className="advert__content">

                            <Box className="advert__info">
                                <Box className="advert__about">
                                    <h2 className="advert__title">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                                    <Box className="advert__address__blog">
                                        <p className="advert__address">Andijon, Buloqboshi, Uchtepa ko'chasi</p>
                                        <a href="#" className="wiewInMap">Kartadan ko'rish</a >
                                    </Box>
                                    <Box className="advert__items">
                                        <div>
                                            <IconButton
                                                variant="contained"
                                                color="primary"
                                                className="advert__shareBtn"
                                            >
                                                <ShareIcon onClick={navigator.share(shareData)}/>
                                            </IconButton>
                                        </div>
                                        <div className="advert__view">
                                            <IconButton
                                            variant="contained"
                                            color="primary"
                                            className="advert__shareBtn">
                                                <EyeIcon /> 20
                                            </IconButton>
                                        </div>
                                    </Box>
                                </Box>
                                <Box className="advert__actions">
                                    <span className="advert__houseType">Kvartira</span>
                                    <LoveBtn advertID={data.id}/>
                                </Box>
                            </Box>

                            <AdvertGallery data={data} isLoading={isLoading} />

                            <Box className="advert__description">
                                <h5 className="descr__title">Tavsif</h5>
                                <p className="descr__text">
                                    Ijara <br /> Yangi bino <br /> Yakkasaroy
                                    tumani <br /> Sobiq zavod <br /> Belgilangan
                                    karvon <br /> 4/2/9 <br /> mebel va maishiy
                                    texnika <br /> 100 m2 <br /> Uzoq muddatli
                                    oila. <br /> 1300 <br /> +998901207800
                                    Qo'shimcha ma'lumotlar <br /> dushanbadan
                                    yakshanbagacha <br /> 10:00 dan 18:0 gacha
                                </p>
                            </Box>
                        </Box>
                        <Box className="advert__panel">
                            <Box className="sellerProfile">
                                <Box className="advert__prices">
                                    <p className="advertPrice">$999,999.00</p>
                                </Box>
                                <Box className="sellerProfile__header">
                                    <img
                                        src={Person}
                                        alt=""
                                        className="sellerProfile__img"
                                    />
                                    <Box className="sellerProfile__content">
                                        <a
                                            href="#"
                                            className="sellerProfile__title"
                                        >
                                            Abdusalomov Abdullox
                                        </a>
                                        <span className="sellerProfile__type">
                                            Sotuvchi
                                        </span>
                                    </Box>
                                </Box>
                                <Box className="sellerProfile__actions">
                                    <IconButton
                                        variant="contained"
                                        className="sellerProfile__btn sellerProfile__call"
                                    >
                                        <img src={callIcon} alt="" />
                                    </IconButton>
                                    <IconButton
                                        variant="contained"
                                        className="sellerProfile__btn sellerProfile__msg"
                                    >
                                        <img src={messageIcon} alt="" />
                                    </IconButton>
                                </Box>
                            </Box>
                            <iframe
                                className="iframe__map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6608322062507!2d72.3573832156414!3d40.74748804338021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced630e0f4795%3A0xf72460c2369068a8!2sDigital%20City!5e0!3m2!1suz!2s!4v1653553961195!5m2!1suz!2s"
                                width={"100%"}
                                height={400}
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </Box>
                    </div>
                </Container>
            </Box>
        );
    } else {
        return (
            <div
                className="errorBlog"
                style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    margin: "40px 0",
                }}
            >
                <ApiError />
            </div>
        );
    }
}
export default Advert;
