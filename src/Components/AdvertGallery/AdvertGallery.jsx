import React, { useEffect, useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import HeroImg1 from "../../Assets/Img/home-hero-1.jpg";
import HeroImg2 from "../../Assets/Img/home-hero-2.jpg";
import HeroImg3 from "../../Assets/Img/home-hero-3.jpg";
import HeroImg4 from "../../Assets/Img/home-hero-4.jpg";
import HeroImg5 from "../../Assets/Img/home-hero-5.jpg";
import HeroImg6 from "../../Assets/Img/home-hero-6.jpg";
import "./AdvertGallery.scss";

function AdvertGallery({ data, isLoading }) {

    const mainRef = useRef();
    const thumbsRef = useRef();
    const [hasImages, setHasImages] = useState(Array.isArray(data.image) && data.image.length > 0);

    useEffect(() => {
        if ( mainRef.current && thumbsRef.current && thumbsRef.current.splide ) {
            mainRef.current.sync( thumbsRef.current.splide );
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
        perPage: 3,
        width: '100%',
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

    
    function generateSlides(images) {
        let arr = [HeroImg1, HeroImg2, HeroImg3, HeroImg4, HeroImg5, HeroImg6]

        return arr.map((row) => (
            <SplideSlide>
                <img src={row} className="carousel__img" alt="" />
            </SplideSlide>
        ))
        
    }
    console.log(data);

    if (isLoading) {
        return (
            <h1>Loading...</h1>
        )
    } else if (hasImages) {
        return (
            <section className="advertGallery">
            <Splide
                options={mainOptions}
                ref={mainRef}
                className="advert__main__slide"
            >
                {generateSlides(data.image)}

    
            </Splide>

            <Splide
                options={thumbsOptions}
                ref={thumbsRef}
                className="splide__slide"
            >
                {generateSlides(data.image)}
            </Splide>
        </section>
        )
    } else {
        return (
            <h1>Rasmlar mavjud emas</h1>
        )
    }
}
export default AdvertGallery;
