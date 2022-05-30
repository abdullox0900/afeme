import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./Carousel.scss";
import Partners1 from "../../Assets/Img/partners1.jpg";
import Partners2 from "../../Assets/Img/partners2.jpg";
import Partners3 from "../../Assets/Img/partners3.jpg";
import Partners4 from "../../Assets/Img/partners4.jpg";


function Carousel() {
    return (
        <div className='our__partners'>
            <Splide aria-label="Our partners" options={{
            type: 'loop', perPage: 4, gap: '4rem', autoWidth: true, perMove: 1, speed: 2000}}>
                <SplideSlide>
                    <img src={Partners1} alt="Our partners"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={Partners2} alt="Our partners"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={Partners3} alt="Our partners"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={Partners4} alt="Our partners"/>
                </SplideSlide>
            </Splide>
        </div>
    );
}
export default Carousel;