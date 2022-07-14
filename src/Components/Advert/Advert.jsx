import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { NavLink as Link, useSearchParams, useParams } from "react-router-dom";
import { Box, IconButton, Tooltip, Zoom } from "@mui/material";

// Import => Components
import { Context as LangContext } from "../../Context/LangContext";
import { CurrencyContext } from "../../Context/CurrencyContext";
import content from "../../Localization/Content";
import Container from "../Container/Container";
import Spinner from "../Spinner/Spinner";
import AdvertGallery from "../AdvertGallery/AdvertGallery";
import CardTools from "../../Utils/cardTools";
import AdvertMap from "../AdvertMap/AdvertMap";
import ApiError from "../ApiError/ApiError";
import OfflineError from "../OfflineError/OfflineError";
import LoveBtn from "../LoveBtn/LoveBtn";

// Import => Components Img
import callIcon from "../../Assets/Img/call.svg";
import messageIcon from "../../Assets/Img/message.svg";
import ShareIcon from "../../Lib/Svg/share";
import EyeIcon from "../../Lib/Svg/eye";
import DownloadIcon from "../../Lib/Svg/download";
import PrintIcon from "../../Lib/Svg/print";
import ExclamationIcon from "../../Lib/Svg/exclamation";
import arrowRight from "../../Assets/Img/arrow-right.svg";

// Import => Style Component
import "./Advert.scss";

