// Import => React and Hooks
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

// Import Yandex map
import {
    YMaps,
    Map,
    Placemark,
    ZoomControl,
    SearchControl,
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

import PlacemarkIcon from "../../Assets/Img/Icon/placemark-brand.svg";

function AdvertMap({ currentAdvert }) {
    const [zoom, setZoom] = useState(15);
    const coordinate = [40.747612, 72.359581];

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

    return (
        <>
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
                    <SearchControl />
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
                        geometry={coordinate}
                        options={{
                            openBalloonOnClick: true,
                            iconLayout: "default#image",
                            iconImageHref: PlacemarkIcon,
                            iconImageSize: [50, 50],
                            hideIconOnBalloonOpen: false,
                            iconImageOffset: [0, 0],
                        }}
                        properties={{
                            balloonContentHeader: advertTitle,
                            balloonContentBody:
                                currentAdvert.image.length > 0
                                    ? `<img 
                                            src=${currentAdvert?.image[0]?.url} alt=""
                                            width="240px"
                                            height="150px"
                                        />`
                                    : "",
                            balloonContentFooter: `${advertType} ${price}`,
                            hintContent: advertType,
                            balloonOffset: [0, 0],
                        }}
                    />
                </Map>
            </YMaps>
        </>
    );
}
export default AdvertMap;
