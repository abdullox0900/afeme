// Import => React
import React from "react";

// Import => Components
import "../LoginImg/LoginImg.scss"
import IlustImg from "../../Assets/Img/ilus-1.svg";
import IlustImgTwo from "../../Assets/Img/ilust-2.svg";
import IlustImgThree from "../../Assets/Img/ilust-3.svg";

// Import => AOS Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

function LoginImg() {

    AOS.init({
        offset: 150,
        duration: 400,
        debounceDelay: 50,
        throttleDelay: 90,
    });

    return (
        <>

            <div className="ilsut-grup">
                <img className="ilust-one" src={IlustImg} alt="form-img" data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="liner"
                    data-aos-duration="1500" />
                <img className="ilust-two" src={IlustImgTwo} alt="form-img" data-aos="fade-up"
                    data-aos-duration="3000" />
                <img className="ilust-three" src={IlustImgThree} alt="form-img" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" />
            </div>
        </>
    )
}

export default LoginImg;