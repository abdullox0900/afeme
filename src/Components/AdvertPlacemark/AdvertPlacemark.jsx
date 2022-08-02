import React, { useContext } from "react";

// Import Yandex map
import { Placemark, Clusterer } from "react-yandex-maps";

// Import Components
import { Context as LangContext } from "../../Context/LangContext";
import CardTools from "../../Utils/cardTools";
import content from "../../Localization/Content";
import PlacemarkIcon from "../../Assets/Img/Icon/placemark-brand.svg";

function AdvertPlacemark({ data }) {

    const { lang, setLang } = useContext(LangContext);
    let i = 0;
    
    function showPlacemarks(advert) {

        if (advert.hasOwnProperty('latitude') && advert.hasOwnProperty('longitude')) {
            const {
                price,
                advertTitle,
                advertLink,
                advertType,
                advertAddress,
            } = CardTools(advert);
    
            i += 1;
            return (
                <Placemark
                    key={i}
                    index={advert.id}
                    geometry={[advert?.latitude, advert?.longitude]}
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
            );
        }
    }

    if (data) {
        return (
            <Clusterer
                options={{
                    groupByCoordinates: false,
                }}
            >
                {data.hasOwnProperty("latitude")
                    ? showPlacemarks(data)
                    : data.hasOwnProperty(0)
                    ? data.map((advert) => showPlacemarks(advert))
                    : ""}
            </Clusterer>
        );
    }
}
export default AdvertPlacemark;
