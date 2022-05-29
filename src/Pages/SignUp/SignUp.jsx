import React from "react";
import Login from "../../Components/Login/Login";
import Loader from "../../Components/Loader/Loader";

function SignUp() {

    window.addEventListener('load', function(){
        const loader = document.querySelector('.loading');
        document.body.classList.add('loaded');
        setTimeout(() => {
            loader.getElementsByClassName.display = 'none';
        }, 500);
    });
    return(
        <>
            <Login />
            <Loader />
        </>
    )
}

export default SignUp;