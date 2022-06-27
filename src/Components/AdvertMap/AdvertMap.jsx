// Import => React and Hooks
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

// Import Yandex map
import {
    YMaps,
    Map,
    Placemark,
    ZoomControl,
    TypeSelector,
    ListBox,
    ListBoxItem,
    GeolocationControl,
    FullscreenControl,
} from "react-yandex-maps";

// Import Components
import { Context as LangContext } from "../../Context/LangContext";
import { UserContext } from "../../Context/UserContext";
import { CurrencyContext } from "../../Context/CurrencyContext";
import CardTools from "../../Utils/cardTools";
import AdvertGallery from "../AdvertGallery/AdvertGallery";
import Spinner from "../Spinner/Spinner";

import PlacemarkIcon from "../../Assets/Img/Icon/placemark-brand.svg";

function AdvertMap({ currentAdvert }) {

    const DefaultZoom = 3;
    const [data, setData] = useState([]);
    const [dataError, setDataError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const URL = `https://ali98.uz/api/post`;

    const [hasImages, setHasImages] = useState(
        Array.isArray(currentAdvert.image) && currentAdvert.image.length > 0
    );
    const { lang, setLang } = useContext(LangContext);
    const { currency, setCurrency } = useContext(CurrencyContext);
    const [price, setPrice] = useState("");
    const [advertTitle, setAdvertTitle] = useState("");
    const [advertLink, setAdvertLink] = useState("");
    const [advertType, setAdvertType] = useState("");
    const [advertTypeImg, setAdvertTypeImg] = useState("");
    const [advertAddress, setAdvertAddress] = useState("");
    const [advertCity, setAdvertCity] = useState("");

    useEffect(() => {
        const result = axios
            .get(URL)
            .then((response) => {
                let dataStatus = response.status;
                if (dataStatus == true || dataStatus == 200) {
                    setData(response.data.data);
                } else {
                    setDataError(true);
                }
            })
            .catch((error) => {
                setDataError(true);
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    CardTools(
        currentAdvert,
        lang,
        currency,
        setPrice,
        setAdvertTitle,
        setAdvertLink,
        setAdvertType,
        setAdvertTypeImg,
        setAdvertAddress,
        setAdvertCity
    );
    const [zoom, setZoom] = useState(DefaultZoom);
    const coordinate = [currentAdvert.latitude, currentAdvert.longitude];

    function showPlacemarks() {
        return data.map((advert) => {
            if (advert.latitude && advert.longitude) {
                console.log(advert);
                return (
                    <Placemark
                        key={advert.id}
                        geometry={[advert.latitude, advert.longitude]}
                        options={{
                            openBalloonOnClick: true,
                            iconLayout: "default#image",
                            iconImageHref: PlacemarkIcon,
                            iconImageSize: [50, 50],
                            // iconImageOffset: [0, 0],
                        }}
                        // properties={{
                        //     balloonContentHeader: advertTitle,
                        //     balloonContentBody:
                        //         advert.image.length > 0
                        //             ? `<img 
                        //                 src=${advert?.image[0]?.url} alt=""
                        //                 width="240px"
                        //                 height="150px"
                        //             />`
                        //             : "",
                        //     balloonContentFooter: `${advertType} ${price}`,
                        //     hintContent: advertType,
                        //     // balloonOffset: [0, 0],
                        // }}
                    />
                )
            };
        });
    }

    if (isLoading) {
        return <Spinner />
    } else if (data.length > 0) {
        return (
            <YMaps>
                <Map
                    defaultState={{
                        center: coordinate,
                        zoom: zoom,
                        // behaviors: ["disable('scrollZoom')"],
                    }}
                    width="100%"
                    height="400px"
                >
                    <TypeSelector />
                    <ZoomControl />
                    <GeolocationControl />
                    <FullscreenControl />
                    <ListBox
                        data={{
                            content: "Select city",
                        }}
                    >
                        <ListBoxItem
                            data={{
                                content: "Moscow",
                            }}
                        />
                        <ListBoxItem
                            data={{
                                content: "Saint Petersburg",
                            }}
                        />
                    </ListBox>
                    <Placemark
                        key={currentAdvert.id}
                        geometry={coordinate}
                        options={{
                            openBalloonOnClick: true,
                            iconLayout: "default#image",
                            iconImageHref: PlacemarkIcon,
                            iconImageSize: [50, 50],
                            // iconImageOffset: [0, 0],
                        }}
                        properties={{
                            balloonContentHeader: "bir nima",
                            balloonContentBody: "qwerty",
                            balloonContentFooter: "$fgg",
                            hintContent: 'hggh',
                            // balloonContentHeader: advertTitle,
                            // balloonContentBody:
                            //     currentAdvert.image.length > 0
                            //         ? `<img 
                            //             src=${currentAdvert?.image[0]?.url} alt=""
                            //             width="240px"
                            //             height="150px"
                            //         />`
                            //         : "",
                            // balloonContentFooter: `${advertType} ${price}`,
                            // hintContent: advertType,
                            // balloonOffset: [0, 0],
                        }}
                    />
                    {showPlacemarks()}
                </Map>
            </YMaps>
        );
    }
}
export default AdvertMap;
