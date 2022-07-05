// Import => React
import React from "react";

// Import => Components
import Container from "../../Components/Container/Container";
import Form from "../../Components/Form/Form";
import LoginImg from "../../Components/LoginImg/LoginImg";

// Import => Style Components
import "./SignUp.scss"

function SignUp() {

    return (
        <>
            <div className="login-control">
                <LoginImg />
                <Form />
            </div>
        </>
    )
}

export default SignUp;