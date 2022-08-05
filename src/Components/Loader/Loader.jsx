// Import => React
import React, { useEffect } from "react";

// Import => Components
import useWindowDimensions from "../../Utils/windowDimension";
import "./Loader.scss";
import LogoImg from "../../Lib/Svg/logo";
// import LogoImg from "../../Assets/Img/LogoImg.svg"

function Loader() {

    const { windowWidth } = useWindowDimensions();
    useEffect(() => {
        if (windowWidth < 660) {
            let circles = document.querySelectorAll(".loaderCircle");
            if (circles.length > 0) {
                for (let i = 0; i < circles.length; i++) {
                    let width = circles[i].offsetWidth;
                    circles[i].style.width =
                        (windowWidth > 460 ? width / 1.3 : width / 1.6) + "px";
                    circles[i].style.height =
                        (windowWidth > 460 ? width / 1.3 : width / 1.6) + "px";
                }
            }
        }
        setTimeout(() => {
            const loader = document.querySelectorAll('.loading');
            if (loader.length > 0) {
                for (let i = 0; i < loader.length; i++) {
                    loader[i]?.remove();
                }
            }
        }, 15000);
    }, []);
    
    return (
        <>
            <div className="loading">
                <div className="loader">
                    <LogoImg width={140} height={140} />
                    <div className="loaderCircle circle"></div>
                    <div className="loaderCircle circle-1"></div>
                    <div className="loaderCircle circle-2"></div>
                    <div className="loaderCircle circle2"></div>
                    <div className="loaderCircle circle3"></div>
                    <div className="loaderCircle circle4"></div>
                    <div className="loaderCircle circle5"></div>
                    <div className="loaderCircle circle6"></div>
                    <div className="loaderCircle circle7"></div>
                    <div className="loaderCircle circle8"></div>
                    {windowWidth > 460 ? (
                        <>
                            <div className="loaderCircle circle11"></div>
                            <div className="loaderCircle circle10"></div>
                            <div className="loaderCircle circle9"></div>
                        </>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
}
export default Loader;
