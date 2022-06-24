// Import => React
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Import => Style Components
import "@splidejs/react-splide/css";
import "./Carousel.scss";

function Carousel(
    {
        data,
        slideWidth = "auto",
        type = "slide",
        autoplay = false,
        rewind = false,
        perPage = 3,
        speed = 2000,
        gap = "4rem",
    },
    breakpoints = {
        850: { perPage: 2 },
        550: { perPage: 1 },
    }
) {
    const root = document.querySelector(":root");
    let computedStyle = getComputedStyle(root);
    root.style.setProperty("--sliderWidth", slideWidth);

    return (
        <div className="our__partners">
            <Splide
                options={{
                    width: "100%",
                    height: "auto",
                    breakpoints: breakpoints,
                    type: type,
                    autoplay: autoplay,
                    perPage: perPage,
                    speed: speed,
                    gap: gap,
                    rewind: rewind,
                    autoWidth: true,
                }}
            >
                <SplideSlide style={{ width: slideWidth }}>
                    <img
                        src={data.images[0]}
                        className="splide__img"
                        alt=""
                    />
                </SplideSlide>
                <SplideSlide>
                    <img
                        src={data.images[1]}
                        className="splide__img"
                        alt=""
                    />
                </SplideSlide>
                <SplideSlide>
                    <img
                        src={data.images[2]}
                        className="splide__img"
                        alt=""
                    />
                </SplideSlide>
                <SplideSlide>
                    <img
                        src={data.images[3]}
                        className="splide__img"
                        alt=""
                    />
                </SplideSlide>
            </Splide>
        </div>
    );
}
export default Carousel;