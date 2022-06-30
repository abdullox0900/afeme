// Import => React
import React from "react";

// Import => Components
import "./Loader.scss";
import LogoImg from "../../Lib/Svg/logo";
import Spinner from "../Spinner/Spinner";

function Loader() {

    document.body.style.overflow = 'hidden';
    return (
        <>
        
            <div className="loading">
            <Spinner  />
                {/* <div className="loader">
                    <LogoImg width={140} height={140}/>
                    <div className="circle"></div>
                    <div className="circle-1"></div>
                    <div className="circle-2"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                    <div className="circle4"></div>
                    <div className="circle5"></div>
                    <div className="circle6"></div>
                    <div className="circle7"></div>
                    <div className="circle8"></div>
                    <div className="circle9"></div>
                    <div className="circle10"></div>
                    <div className="circle11"></div>
                </div> */}
            </div>
        </>
    )
}

export default Loader;