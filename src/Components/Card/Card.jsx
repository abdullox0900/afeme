import React, { useState, useEffect } from "react";
import LoveIcon from "../../Lib/Svg/love";
import LocationIcon from "../../Lib/Svg/location";
import callIcon from "../../Assets/Img/call.svg"
import messageIcon from "../../Assets/Img/message.svg"
import { Box, Card, CardMedia, Typography, CardContent, CardActions, IconButton } from '@mui/material';
import { NavLink as Redirect } from "react-router-dom";
import { Button } from "@mui/material";
import { ReactComponent as Trash } from '../../Assets/Img/Icon/trash.svg'
import { ReactComponent as Edit } from '../../Assets/Img/Icon/edit.svg'

import "./Card.scss"

function LoveBtn() {
    return(
        <IconButton color="error" className="card__btn card__love">
            <LoveIcon className="card__love-icon"/>
        </IconButton>
    )
}
function Cards({data, cardData, loveBtn = true}) {

    useEffect(() => {
        console.log(data);
    }, [data])
    return (
        <Card sx={{ maxWidth: 300 }} className="card">
            <Redirect to={cardData.id}><CardMedia component="img" alt="Card img" height="140" image={data.id}/></Redirect>
            <Box className="card__content">
                <CardContent className="card__header">
                    <Typography variant="body1" component="div" className="house__type">{data?.htype_id?.name}</Typography>
                    <Typography variant="body2" className="house__prices"><span className="house__price">{data.price_usd}</span></Typography>
                </CardContent>
                <CardContent className="card__main">
                <Redirect to={data.id} className="card__title">Ijaraga {data?.room} xonali {data?.htype_id?.name} sotiladi</Redirect>
                </CardContent>
                <CardActions className="card__footer">
                    <Typography className="house__address__bar"><LocationIcon className="card__location"/> <span className="house__address">{data?.city_id?.name}</span></Typography>
                    {loveBtn ? LoveBtn() : ''}
                </CardActions>
            </Box>
        </Card>
    )
}

function FullCard({cardData, data}) {

    useEffect(() => {
        // console.log(data);
    }, [data])
    return(
        <Card sx={{}} className="fullCard">
            <Redirect to={cardData.houseUrl}><CardMedia  className="fullCard__img" component="img" alt="Card img" image={cardData.houseImg}/></Redirect>
            <Box className="card__content">
                <CardContent className="card__header">
                    <div className="card__header__items">
                        <Redirect to={cardData.houseUrl} className="card__title">Ijaraga {data?.room} xonali {data?.htype_id?.name} sotiladi</Redirect>
                        <Typography variant="body1" component="div" className="house__type">{data?.htype_id?.name}</Typography>
                    </div>
                    <Typography variant="body2" className="house__prices"><span className="house__price">${data?.price_usd}</span></Typography>
                </CardContent>
                <CardContent className="card__main">
                    <p className="card__desc">{cardData.description}</p>
                </CardContent>
                <CardActions className="card__footer">
                    <div className="fullCard__foot">
                        <Typography className="house__address__bar"><LocationIcon className="card__location"/> <span className="house__address">{cardData.houseAddress}</span></Typography>
                    </div>
                    <div className="card__buttons">
                        <IconButton color="error" className="card__btn card__love">
                            <LoveIcon className="card__love-icon"/>
                        </IconButton>
                    </div>
                </CardActions>
            </Box>
        </Card>
    )
}

function Fcards({data, loveBtn = true}) {

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
                    {loveBtn ? LoveBtn() : ''}
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