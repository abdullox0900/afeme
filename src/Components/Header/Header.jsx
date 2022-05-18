import logo from "../../Assets/Img/logo.svg"
import notificationIcon from "../../Assets/Img/notification.png"
import loveIcon from "../../Assets/Img/love.png"
import CurrencyIcon from "../../Assets/Img/currency.png"
import Container from "../Container/Container";

import { IconButton, Button, Tooltip, Grow } from '@mui/material';

import "../Header/Header.scss";

function Header() {
    return (
        <>
            <header className="header">
                <nav className="nav">
                    <Container>
                        <div className="nav_content">
                            <div className="nav_logo">
                                <a href="#" className="header__logo-link">
                                    <img className="header__logo-img" src={logo} alt="logo" />
                                </a>
                                <Tooltip title="Your location" arrow TransitionComponent={Grow}>
                                    <Button className="btn nav_location" variant="text" sx={{py: 1, px: 1.5, ml: 1.5}} title="Set location">Uzbekistan</Button>
                                </Tooltip>
                            </div>

                            <div className="nav_items">
                                <Tooltip title="Your Currency" arrow TransitionComponent={Grow}>
                                    <IconButton color="primary">
                                        <img src={CurrencyIcon} alt="" className="nav_icon nav_currency" />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Your Loves" arrow TransitionComponent={Grow}>
                                    <IconButton color="primary">
                                        <img src={loveIcon} alt="" className="nav_icon nav_love" />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Notifications" arrow TransitionComponent={Grow}>
                                    <IconButton color="success" sx={{mr: 2}}>
                                        <img src={notificationIcon} alt="" className="nav_icon nav_notification" />
                                    </IconButton>
                                </Tooltip>
                                <div className="nav_buttons" sx={{ml: 3}}>
                                    <Button className="btn nav_button" variant="contained" sx={{py: 1, px: 1.5}}>+ Eʻlon qoʻshish</Button>
                                    <Button className="btn nav_button login_button" variant="text" sx={{ml: 2, py: 1.5, px: 2.5}}>Kirish</Button>
                                </div>
                            </div>
                        </div>
                    </Container>
                </nav>
            </header>
        </>
    )
}

export default Header;