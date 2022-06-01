import React from "react";
import "./Loader.scss";
import LogoImg from "../../Lib/Svg/logo";

function Loader() {
    return (
        <>
            <div className="loading">

                <div className="loader">
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
                </div>
            </div>
        </>
    )
}

export default Loader;

{/* <LogoImg className="loading-img" width={50} height={50}/>
                <div className="sistem">
                <LogoOval classNa="loading__oval-img" width={60} height={60}/>
                </div> */}