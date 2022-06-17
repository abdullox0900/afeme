// Import => Reactl
import React, { useState, useEffect, useContext } from "react";
import { NavLink as Redirect } from "react-router-dom";

// Import => Mui
import { Box, Card, CardMedia, Typography, CardContent, CardActions, IconButton } from '@mui/material';
import { Button } from "@mui/material";

// Import => Components
import LoveIcon from "../../Lib/Svg/love";
import LocationIcon from "../../Lib/Svg/location";
import callIcon from "../../Assets/Img/call.svg"
import messageIcon from "../../Assets/Img/message.svg"
import { ReactComponent as Trash } from '../../Assets/Img/Icon/trash.svg'
import { ReactComponent as Edit } from '../../Assets/Img/Icon/edit.svg'

import { Context as CurrencyContext } from '../../Context/CurrencyContext';
import { Context as LangContext } from '../../Context/LangContext';
import "./Card.scss"

function numberFormatter(numb) {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: "USD",
    });
    return formatter.format(numb)
}

function loveAnimate(e) {

    let loveBtn = document.querySelectorAll('.love-btn');
    let content = document.querySelectorAll('.content');
    let heart = document.querySelectorAll('.heart');

    for (let i = 0; i < loveBtn.length; i++) {
        if (loveBtn[i].getAttribute('dataid') == e.target.getAttribute('dataid')) {
            if (content[i].classList.contains('active')) {
                content[i].classList.remove('active');
                heart[i].classList.remove('active');
            } else {
                content[i].classList.add('active');
                heart[i].classList.add('active');
            }
        }
    }
}

function Cards({data, dataError, cardData}) {

    const { lang, setLang } = useContext(LangContext);
    const { currency, setCurrency } = useContext(CurrencyContext);
    const [price, setPrice] = useState('');
    const [advertTitle, setAdvertTitle] = useState('');
    const [advertLink, setAdvertLink] = useState('');
    const [advertType, setAdvertType] = useState('');
    const [advertAddress, setAdvertAddress] = useState('');

    if (data == null) {
        dataError = true;
    }
    useEffect(() => {
        if (data) {
            if (currency == 'usd') {
                setPrice(numberFormatter(data.price_usd));
            } else if (currency == 'sum') {
                setPrice(data.price_som
                    .toString().
                    replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
                    + " so'm");
            }
            setAdvertTitle(`Ijaraga ${data.room} xonali ${data.htype_id?.name_uz} sotiladi`);

            setAdvertLink(`/advert?id=${data.id}`);
            
            if (lang == 'uz') {
                setAdvertType(data?.htype_id?.name_uz);
                setAdvertAddress(data?.region_id?.name_uz);
            } else if (lang == 'ru') {
                setAdvertType(data?.htype_id?.name_ru);
                setAdvertAddress(data?.region_id?.name_ru);
            } else {
                setAdvertType(data?.htype_id?.name_en);
                setAdvertAddress(data?.region_id?.name_en);
            }
        }
    }, [data, currency, lang]);


    function successCard() {
        return (
            <Card sx={{ maxWidth: 300 }} className="card">
                <Redirect to={advertLink}><CardMedia component="img" alt="Card img" height="140" className="card__img" image={cardData.houseImg}/></Redirect>
                <Box className="card__content">
                    <CardContent className="card__header">
                        <Typography variant="body1" component="div" className="house__type">{advertType}</Typography>
                        <Typography variant="body2" className="house__prices"><span className="house__price">{price}</span></Typography>
                    </CardContent>
                    <CardContent className="card__main">
                    <Redirect to={advertLink} className="card__title">{advertTitle}</Redirect>
                    </CardContent>
                    <CardActions className="card__footer">
                        <Typography className="house__address__bar"><LocationIcon className="card__location"/> <span className="house__address">{advertAddress}</span></Typography>
                        <div className="love-btn" dataid={data?.id} onClick={(e) => loveAnimate(e)}>
                            <div className="content">
                                <span className="heart"></span>
                            </div>
                        </div>
                    </CardActions>
                </Box>
            </Card>
        )
    }

    function failCard() {
        return (
            // Shu yerda error belgisi bolishi kerak
            <p className="failText">Ma'lumotlar olishda xatolik yuz berdi</p>
        )
    }

    if (!dataError) {
        return successCard();
    } else {
        return failCard()
    }
}

