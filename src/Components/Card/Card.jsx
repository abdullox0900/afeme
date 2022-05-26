import React from "react";
import loveIcon from "../../Assets/Img/love.svg"
import callIcon from "../../Assets/Img/call.svg"
import messageIcon from "../../Assets/Img/message.svg"
import locationIcon from "../../Assets/Img/location.svg"
import { Box, Card, CardMedia, Typography, CardContent, CardActions, IconButton } from '@mui/material';

import "./Card.scss"

function Cards({data}) {
    return (
        <Card sx={{ maxWidth: 300 }} className="card">
            <a href="#"><CardMedia component="img" alt="Card img" height="140" image={data.houseImg}/></a>
            <Box className="card__content">
                <CardContent className="card__header">
                    <Typography variant="body1" component="div" className="house__type">{data.houseType}</Typography>
                    <Typography variant="body2" className="house__prices"><span className="house__price">{data.housePrice}</span> /month</Typography>
                </CardContent>
                <CardContent className="card__main">
                    {/* <Typography gutterBottom variant="h4" component="h5" className="card__title">{data.houseTitle}</Typography> */}
                    <a href="#" className="card__title">{data.houseTitle}</a>
                </CardContent>
                <CardActions className="card__footer">
                    <Typography><img src={locationIcon} alt="" /> <span className="house__address">{data.houseAddress}</span></Typography>
                    <IconButton variant="contained" className="card__btn card__call">
                        <img src={callIcon} alt="" />
                    </IconButton>
                    <IconButton variant="contained" className="card__btn card__msg">
                        <img src={messageIcon} alt="" />
                    </IconButton>

                    <IconButton color="error" className=".card__btn card__love">
                        <img src={loveIcon} alt="" />
                    </IconButton>
                </CardActions>
            </Box>
        </Card>
    )
}

function SCard({data}) {
    return(
        <Card sx={{ maxWidth: 300 }} className="scard">
            <a href="#"><CardMedia component="img" alt="Card img" height="140" image={data.houseImg}/></a>
            <Box className="card__content">
                <CardContent className="card__main">
                    <a href="#" className="card__title">{data.houseTitle}</a>
                </CardContent>
                <CardActions className="card__footer">
                    <Typography><img src={locationIcon} alt="" /> <span className="house__address">{data.houseAddress}</span></Typography>
                </CardActions>
            </Box>
        </Card>
    )
}
export {Cards, SCard};