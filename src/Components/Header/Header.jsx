import logo from "../../Assets/Img/logo.svg"
import notificationIcon from "../../Assets/Img/notification.png"
import loveIcon from "../../Assets/Img/love.png"
import Container from "../Container/Container";

import { IconButton, Button } from '@mui/material';

import "../Header/Header.scss";

const theme = {
    spacing: [0, 5, 10, 15, 20, 25, 30]
}  

function Header() {
    return (
        <>
            <header className="header">
                <nav className="nav">
                    <Container>
                        <div className="nav_content">
                            <a href="#" className="header__logo-link">
                                <img className="header__logo-img" src={logo} alt="logo" />
                            </a>

                            <div className="nav_items">
                                <IconButton color="primary">
                                    <img src={loveIcon} alt="" className="nav_icon nav_love" />
                                </IconButton>
                                <IconButton color="success" sx={{mr: 2}}>
                                    <img src={notificationIcon} alt="" className="nav_icon nav_notification" />
                                </IconButton>
                                <div className="nav_buttons" sx={{ml: 3}}>
                                    <Button className="btn nav_button" variant="contained" sx={{p: 1}}>+ Eʻlon qoʻshish</Button>
                                    <Button className="btn nav_button login_button" variant="text" sx={{ml: 2}}>Kirish</Button>
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