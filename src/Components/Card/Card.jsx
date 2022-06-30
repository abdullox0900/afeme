// Import => Reactl
import React, { useState, useEffect, useContext } from "react";
import { NavLink as Redirect } from "react-router-dom";

// Import => Mui
import {
    Box,
    Card,
    CardMedia,
    Typography,
    CardContent,
    CardActions,
    IconButton,
} from "@mui/material";

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
import CardImg from "../../Assets/Img/advertImg.jpg";
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

function Cards({ data, editDelete = false, fullCard = false, like = false }) {
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

    CardTools(
        data,
        lang,
        currency,
        setPrice,
        setAdvertTitle,
        setAdvertLink,
        setAdvertType,
        setAdvertTypeImg,
        setAdvertAddress,
        setAdvertCity
    );

    if (!fullCard) {
        return (
            <Card sx={{ maxWidth: 300 }} className="card">
                <Redirect to={advertLink}>
                    <CardMedia
                        component="img"
                        alt="Card img"
                        height="140"
                        className="card__img"
                        image={
                            data?.image.length > 0
                                ? data?.image[0]?.url
                                : CardImg
                        }
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
                            />
                            <p className="house__type__name">{advertType}</p>
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
                            <span className="house__address">
                                {advertAddress}
                            </span>
                        </Typography>
                        <div className="card__actions">
                            {editDelete ? (
                                cardControls(data)
                            ) : (
                                <LoveBtn advertID={data?.id} like={true}/>
                            )}
                        </div>
                    </CardActions>
                </Box>
            </Card>
        );
    } else {
        return (
            <Card sx={{}} className="fullCard">
                <Redirect to={advertLink}>
                    <CardMedia
                        className="fullCard__img"
                        component="img"
                        alt="Card img"
                        image={
                            data?.image.length > 0
                                ? data?.image[0]?.url
                                : CardImg
                        }
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
                                <img
                                    src={advertTypeImg}
                                    alt=""
                                    className="house__type__icon"
                                />
                                <p className="house__type__name">
                                    {advertType}
                                </p>
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
                        <LoveBtn advertID={data?.id} />
                    </CardActions>
                </Box>
            </Card>
        );
    }
}
export default Cards;