function Advert() {
    const { postID } = useParams();
    const [data, setData] = useState([]);
    const [dataError, setDataError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const URL = `https://ali98.uz/api/post/${postID}`;

    const { lang, setLang } = useContext(LangContext);
    const { currency, setCurrency } = useContext(CurrencyContext);
    const [price, setPrice] = useState("");
    const [advertTitle, setAdvertTitle] = useState("");
    const [advertLink, setAdvertLink] = useState("");
    const [advertType, setAdvertType] = useState("");
    const [advertTypeImg, setAdvertTypeImg] = useState("");
    const [advertTypeLink, setAdvertTypeLink] = useState("");
    const [advertAddress, setAdvertAddress] = useState("");
    const [advertCity, setAdvertCity] = useState("");

    if (data) {
        CardTools(
            data,
            lang,
            currency,
            setPrice,
            setAdvertTitle,
            setAdvertLink,
            setAdvertType,
            setAdvertTypeImg,
            setAdvertTypeLink,
            setAdvertAddress,
            setAdvertCity
        );
    }

    useEffect(() => {
        setIsLoading(true);
        const result = axios
            .get(URL)
            .then((response) => {
                let dataStatus = response.data.status;
                if (dataStatus == true || dataStatus == 200) {
                    setData(response.data.data);
                    console.log(response);
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
    }, []);

    const shareData = {
        title: "Afeme",
        text: "Uy sotiladi",
        url: "http://localhost:3000/advert/118",
    };

    if (isLoading) {
        return (
            <div className="loadingSpinner">
                <Spinner />
            </div>
        );
    } else if (data.hasOwnProperty("id") && !dataError) {
        let adOwner = data.user;
        let ownerPage = `/reltorcob/${adOwner.id}`;
        let ownerChat = `/chat/${adOwner.id}`;
        return (
            <Box className="advert">
                <Container>
                    <div className="advert__blog">
                        <Box className="advert__content">
                            <Box className="advert__info">
                                <div className="advert__about__header">
                                    <div className="advert__title">
                                        <h2 className="advert__title__content">
                                            {advertTitle}
                                        </h2>
                                        <Link
                                            to={advertTypeLink}
                                            className="advert__houseType"
                                        >
                                            <img
                                                src={advertTypeImg}
                                                alt=""
                                                className="house__type__icon"
                                            />
                                            <p className="house__type__name">
                                                {advertType}
                                            </p>
                                        </Link>
                                    </div>
                                    <Box className="advert__prices">
                                        <p className="advertPrice">{price}</p>
                                    </Box>
                                </div>
                                <Box className="advert__address__blog">
                                    <p className="advert__address">
                                        {advertAddress}, {advertCity},{" "}
                                        {data?.street} {content[lang].street}
                                        <img
                                            src={arrowRight}
                                            alt=""
                                            className="advert__address__arrow"
                                        />
                                    </p>
                                    <a href="#advertMap" className="wiewInMap">
                                        {content[lang].viewInMap}
                                    </a>
                                </Box>
                                <Box className="advert__items">
                                    <div className="advert__buttons">
                                        <LoveBtn advertID={data.id} />
                                        <Tooltip
                                            title="E'lonni Ulashish"
                                            TransitionComponent={Zoom}
                                            arrow
                                        >
                                            <IconButton
                                                variant="contained"
                                                color="primary"
                                                className="advert__btn advert__shareBtn"
                                                onClick={() =>
                                                    navigator.share(shareData)
                                                }
                                                sx={{ mx: 1 }}
                                            >
                                                <ShareIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip
                                            title="Yuklab olish (PDF)"
                                            TransitionComponent={Zoom}
                                            arrow
                                            onClick={() => window.print()}
                                        >
                                            <IconButton
                                                variant="contained"
                                                color="primary"
                                                className="advert__btn advert__dwnBtn"
                                                sx={{ mr: 1 }}
                                            >
                                                <DownloadIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip
                                            title="Printerga chiqarish"
                                            TransitionComponent={Zoom}
                                            arrow
                                        >
                                            <IconButton
                                                variant="contained"
                                                color="primary"
                                                className="advert__btn advert__printBtn"
                                                sx={{ mr: 1 }}
                                                onClick={() => window.print()}
                                            >
                                                <PrintIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip
                                            title="Xabar berish"
                                            TransitionComponent={Zoom}
                                            arrow
                                        >
                                            <Link to="/help">
                                                <IconButton
                                                    variant="contained"
                                                    color="primary"
                                                    className="advert__btn advert__reportBtn"
                                                    sx={{ mr: 1 }}
                                                >
                                                    <ExclamationIcon />
                                                </IconButton>
                                            </Link>
                                        </Tooltip>
                                    </div>
                                    <Box
                                        className="advert__view"
                                        sx={{ ml: 1 }}
                                    >
                                        <EyeIcon />
                                        <div className="advert__view__count">
                                            {data.view}
                                        </div>
                                    </Box>
                                </Box>
                            </Box>

                            <AdvertGallery data={data} isLoading={isLoading} />

                            <Box className="advert__description">
                                <h5 className="descr__title">
                                    {content[lang].description}
                                </h5>
                                <p className="descr__text">
                                    {data?.description}
                                </p>
                                <Link to={ownerChat}>
                                    <IconButton
                                        variant="contained"
                                        className="sellerProfile__btn sellerProfile__msg"
                                    >
                                        <img src={messageIcon} alt="" />
                                        <p className="callBtn__text">
                                            {content[lang].sendMessageBtn}
                                        </p>
                                    </IconButton>
                                </Link>
                            </Box>

                            <div id="advertMap">
                                <AdvertMap currentAdvert={data} />
                            </div>
                        </Box>

                        <Box className="advert__panel">
                            <Box className="sellerProfile">
                                <Box className="sellerProfile__header">
                                    <Link to={ownerPage}>
                                        <img
                                            src={
                                                adOwner.image
                                                    ? adOwner.image
                                                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU"
                                            }
                                            alt=""
                                            className="sellerProfile__img"
                                        />
                                    </Link>
                                    <Box className="sellerProfile__content">
                                        <p className="sellerProfile__title">
                                            {adOwner.name} {adOwner.last_name}
                                        </p>
                                        <span className="sellerProfile__type">
                                            {adOwner.user_type}
                                        </span>
                                    </Box>
                                </Box>
                                <Box className="sellerProfile__actions">
                                    <Link to={ownerPage}>
                                        <IconButton
                                            variant="contained"
                                            className="sellerProfile__btn sellerProfile__call"
                                        >
                                            <img src={callIcon} alt="" />
                                            <p className="callBtn__text">
                                                {content[lang].contactBtn}
                                            </p>
                                        </IconButton>
                                    </Link>
                                    <Link to={ownerChat}>
                                        <IconButton
                                            variant="contained"
                                            className="sellerProfile__btn sellerProfile__msg"
                                        >
                                            <img src={messageIcon} alt="" />
                                            <p className="callBtn__text">
                                                {content[lang].sendMessageBtn}
                                            </p>
                                        </IconButton>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </div>
                </Container>
            </Box>
        );
    } else {
        return (
            <div className="errorBlog">
                <ApiError />
            </div>
        );
    }
}
export default Advert;
