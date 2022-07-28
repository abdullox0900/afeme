import axios from 'axios';
import React, { useEffect, useState } from 'react'

import './Carousel.scss'

let url = process.env.REACT_APP_URL;
function Carousel() {
    const [portDataImg, setPortDataImg] = useState([]);

    useEffect(() => {
        axios.get(`${url}partnericons`).then((res) => {
            const resdataImg = res.data;
            setPortDataImg(resdataImg);
        });
    }, []);
    return (
        <section id="brands">
            <div class="marquee">
                <div class="marquee--inner">
                    {portDataImg.map(value =>
                        <span key={value.name}>
                            <div class="orb">
                                <a href={value.url}>
                                    <img src={value.icon} />
                                </a>
                            </div>
                        </span>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Carousel