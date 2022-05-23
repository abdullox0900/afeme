import logo from "../../Assets/Img/logo.svg"
import notificationIcon from "../../Assets/Img/notification.svg"
import loveIcon from "../../Assets/Img/love.svg"
import CurrencyIcon from "../../Assets/Img/currency.svg"
import locationIcon from "../../Assets/Img/location.svg"
import Container from "../Container/Container";
import "../Header/Header.scss";
import Nav from "../Nav/Nav";

import { IconButton, Button, Tooltip, Grow, Badge, FormControl } from '@mui/material';


function Header() {
    return (
        <>
            <header className="header">
                <Container>
                    <div className="header__content">
                        <div className="header__logo">
                            <a href="#" className="header__logo-link">
                                <img className="header__logo-img" src={logo} alt="logo" />
                            </a>
                            <Tooltip className="icon__btn" title="Your location" arrow TransitionComponent={Grow}>
                                <Button className="btn header__location" variant="text" sx={{ py: 1, px: 1.2, ml: 1.5 }} title="Set location"><img src={locationIcon} alt="" className="header__location-img" /> Uzbekistan</Button>
                            </Tooltip>
                        </div>
                        <div className="header__items">
                            <Tooltip className="icon__btn" title="Your Currency" arrow TransitionComponent={Grow}>
                                <IconButton color="primary">
                                    <img src={CurrencyIcon} alt="" className="header__icon nav__currency" />
                                </IconButton>
                            </Tooltip>
                            <Tooltip className="icon__btn" title="Your Loves" arrow TransitionComponent={Grow}>
                                <IconButton color="primary">
                                    <img src={loveIcon} alt="" className="header__icon nav__love" />
                                </IconButton>
                            </Tooltip>
                            <Badge badgeContent={100} color="secondary">
                                <Tooltip className="icon__btn" title="Notifications" arrow TransitionComponent={Grow}>
                                    <IconButton color="success">
                                        <img src={notificationIcon} alt="" className="header__icon nav__notification" />
                                    </IconButton>
                                </Tooltip>
                            </Badge>
                            <div className="header__buttons" sx={{ ml: 3 }}>
                                <Button className="btn header__button" variant="contained" sx={{ py: 1, px: 1.5 }}>+ Eʻlon qoʻshish</Button>
                                <Button className="btn header__button login__button" variant="text" sx={{ ml: 2, py: 1.5, px: 2.5 }}>Kirish</Button>
                            </div>
                        </div>
                    </div>
                    <Nav></Nav>
                </Container>

            </header>
        </>
    )
}

export default Header;