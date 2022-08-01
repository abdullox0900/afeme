// Import => React and Hooks
import React, { useEffect, useState } from "react";
import axios from "axios";
import useResize from "../../Utils/elementDimension";

// Import Yandex map
import {
    YMaps,
    Map,
    ZoomControl,
    TypeSelector,
    GeolocationControl,
    FullscreenControl,
    Placemark,
    Clusterer,
} from "react-yandex-maps";

// Import Components
import AdvertPlacemark from "../AdvertPlacemark/AdvertPlacemark";
import Spinner from "../Spinner/Spinner";
import "./AdvertMap.scss";

function AdvertMap({ advert = null, zoom = 11, coordinate = null }) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    let url = process.env.REACT_APP_URL;

    useEffect(() => {
        setIsLoading(true);
        if (!advert) {
            axios
                .post(`${url}filter`)
                .then((response) => {
                    let newData = response?.data.data;
                    if (newData) {
                        setData(newData);
                    } else {
                        setData(null);
                    }
                })
                .catch(() => {
                    setData(null);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            if (advert.hasOwnProperty("latitude") || advert.hasOwnProperty(0)) {
                setData(advert);
                setIsLoading(false);
            } else {
                setData(null);
            }
        }
    }, []);

    if (isLoading) {
        return (
            <div className="advertMapLoader">
                <Spinner />
            </div>
        );
    } else if (data) {
        if (!coordinate) {
            if (data.hasOwnProperty("latitude")) {
                coordinate = [data.latitude, data.longitude];
            } else if (data.hasOwnProperty(0)) {
                coordinate = [data[0].latitude, data[0].longitude];
            }
        }
        console.log(coordinate);
        return (
            <YMaps
                query={{
                    load: "geoObject.addon.balloon",
                }}
            >
                <Map
                    defaultState={{
                        center: coordinate,
                        zoom: zoom,
                        // behaviors: ["disable('scrollZoom')"],

                    }}
                    width="100%"
                    height="100%"
                >
                    <TypeSelector />
                    <ZoomControl />
                    <GeolocationControl />
                    <FullscreenControl />
                    <AdvertPlacemark data={data} />
                </Map>
            </YMaps>
        );
    }
}
export default AdvertMap;
