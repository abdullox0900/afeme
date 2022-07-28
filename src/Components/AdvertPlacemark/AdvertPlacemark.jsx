import React, { useContext, useState } from "react";

// Import Yandex map
import { Placemark, Clusterer } from "react-yandex-maps";

// Import Components
import { Context as LangContext } from "../../Context/LangContext";
import { UserContext } from "../../Context/UserContext";
import { CurrencyContext } from "../../Context/CurrencyContext";
import CardTools from "../../Utils/cardTools";
import content from "../../Localization/Content";
import PlacemarkIcon from "../../Assets/Img/Icon/placemark-brand.svg";
import LoveBtn from "../LoveBtn/LoveBtn";

function AdvertPlacemark({ data }) {
    const { lang, setLang } = useContext(LangContext);
    const { currency, setCurrency } = useContext(CurrencyContext);
    const [price, setPrice] = useState("");
    const [advertTitle, setAdvertTitle] = useState("");
    const [advertLink, setAdvertLink] = useState("");
    const [advertType, setAdvertType] = useState("");
    const [advertTypeLink, setAdvertTypeLink] = useState("");
    const [advertTypeImg, setAdvertTypeImg] = useState("");
    const [advertAddress, setAdvertAddress] = useState("");
    
    let i = 0;
    if (data.length > 0) {
        
        return (
            <Clusterer
                options={{
                    groupByCoordinates: false,
                }}
            >
                {data.map((advert) => {

                    CardTools(
                        advert,
                        lang,
                        currency,
                        setPrice,
                        setAdvertTitle,
                        setAdvertLink,
                        setAdvertType,
                        setAdvertTypeImg,
                        setAdvertTypeLink,
                        setAdvertAddress,
                    );
                    i += 1;
                    console.log(advertLink);
                    return (
                        <Placemark
                            key={i}
                            index={advert.id}
                            geometry={[advert.latitude, advert.longitude]}
                            options={{
                                openBalloonOnClick: true,
                                iconLayout: "default#image",
                                iconImageHref: PlacemarkIcon,
                                iconImageSize: [26, 36],
                            }}
                            properties={{
                                balloonContentBody: `<div class="mapBaloon">
                                                <div class="mapBaloon__header">
                                                    <a href="${advertLink}" target="blank" mapBaloon__img__link>
                                                        <img src=${advert?.image[0]?.url} class="mapBaloon__img" alt=""/>
                                                    </a>
                                                </div>
                                                <div class="mapBaloon__main">
                                                    <h3 class="mapBaloon__title">${advertTitle}</h3>
                                                    <div class="mapBaloon__main__actions">
                                                        <p class="mapBaloon__price">${price}</p>
                                                    </div>
                                                </div>
                                                <div class="mapBaloon__footer">
                                                    <span class="mapBaloon__address">${advertAddress}, ${advert?.street}</span>
                                                    <a href="${advertLink}" class="mapBaloon__link">${content[lang].detailedView}</a>
                                                </div>
                                            </div>`,
                                hintContent: `<div class="mapBaloon__type">${advertType}</div>`,
                            }}
                        />
                    )
                })}
            </Clusterer>
        );
    }
}
export default AdvertPlacemark;