function FullCard({cardData, dataError, data}) {

    const { lang, setLang } = useContext(LangContext);
    const { currency, setCurrency } = useContext(CurrencyContext);
    const [price, setPrice] = useState('');
    const [advertTitle, setAdvertTitle] = useState('');
    const [advertLink, setAdvertLink] = useState('');
    const [advertType, setAdvertType] = useState('');
    const [advertAddress, setAdvertAddress] = useState('');

    if (data == null) {
        dataError = true;
    }
    useEffect(() => {
        if (data) {
            if (currency == 'usd') {
                setPrice(numberFormatter(data.price_usd));
            } else if (currency == 'sum') {
                setPrice(data.price_som
                    .toString().
                    replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
                    + " so'm");
            }
            setAdvertTitle(`Ijaraga ${data.room} xonali ${data.htype_id?.name_uz} sotiladi`);

            setAdvertLink(`/advert?id=${data.id}`);
            if (lang == 'uz') {
                setAdvertType(data?.htype_id?.name_uz);
                setAdvertAddress(data?.region_id?.name_uz);
            } else if (lang == 'ru') {
                setAdvertType(data?.htype_id?.name_ru);
                setAdvertAddress(data?.region_id?.name_ru);
            } else {
                setAdvertType(data?.htype_id?.name_en);
                setAdvertAddress(data?.region_id?.name_en);
            }
        }
    }, [data, currency, lang]);

    return(
        <Card sx={{}} className="fullCard">
            <Redirect to={advertLink}><CardMedia  className="fullCard__img" component="img" alt="Card img" image={cardData.houseImg}/></Redirect>
            <Box className="card__content">
                <CardContent className="card__header">
                    <div className="card__header__items">
                        <Redirect to={advertLink} className="card__title">{advertTitle}</Redirect>
                        <Typography variant="body1" component="div" className="house__type">{advertType}</Typography>
                    </div>
                    <Typography variant="body2" className="house__prices"><span className="house__price">{price}</span></Typography>
                </CardContent>
                <CardContent className="card__main">
                    <p className="card__desc">{data?.description}</p>
                </CardContent>
                <CardActions className="card__footer">
                    <div className="fullCard__foot">
                        <Typography className="house__address__bar"><LocationIcon className="card__location"/> <span className="house__address">{advertAddress}</span></Typography>
                    </div>
                    <div className="love-btn" dataid={data?.id} onClick={(e) => loveAnimate(e)}>
                        <div className="content">
                            <span className="heart"></span>
                        </div>
                    </div>
                </CardActions>
            </Box>
        </Card>
    )
}

function Fcards({data}) {

    return (
        <Card sx={{ width: 375 }} className="card">
            <Redirect to={data.houseUrl}><CardMedia component="img" alt="Card img" height="140" image={data.houseImg}/></Redirect>
            <Box className="card__content">
                <CardContent className="card__header">
                    <Typography variant="body1" component="div" className="house__type">{data.houseType}</Typography>
                    <Typography variant="body2" className="house__prices"><span className="house__price">{data.housePrice}</span> /month</Typography>
                </CardContent>
                <CardContent className="card__main">
                <Redirect to={data.houseUrl} className="card__title">{data.houseTitle}</Redirect>
                </CardContent>
                <CardActions className="card__footer">
                    <Typography className="house__address__bar"><LocationIcon className="card__location"/> <span className="house__address">{data.houseAddress}</span></Typography>
                    <IconButton color="error" className="card__btn card__love">
                        <LoveIcon className="card__love-icon"/>
                    </IconButton>
                </CardActions>
            </Box>
        </Card>
    )
}

function Ucards({ data }) {

    return (
        <Card sx={{ width: 375 }} className="card">
            <a href={data.houseUrl}><CardMedia component="img" alt="Card img" height="140" image={data.houseImg} /></a>
            <Box className="card__content">
                <CardContent className="card__header">
                    <Typography variant="body1" component="div" className="house__type">{data.houseType}</Typography>
                    <Typography variant="body2" className="house__prices"><span className="house__price">{data.housePrice}</span> /month</Typography>
                </CardContent>
                <CardContent className="card__main">
                    <a href={data.houseUrl} className="card__title">{data.houseTitle}</a>
                </CardContent>
                <CardActions className="card__footer">
                    <Typography className="house__address__bar"><LocationIcon className="card__location" /> <span className="house__address">{data.houseAddress}</span></Typography>
                    <div>
                        <Button style={{marginRight:'10px', backgroundColor: 'white', border: '1px solid #ff0000', }} variant="contained" className="card__trash">
                            <Trash className="trash" />
                        </Button>
                        <Button style={{ backgroundColor: 'white', border: '1px solid #357AFF' }} variant="contained" color="error" className="card__edit">
                            <Edit className="edit" />
                        </Button>
                    </div>
                </CardActions>
            </Box>
        </Card>
    )
}

function SCard({cardData}) {
    return(
        <Card sx={{ maxWidth: 300 }} className="scard">
            <Redirect to={cardData.houseUrl}><CardMedia component="img" alt="Card img" height="140" image={cardData.houseImg}/></Redirect>
            <Box className="card__content">
                <CardContent className="card__main">
                <Redirect to={cardData.houseUrl} className="card__title">{cardData.houseTitle}</Redirect>
                </CardContent>
                <CardActions className="card__footer">
                    <Typography> <span className="house__address">{cardData.houseAddress}</span></Typography>
                </CardActions>
            </Box>
        </Card>
    )
}

export {Cards, SCard, FullCard, Ucards, Fcards};