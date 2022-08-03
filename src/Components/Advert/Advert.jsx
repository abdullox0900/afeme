import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { NavLink as Link, useParams } from "react-router-dom";
import { Box, IconButton, Tooltip, Zoom } from "@mui/material";

// Import => Components
import { Context as LangContext } from "../../Context/LangContext";
import content from "../../Localization/Content";
import Container from "../Container/Container";
import Spinner from "../Spinner/Spinner";
import AdvertGallery from "../AdvertGallery/AdvertGallery";
import CardTools from "../../Utils/cardTools";
import AdvertMap from "../AdvertMap/AdvertMap";
import ApiError from "../ApiError/ApiError";
import LoveBtn from "../LoveBtn/LoveBtn";
import UserContactButtons from "../UserContactButtons/UserContactButtons";

// Import => Components Img
import ShareIcon from "../../Lib/Svg/share";
import EyeIcon from "../../Lib/Svg/eye";
import DownloadIcon from "../../Lib/Svg/download";
import PrintIcon from "../../Lib/Svg/print";
import ExclamationIcon from "../../Lib/Svg/exclamation";
import arrowRight from "../../Assets/Img/arrow-right.svg";

// Import => Style Component
import "./Advert.scss";
let url = process.env.REACT_APP_URL;

function Advert() {
    const { postID } = useParams();
    const [data, setData] = useState([]);
    const [dataError, setDataError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { lang, setLang } = useContext(LangContext);

    const {
        price,
        advertTitle,
        advertLink,
        advertType,
        advertTypeLink,
        advertTypeImg,
        advertAddress,
    } = CardTools(data);

    useEffect(() => {
        setIsLoading(true);
        const result = axios
            .get(`${url}post/${postID}`)
            .then((response) => {
                let dataStatus = response.data.status;
                if (dataStatus == true || dataStatus == 200) {
                    setData(response.data.data);
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
        url: window.location.href,
    };

    let adOwner = data.user;
    let ownerPage = `/reltorcob/${adOwner?.id}`;

    function printAdvert() {
        // var content = document.querySelector(".advert");
        // document.createElement('link');
        // // link.href =
        // var pri = document.querySelector("#advertPrint").contentWindow;
        // pri.document.open();
        // pri.document.write(content.innerHTML);
        // pri.document.close();
        // pri.focus();
        window.print();
    }

    if (isLoading) {
        return (
            <div className="loadingSpinner">
                <Spinner />
            </div>
        );
    } else if (data.hasOwnProperty("id") && !dataError) {
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
                                        {advertAddress}, {data?.street}{" "}
                                        {content[lang].street}
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
                                            title="Xabar berish"
                                            TransitionComponent={Zoom}
                                            arrow
                                        >
                                            <Link to="/help">
                                                <IconButton
                                                    variant="contained"
                                                    color="primary"
                                                    className="advert__btn advert__reportBtn"
                                                    sx={{ ml: 1 }}
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

                            {data.hasOwnProperty("image") ? (
                                <AdvertGallery
                                    data={data}
                                    isLoading={isLoading}
                                />
                            ) : (
                                ""
                            )}

                            <Box className="advert__description">
                                <h5 className="descr__title">
                                    {content[lang].description}
                                </h5>
                                <p className="descr__text">
                                    {data?.description}
                                </p>
                            </Box>

                            <div id="advertMap">
                                <AdvertMap advert={data} zoom={12} />
                            </div>
                        </Box>

                        <Box className="advert__panel">
                            {adOwner ? (
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
                                            <Link
                                                to={ownerPage}
                                                className="sellerProfile__title"
                                            >
                                                {adOwner.name}{" "}
                                                {adOwner.last_name}
                                            </Link>
                                            <span className="sellerProfile__type">
                                                {adOwner.user_type}
                                            </span>
                                        </Box>
                                    </Box>
                                    <Box className="sellerProfile__actions">
                                        <UserContactButtons data={adOwner} />
                                    </Box>
                                </Box>
                            ) : (
                                ""
                            )}
                            {
                                <Box className="more">
                                    <p>
                                        {content[lang].advert_id}//{data?.id}
                                    </p>
                                    <p>
                                        {lang == "uz"
                                            ? data?.htype_id.name_uz
                                            : lang == "ru"
                                            ? data?.htype_id.name_ru
                                            : data?.htype_id.name_en}{" "}
                                        {content[lang].advert_areas}
                                    </p>
                                    <div className="areas">
                                        <p>
                                            {content[lang].advert_kitchen}:{" "}
                                            {data?.kitchen_area}
                                        </p>
                                        <p>
                                            {content[lang].advert_living}:{" "}
                                            {data?.living_area}
                                        </p>
                                        <p>
                                            {content[lang].advert_total}:{" "}
                                            {data?.total_area}{" "}
                                            {data?.total_area_type}
                                        </p>
                                    </div>
                                    <p>
                                        {lang == "uz"
                                            ? data?.htype_id.name_uz
                                            : lang == "ru"
                                            ? data?.htype_id.name_ru
                                            : data?.htype_id.name_en}
                                        : {data?.flat}{" "}
                                        {content[lang].advert_flat}{" "}
                                        {data?.floor}{" "}
                                        {content[lang].advert_floor}
                                    </p>
                                    <p>
                                        {content[lang].advert_date}:{" "}
                                        {data?.date} {content[lang].advert_year}{" "}
                                    </p>
                                    <p>
                                        {content[lang].advert_materials}:{" "}
                                        {lang == "uz"
                                            ? data?.material_id.name_uz
                                            : lang == "ru"
                                            ? data?.material_id.name_ru
                                            : data?.material_id.name_en}{" "}
                                    </p>
                                    <p>
                                        {content[lang].advert_repairs}:{" "}
                                        {lang == "uz"
                                            ? data?.repair_id.name_uz
                                            : lang == "ru"
                                            ? data?.repair_id.name_ru
                                            : data?.repair_id.name_en}{" "}
                                    </p>
                                </Box>
                            }
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
