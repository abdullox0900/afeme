import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./Carousel.scss";


function Carousel({data, width = '100%', height = 'auto', slideWidth = 250, slideHeight = 140, autoplay = false, perPage = 4, autoWidth = true, speed = 2000, gap = '4rem'}) {
    
    return (
        <div className='our__partners'>
            <Splide aria-label="Our partners" options={{ width: width, height: height, autoplay: autoplay, perPage: perPage, speed: speed, gap: gap, rewind: true}}>
                <SplideSlide style={{width: slideWidth}}>
                    <img src={data.images[0]} alt=""/>
                </SplideSlide>
                <SplideSlide>
                    <img src={data.images[1]} alt=""/>
                </SplideSlide>
                <SplideSlide>
                    <img src={data.images[2]} alt=""/>
                </SplideSlide>
                <SplideSlide>
                    <img src={data.images[3]} alt=""/>
                </SplideSlide>
            </Splide>
        </div>
    );
}
export default Carousel;