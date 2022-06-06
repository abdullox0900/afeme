import React, { useState } from "react";
import LoveIcon from "../../Lib/Svg/love";
import { ReactComponent as Trash } from '../../Assets/Img/Icon/trash.svg'
import { ReactComponent as Edit } from '../../Assets/Img/Icon/edit.svg'
import LocationIcon from "../../Lib/Svg/location";
import callIcon from "../../Assets/Img/call.svg"
import messageIcon from "../../Assets/Img/message.svg"
import { Box, Card, CardMedia, Typography, CardContent, CardActions, IconButton, Button } from '@mui/material';

import "./Card.scss"
function Cards({ data }) {
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

                    <Typography className="house__address__bar"><LocationIcon className="card__location" /> <span className="house__address">{data.houseAddress}</span></Typography>
                    <IconButton variant="contained" className="card__btn card__call">
                        <img src={callIcon} alt="" />
                    </IconButton>
                    <IconButton variant="contained" className="card__btn card__msg">
                        <img src={messageIcon} alt="" />
                    </IconButton>

                    <IconButton color="error" className="card__btn card__love">
                        <LoveIcon className="card__love-icon" />
                    </IconButton>

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
                        <Button style={{ backgroundColor: 'white', border: '1px solid #357AFF' }} color="error" className="card__edit">
                            <Edit className="edit" />
                        </Button>
                    </div>
                </CardActions>
            </Box>
        </Card>
    )
}

function SCard({ data }) {
    return (
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

function FullCard({ data }) {
    return (
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
                        <Typography className="house__address__bar"><LocationIcon className="card__location" /> <span className="house__address">{data.houseAddress}</span></Typography>

                    </div>
                    <div className="card__buttons">
                        <IconButton variant="contained" className="card__btn card__call">
                            <img src={callIcon} alt="" />
                        </IconButton>
                        <IconButton variant="contained" className="card__btn card__msg">
                            <img src={messageIcon} alt="" />
                        </IconButton>
                        <IconButton color="error" className="card__btn card__love">
                            <LoveIcon className="card__love-icon" />
                        </IconButton>
                    </div>
                </CardActions>
            </Box>
        </Card>
    )
}
export { Cards, SCard, FullCard, Ucards };