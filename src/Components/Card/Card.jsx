import React, { useState } from "react";
import LoveIcon from "../../Lib/Svg/love";
import LocationIcon from "../../Lib/Svg/location";
import callIcon from "../../Assets/Img/call.svg"
import messageIcon from "../../Assets/Img/message.svg"
import { Box, Card, CardMedia, Typography, CardContent, CardActions, IconButton } from '@mui/material';
import { NavLink as Redirect } from "react-router-dom";

import "./Card.scss"

function LoveBtn() {
    return(
        <IconButton color="error" className="card__btn card__love">
            <LoveIcon className="card__love-icon"/>
        </IconButton>
    )
}
function Cards({data, loveBtn = true}) {

    return (
        <Card sx={{ maxWidth: 300 }} className="card">
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

function SCard({data}) {
    return(
        <Card sx={{ maxWidth: 300 }} className="scard">
            <Redirect to={data.houseUrl}><CardMedia component="img" alt="Card img" height="140" image={data.houseImg}/></Redirect>
            <Box className="card__content">
                <CardContent className="card__main">
                <Redirect to={data.houseUrl} className="card__title">{data.houseTitle}</Redirect>
                </CardContent>
                <CardActions className="card__footer">
                    <Typography> <span className="house__address">{data.houseAddress}</span></Typography>
                </CardActions>
            </Box>
        </Card>
    )
}

function FullCard({data}) {
    return(
        <Card sx={{}} className="fullCard">
            <Redirect to={data.houseUrl}><CardMedia  className="fullCard__img" component="img" alt="Card img" image={data.houseImg}/></Redirect>
            <Box className="card__content">
                <CardContent className="card__header">
                <Redirect to={data.houseUrl} className="card__title">{data.houseTitle}</Redirect>
                    <Typography variant="body2" className="house__prices"><span className="house__price">${data.housePrice}</span></Typography>
                </CardContent>
                <CardContent className="card__main">
                    <p className="card__desc">{data.description}</p>
                </CardContent>
                <CardActions className="card__footer">
                    <div className="fullCard__foot">
                        <Typography variant="body1" component="div" className="house__type">{data.houseType}</Typography>
                        <Typography className="house__address__bar"><LocationIcon className="card__location"/> <span className="house__address">{data.houseAddress}</span></Typography>

                    </div>
                    <div className="card__buttons">
                        <IconButton variant="contained" className="card__btn card__call">
                            <img src={callIcon} alt="" />
                        </IconButton>
                        <IconButton variant="contained" className="card__btn card__msg">
                            <img src={messageIcon} alt="" />
                        </IconButton>
                        <IconButton color="error" className="card__btn card__love">
                            <LoveIcon className="card__love-icon"/>
                        </IconButton>
                    </div>
                </CardActions>
            </Box>
        </Card>
    )
}
export {Cards, SCard, FullCard};