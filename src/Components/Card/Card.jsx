// Import => Reactl
import React, { useState, useEffect, useContext, useRef } from "react";
import { NavLink as Link } from "react-router-dom";

// Import => Mui
import {
    Box,
    Card,
    CardMedia,
    Typography,
    CardContent,
    CardActions,
    Button,
    IconButton,
    Tooltip,
    Backdrop,
    CircularProgress,
} from "@mui/material";

// Import => Components
import LoveBtn from "../LoveBtn/LoveBtn";
import LoveIcon from "../../Lib/Svg/love";
import LocationIcon from "../../Lib/Svg/location";
import DeleteIcon from "../../Lib/Svg/delete";
import EditIcon from "../../Lib/Svg/edit";

import CardTools from "../../Utils/cardTools";
import Notification from "../Notification/Notification";
import "./Card.scss";
import CardImg1 from "../../Assets/Img/hero-img.png";
import CardImg2 from "../../Assets/Img/advertImg.jpg";
import timesIcon from "../../Assets/Img/Icon/times.svg";
import { logRoles } from "@testing-library/react";

function Cards({ data, fullCard = false, isUserPost = false }) {
    const delModal = useRef();
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const [isClickDelete, setIsClickDelete] = useState(false);
    const [isAdvertDelete, setIsAdvertDelete] = useState(false);
    const [CardImg, setCardImg] = useState();

    const token = localStorage.getItem("Token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    let requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
    };
    let url = process.env.REACT_APP_URL;

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
        setCardImg(Math.floor(Math.random() * 2) == 0 ? CardImg1 : CardImg2);
    }, []);

    const Delete = (id, delButton) => {
        delButton.disabled = true;
        let oldButton = delButton.innerHTML;
        delButton.innerHTML = "...";
        fetch(`${url}post/${id}`, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                if (result) {
                    let res = JSON.parse(result);
                    delButton.disabled = false;
                    delButton.innerHTML = oldButton;
                    delModal.current.classList.remove("modal--open");
                    if (res.status) {
                        document
                            .querySelector("[cardid=" + `"${data.id}"]`)
                            .remove();
                        setIsAdvertDelete(true);
                    }
                }
            });
    };

    const cardControls = (
        <>
            <Link to={`/userpostedit/${data.id}`} className="edit-btn">
                <IconButton
                    variant="solid"
                    color="primary"
                    className="cardControls cardEdit"
                    sx={{ mr: 1.5 }}
                >
                    <EditIcon />
                </IconButton>
            </Link>
            <IconButton
                variant="outlined"
                color="error"
                className="cardControls cardDelete"
                onClick={() => {
                    let delMod = document.querySelector(".deleteModal");
                    if (!delMod) {
                        setIsClickDelete(true);
                        setTimeout(() => {
                            delModal.current?.classList.add("modal--open");
                        }, 50);
                    } else {
                        delMod.classList.add("modal--open");
                    }
                }}
            >
                <DeleteIcon />
            </IconButton>
        </>
    );

    function deleteModal() {
        return (
            <div className="modal deleteModal" ref={delModal}>
                <div className="deleteModal__content">
                    <img src={timesIcon} alt="" />
                    <h3 className="deleteModal__title">
                        Ishonchingiz komilmi?
                    </h3>
                    <p className="deleteModal__text">
                        Ushbu e'lon va uning barcha ma'lumotlari butunlay
                        o'chiriladi. Bu jarayonni ortga qaytarib bo'lmaydi.
                    </p>
                    <div className="deleteModal__btns">
                        <Button
                            className="deleteModal__button deleteModal__cancel"
                            onClick={() =>
                                delModal.current.classList.remove("modal--open")
                            }
                            sx={{ mr: 2 }}
                        >
                            Bekor qilish
                        </Button>
                        <Button
                            className="deleteModal__button deleteModal__submit"
                            color="error"
                            onClick={(e) => Delete(data.id, e.target)}
                        >
                            O'chirish
                        </Button>
                    </div>
                    <IconButton
                        aria-label="close"
                        className="modal__close-btn"
                        onClick={() =>
                            delModal.current.classList.remove("modal--open")
                        }
                    ></IconButton>
                </div>
            </div>
        );
    }

    function markAsSold(e) {
        e.target.disabled = true;
        fetch(url + "sold/" + data.id, { method: "GET", headers: myHeaders })
            .then((res) => res.text())
            .then((res) => {
                if (JSON.parse(res) == 1) {
                    setIsAdvertDelete(true);
                }
            })
            .finally(() => (e.target.disabled = false));
    }

    function userItems() {
        if (isUserPost) {
            return (
                <>
                    <div className="card__sold">
                        <Tooltip
                            arrow
                            title={
                                !data.solt
                                    ? "Sotilgan deb belgilangan e'lon faqat sizga ko'rinadi"
                                    : "E'lon barcha uchun ochiq bo'ladi"
                            }
                            color="primary"
                            open={tooltipOpen}
                            sx={{ backgroundColor: "#fff" }}
                        >
                            <Button
                                color="primary"
                                variant="contained"
                                size="small"
                                className="markAsSold"
                                onMouseEnter={() => setTooltipOpen(true)}
                                onMouseLeave={() => setTooltipOpen(false)}
                                onClick={(e) => markAsSold(e)}
                            >
                                {!data.solt
                                    ? "Sotilgan deb belgilash"
                                    : "Bekor qilish"}
                            </Button>
                        </Tooltip>
                    </div>
                    {data.check == "true" ? (
                        ""
                    ) : data.check == null && isUserPost ? (
                        <Tooltip
                            title="E'lon operatorlar tomonidan ko'rib chiqilmoqda. Bu jarayonda e'lon faqat siz uchun ko'rinadi"
                            placement="top"
                        >
                            <div className="card__verification">
                                Ko'rib chiqilmoqda
                            </div>
                        </Tooltip>
                    ) : (
                        <Tooltip
                            title="Iltimos e'lon ma'lumotlarini o'zgartirib ko'ring"
                            placement="top"
                        >
                            <div className="card__verification">
                                E'lon tasdiqlanmadi
                            </div>
                        </Tooltip>
                    )}
                </>
            );
        }
    }

    if ((data.check == "true" && !data.solt) || isUserPost) {
        if (!fullCard) {
            return (
                <>
                    {isClickDelete ? deleteModal() : ""}
                    {isAdvertDelete ? (
                        <Notification
                            message={"E'lon muvafaqqiyatli o'chirildi"}
                            type={"success"}
                        />
                    ) : (
                        ""
                    )}
                    <Card
                        sx={{ maxWidth: 300 }}
                        className="card"
                        cardid={data.id}
                    >
                        <div className="card__media">
                            <Link to={advertLink}>
                                <CardMedia
                                    component="img"
                                    alt=""
                                    className="card__img"
                                    image={
                                        data.image?.length > 0
                                            ? data.image[0]?.url
                                            : CardImg
                                    }
                                    onError={(e) => (e.target.src = CardImg)}
                                />
                            </Link>
                            {userItems()}
                        </div>
                        <Box className="card__content">
                            <CardContent className="card__header">
                                <Link
                                    to={advertTypeLink}
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
                                </Link>
                                <Typography
                                    variant="body2"
                                    className="house__prices"
                                >
                                    <span className="house__price">
                                        {price}
                                    </span>
                                </Typography>
                            </CardContent>
                            <CardContent className="card__main">
                                <Link to={advertLink} className="card__title">
                                    {advertTitle}
                                </Link>
                            </CardContent>
                            <CardActions className="card__footer">
                                <Typography className="house__address__bar">
                                    <LocationIcon className="card__location" />{" "}
                                    <span className="house__address">
                                        {advertAddress}
                                    </span>
                                </Typography>
                                <div className="card__actions">
                                    {isUserPost ? (
                                        cardControls
                                    ) : (
                                        <LoveBtn advertID={data.id} />
                                    )}
                                </div>
                            </CardActions>
                        </Box>
                    </Card>
                </>
            );
        } else {
            return (
                <Card sx={{}} className="fullCard">
                    <Link to={advertLink}>
                        <CardMedia
                            className="fullCard__img"
                            component="img"
                            alt="Card img"
                            image={
                                data?.image.length > 0
                                    ? data?.image[0]?.url
                                    : CardImg
                            }
                            onError={(e) => (e.target.src = CardImg)}
                        />
                    </Link>
                    <Box className="card__content">
                        <CardContent className="card__header">
                            <Link to={advertTypeLink} className="house__type">
                                <img
                                    src={advertTypeImg}
                                    alt=""
                                    className="house__type__icon"
                                />
                                <p className="house__type__name">
                                    {advertType}
                                </p>
                            </Link>

                            <Typography
                                variant="body2"
                                className="house__prices"
                            >
                                <span className="house__price">{price}</span>
                            </Typography>
                        </CardContent>

                        <CardContent className="card__main">
                            <div className="card__header__items">
                                <Link to={advertLink} className="card__title">
                                    {advertTitle}
                                </Link>
                            </div>

                            <div className="card__wrap">
                                <div className="card__room card__men">
                                    Xonalar: {data.room}
                                </div>
                                <div className="card__flet card__men">
                                    Qavat: {data.floor}
                                </div>
                                <div className="card__ara card__men">
                                    Maydoni: {data.total_area} m²
                                </div>
                            </div>

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
                            <LoveBtn advertID={data.id} />
                        </CardActions>
                    </Box>
                </Card>
            );
        }
    }
}
export default Cards;
