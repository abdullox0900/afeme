import React, { useEffect, useState, useRef, useContext } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Import Images
import HeroImg1 from "../../Assets/Img/home-hero-1.jpg";
import HeroImg2 from "../../Assets/Img/home-hero-2.jpg";
import HeroImg3 from "../../Assets/Img/home-hero-3.jpg";
import HeroImg4 from "../../Assets/Img/home-hero-4.jpg";
import HeroImg5 from "../../Assets/Img/home-hero-5.jpg";
import HeroImg6 from "../../Assets/Img/home-hero-6.jpg";

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
    const [hasImages, setHasImages] = useState(
        Array.isArray(data.image) && data.image.length > 0
    );
    const [hasVideo, setHasVideo] = useState(Array.isArray(data.video));
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
    let arr = [HeroImg1, HeroImg2, HeroImg3, HeroImg4, HeroImg5, HeroImg6];
    let randNumber = Math.floor(Math.random() * 5);

    function generateSlides(images) {
        return images.map((row) => (
            <SplideSlide>
                <img
                    src={row.url}
                    className="splide__img"
                    alt=""
                    onError={(e) => (e.target.src = arr[randNumber])}
                />
            </SplideSlide>
        ));
    }
    function showVideo(thumb = false) {
        return (
            <>
                {data.video.length > 0 ? (
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
                {data.documents ? (
                    <SplideSlide>
                        <img
                            src={data.documents}
                            className="splide__img"
                            alt=""
                            onError={(e) => (e.target.src = arr[randNumber])}
                        />
                    </SplideSlide>
                ) : (
                    ""
                )}
            </>
        );
    }

    if (isLoading) {
        return <h1>Loading...</h1>;
    } else if (hasImages || hasVideo) {
        return (
            <section className="advertGallery">
                <Splide
                    options={mainOptions}
                    ref={mainRef}
                    className="advert__main__image"
                >
                    {generateSlides(data.image)}
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
