import logo from "../../Assets/Img/logo.svg"
import notificationIcon from "../../Assets/Img/notification.png"
import loveIcon from "../../Assets/Img/love.png"
import CurrencyIcon from "../../Assets/Img/currency.png"
import locationIcon from "../../Assets/Img/location.svg"
import Container from "../Container/Container";

import { IconButton, Button, Tooltip, Grow, Badge, Skeleton } from '@mui/material';

import "../Header/Header.scss";

function Header() {
    return (
        <>
            <header className="header">
                <nav className="nav">
                    <Container>
                        <div className="nav__content">
                            <div className="nav__logo">
                                <a href="#" className="header__logo-link">
                                    <img className="header__logo-img" src={logo} alt="logo" />
                                </a>
                                <Tooltip className="icon__btn"  title="Your location" arrow TransitionComponent={Grow}>
                                    <Button className="btn nav__location" variant="text" sx={{py: 1, px: 1.2, ml: 1.5}} title="Set location"><img src={locationIcon} alt="" className="nav__location-img" /> Uzbekistan</Button>
                                </Tooltip>
                            </div>
                            <div className="nav__items">
                                <Tooltip className="icon__btn"  title="Your Currency" arrow TransitionComponent={Grow}>
                                    <IconButton color="primary">
                                        <img src={CurrencyIcon} alt="" className="nav__icon nav__currency" />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip className="icon__btn"  title="Your Loves" arrow TransitionComponent={Grow}>
                                    <IconButton color="primary">
                                        <img src={loveIcon} alt="" className="nav__icon nav__love" />
                                    </IconButton>
                                </Tooltip>
                                <Badge badgeContent={100} color="secondary">
                                    <Tooltip  className="icon__btn" title="Notifications" arrow TransitionComponent={Grow}>
                                        <IconButton color="success">
                                            <img src={notificationIcon} alt="" className="nav__icon nav__notification" />
                                        </IconButton>
                                    </Tooltip>
                                </Badge>
                                <div className="nav__buttons" sx={{ml: 3}}>
                                    <Button className="btn nav__button" variant="contained" sx={{py: 1, px: 1.5}}>+ Eʻlon qoʻshish</Button>
                                    <Button className="btn nav__button login__button" variant="text" sx={{ml: 2, py: 1.5, px: 2.5}}>Kirish</Button>
                                </div>
                            </div>
                        </div>
                    </Container>
                </nav>
                <div className="nav__list">
                    
                </div>
            </header>
        </>
    )
}

export default Header;