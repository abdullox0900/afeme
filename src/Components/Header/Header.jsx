import React from 'react';
import logo from "../../Assets/Img/logo.svg"
import notificationIcon from "../../Assets/Img/notification.svg"
import loveIcon from "../../Assets/Img/love.svg"
import CurrencyIcon from "../../Assets/Img/currency.svg"
import locationIcon from "../../Assets/Img/location.svg"
import plusIcon from "../../Assets/Img/plus.svg"
import Container from "../Container/Container";
import Modal from '../ModalAuthorization/Modal';
import "../ModalAuthorization/Modal.scss";
import { IconButton, Button, Tooltip, Grow, Badge, } from '@mui/material';
import "../Header/Header.scss";
import { NavLink } from 'react-router-dom';

function Header() {

    const elModal = React.useRef();

    return (
        <>
            <header className="header">
                <Container>
                    <div className="header__content">
                        <div className="header__logo">
                            {/* p  nı ornıda a:href bor edi hato beryatudii */}
                            <p className="header__logo-link">
                                <NavLink to="/homepage">
                                    <img className="header__logo-img" src={logo} alt="logo" />
                                </NavLink>
                            </p>
                            <Tooltip className="icon__btn" title="Salom" arrow TransitionComponent={Grow}>
                                <Button className="btn header__location" variant="text" sx={{ py: 1, px: 1.2, ml: 1.5 }}>
                                    <img src={locationIcon} alt="location-img" className="header__location-img" />
                                </Button>
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
                                <NavLink to="/advertPage">
                                    <Button className="btn header__button add__announcement" variant="contained" sx={{ py: 1, px: 1.5 }}><img src={plusIcon} alt="" /> Eʻlon qoʻshish</Button>
                                </NavLink>
                                <Button className="btn header__button login__btn modal-dialog modal-dialog-scrollable"
                                    variant="text" sx={{ ml: 2, py: 1.5, px: 2.5 }} onClick={() => {
                                        elModal.current.classList.add("modal--open");
                                    }}>Kirish</Button>
                            </div>
                        </div>
                    </div>
                    {/* <Nav></Nav> */}
                </Container>

                <Modal elModal={elModal} />

            </header>
        </>
    )
}
export default Header;

// class Header extends Component {
//     state = {
//         // IP: ""
//     }

    // componentDidMount() {
    //     axios.get(`https://ipapi.co/json/`)
    //         .then(response => {
    //             const IP = response.data;
    //             console.log(IP.country_name);
    //             if (IP.ip) {
    //                 this.setState({ IP });
    //             }
    //         })
    //         .catch((err) => { console.log(err); });
    // }

    // Iltomos errorlarni tozalab yuring
    // {this.state.IP.country_name}



    // render() {

    //     return (
    //         <>

    //         </>
    //     )
    // }
// }