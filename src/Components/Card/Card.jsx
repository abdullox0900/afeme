// Import => Reactl
import React, { useState, useEffect, useContext } from "react";
import { NavLink as Redirect } from "react-router-dom";

// Import => Mui
import { Box, Card, CardMedia, Typography, CardContent, CardActions, IconButton, } from "@mui/material";

// Import => Components
import LoveBtn from "../LoveBtn/LoveBtn";
import LoveIcon from "../../Lib/Svg/love";
import LocationIcon from "../../Lib/Svg/location";
import DeleteIcon from "../../Lib/Svg/delete";
import EditIcon from "../../Lib/Svg/edit";

import CardTools from "../../Utils/cardTools";
import { CurrencyContext } from "../../Context/CurrencyContext";
import { Context as LangContext } from "../../Context/LangContext";
import { UserContext } from "../../Context/UserContext";
import "./Card.scss";
import CardImg from "../../Assets/Img/card_img4.jpg";
import { logRoles } from "@testing-library/react";

const cardControls = (data) => (
    <>
        <IconButton
            variant="outlined"
            color="error"
            className="cardControls cardDelete"
            sx={{ mr: 1.5 }}
        >
            <DeleteIcon />
        </IconButton>
        <IconButton
            variant="solid"
            color="primary"
            className="cardControls cardEdit"
        >
            <EditIcon />
        </IconButton>
    </>
);

function Cards({ data, isLoading, loveBtn = true, editDelete = false }) {

    const { lang, setLang } = useContext(LangContext);
    const { currency, setCurrency } = useContext(CurrencyContext);
    const { isUser, setIsUser } = useContext(UserContext);

    const [price, setPrice] = useState("");
    const [advertTitle, setAdvertTitle] = useState("");
    const [advertLink, setAdvertLink] = useState("");
    const [advertType, setAdvertType] = useState("");
    const [advertTypeImg, setAdvertTypeImg] = useState("");
    const [advertAddress, setAdvertAddress] = useState("");
    const [advertCity, setAdvertCity] = useState("");

    CardTools( data, lang, currency, setPrice, setAdvertTitle, setAdvertLink, setAdvertType, setAdvertTypeImg, setAdvertAddress, setAdvertCity );

    return (
        <Card sx={{ maxWidth: 300 }} className="card">
            <Redirect to={advertLink}>
                <CardMedia
                    component="img"
                    alt="Card img"
                    height="140"
                    className="card__img"
                    image={data?.image.length > 0 ? data?.image[0]?.url : CardImg}
                />
            </Redirect>
            <Box className="card__content">
                <CardContent className="card__header">
                    <Typography
                        variant="body1"
                        component="div"
                        className="house__type"
                    >
                        <img
                            src={advertTypeImg}
                            alt=""
                            className="house__type__icon"
                            onError={(e) => {
                                e.target.style.display = "none";
                            }}
                        />
                        {advertType}
                    </Typography>
                    <Typography variant="body2" className="house__prices">
                        <span className="house__price">{price}</span>
                    </Typography>
                </CardContent>
                <CardContent className="card__main">
                    <Redirect to={advertLink} className="card__title">
                        {advertTitle}
                    </Redirect>
                </CardContent>
                <CardActions className="card__footer">
                    <Typography className="house__address__bar">
                        <LocationIcon className="card__location" />{" "}
                        <span className="house__address">{advertAddress}</span>
                    </Typography>
                    <div className="card__actions">
                        {loveBtn ? <LoveBtn advertID={data?.id} /> : ""}
                        {editDelete ? cardControls(data) : ""}
                    </div>
                </CardActions>
            </Box>
        </Card>
    );
}

function FullCard({ data, cardData, dataError }) {
    const { lang, setLang } = useContext(LangContext);
    const { currency, setCurrency } = useContext(CurrencyContext);
    const [price, setPrice] = useState("");
    const [advertTitle, setAdvertTitle] = useState("");
    const [advertLink, setAdvertLink] = useState("");
    const [advertType, setAdvertType] = useState("");
    const [advertAddress, setAdvertAddress] = useState("");

    CardTools(
        data,
        dataError,
        lang,
        currency,
        price,
        advertTitle,
        advertLink,
        advertType,
        advertAddress,
        setPrice,
        setAdvertTitle,
        setAdvertLink,
        setAdvertType,
        setAdvertAddress
    );

    return (
        <Card sx={{}} className="fullCard">
            <Redirect to={advertLink}>
                <CardMedia
                    className="fullCard__img"
                    component="img"
                    alt="Card img"
                    image={cardData.houseImg}
                />
            </Redirect>
            <Box className="card__content">
                <CardContent className="card__header">
                    <div className="card__header__items">
                        <Redirect to={advertLink} className="card__title">
                            {advertTitle}
                        </Redirect>
                        <Typography
                            variant="body1"
                            component="div"
                            className="house__type"
                        >
                            {advertType}
                        </Typography>
                    </div>
                    <Typography variant="body2" className="house__prices">
                        <span className="house__price">{price}</span>
                    </Typography>
                </CardContent>
                <CardContent className="card__main">
                    <p className="card__desc">{data?.description}</p>
                </CardContent>
                <CardActions className="card__footer">
                    <div className="fullCard__foot">
                        <Typography className="house__address__bar">
                            <LocationIcon className="card__location" />{" "}
                            <span className="house__address">
                                {advertAddress}
                            </span>
                        </Typography>
                    </div>
                    <LoveBtn />
                </CardActions>
            </Box>
        </Card>
    );
}

function Fcards({ data }) {
    return (
        <Card sx={{ width: 375 }} className="card">
            <Redirect to={data.houseUrl}>
                <CardMedia
                    component="img"
                    alt="Card img"
                    height="140"
                    image={data.houseImg}
                />
            </Redirect>
            <Box className="card__content">
                <CardContent className="card__header">
                    <Typography
                        variant="body1"
                        component="div"
                        className="house__type"
                    >
                        {data.houseType}
                    </Typography>
                    <Typography variant="body2" className="house__prices">
                        <span className="house__price">{data.housePrice}</span>{" "}
                        /month
                    </Typography>
                </CardContent>
                <CardContent className="card__main">
                    <Redirect to={data.houseUrl} className="card__title">
                        {data.houseTitle}
                    </Redirect>
                </CardContent>
                <CardActions className="card__footer">
                    <Typography className="house__address__bar">
                        <LocationIcon className="card__location" />{" "}
                        <span className="house__address">
                            {data.houseAddress}
                        </span>
                    </Typography>
                    <IconButton color="error" className="card__btn card__love">
                        <LoveIcon className="card__love-icon" />
                    </IconButton>
                </CardActions>
            </Box>
        </Card>
    );
}

export { Cards, FullCard, Fcards };
