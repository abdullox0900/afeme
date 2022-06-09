import React from "react";
import Container from "../../Components/Container/Container";
import Form from "../../Components/Form/Form";
import LoginImg from "../../Components/LoginImg/LoginImg";
import "./SignUp.scss"

function SignUp() {

    return(
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

export default SignUp;