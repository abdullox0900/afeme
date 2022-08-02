import React, { useEffect, useState, useRef, useContext } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Import Images
import defaultImage from "../../Assets/Img/no-photo.jpg"

// Import useContext => Localization
import { Context } from "../../Context/LangContext";
import content from "../../Localization/Content";

// Import Styles
import "@splidejs/react-splide/css";
import "../Carousel/Carousel.scss";
import "./AdvertGallery.scss";

function AdvertGallery({ data, isLoading }) {
    const { lang, setLang } = useContext(Context);
    const mainRef = useRef();
    const thumbsRef = useRef();
    const imagesCount = data.image.length;

    useEffect(() => {
        if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
            mainRef.current.sync(thumbsRef.current.splide);
        }
    }, [mainRef, thumbsRef]);

    const mainOptions = {
        type: "loop",
        perPage: 1,
        height: 500,
        arrows: false,
    };

    const thumbsOptions = {
        type: "slide",
        perPage: imagesCount,
        width: "100%",
        gap: "15px",
        pagination: false,
        fixedWidth: 300,
        fixedHeight: 160,
        autoWidth: true,
        cover: false,
        autoFocus: false,
        focus: "center",
        isNavigation: true,
    };

    function generateSlides(images, main) {
        if (images.hasOwnProperty(0)) {
            return images.map((row) => (
                <SplideSlide>
                    <img
                        src={row.url}
                        className={main ? "splide__img splide__main__img" : "splide__img"}
                        alt=""
                        onError={(e) => (e.target.src = defaultImage)}
                    />
                </SplideSlide>
            ));
        }
    }
    function showVideo(thumb = false) {
        return (
            <>
                {data.video.hasOwnProperty(0) ? (
                    <SplideSlide>
                        <video
                            src={data.video[0].url}
                            controls={thumb ? false : true}
                            className="splide__img splide__video"
                        ></video>
                    </SplideSlide>
                ) : (
                    ""
                )}
                {data.documents.hasOwnProperty(0) ? (
                    <SplideSlide>
                        <img
                            src={data.documents[0].url}
                            className="splide__img"
                            alt=""
                            onError={(e) => (e.target.src = defaultImage)}
                        />
                    </SplideSlide>
                ) : (
                    ""
                )}
            </>
        );
    }

   if (data.image.hasOwnProperty(0)) {
        return (
            <section className="advertGallery">
                <Splide
                    options={mainOptions}
                    ref={mainRef}
                    className="advert__main__image"
                >
                    {generateSlides(data.image, true)}
                    {showVideo()}
                </Splide>

                <Splide
                    options={thumbsOptions}
                    ref={thumbsRef}
                    className="advert__thumbs"
                >
                    {generateSlides(data.image)}
                    {showVideo(true)}
                </Splide>
            </section>
        );
    } else {
        return <h1>{content[lang].notfound}</h1>;
    }
}
export default AdvertGallery;
