import React from "react";
import Form from "../Form/Form";
import "../Login/Login.scss"
import LoginImg from "../LoginImg/LoginImg";
import Container from "../Container/Container";
// import LogoOval from "../../Assets/Img/logo-oval.svg";
// import LogoHome from "../../Assets/Img/home-logo.svg";

function Login() {
    return (
        <>
            <Container>
                <div className="login-control">
                    {/* <img className="logo-home" src={LogoHome} alt="img" data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="200"
                    data-aos-offset="10"
                    data-aos-duration="1500"/>
                <img className="logo-oval" src={LogoOval} alt="img" data-aos="zoom-in" ata-aos-easing="linear"
                    data-aos-duration="3000" /> */}
                    <LoginImg />
                    <Form />
                </div>
            </Container>
        </>
    )
}

export default Login;