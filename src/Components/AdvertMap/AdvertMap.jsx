// Import => React and Hooks
import React, { useEffect, useState, useContext, useRef } from "react";
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
} from "react-yandex-maps";

// Import Components
import AdvertPlacemark from "../AdvertPlacemark/AdvertPlacemark";
import Spinner from "../Spinner/Spinner";
import "./AdvertMap.scss";

function AdvertMap({ currentAdvert, zoom = 10 }) {
    
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let url = process.env.REACT_APP_URL;

    useEffect(() => {
        setIsLoading(true);
        axios
            .post(`${url}filter`)
            .then((response) => {
                let newData = response?.data.data;
                if (newData && newData?.length > 0) {
                    setData(response?.data.data);
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
    }, []);

    const coordinate = [currentAdvert.latitude, currentAdvert.longitude];

    if (isLoading) {
        return (
            <div className="advertMapLoader">
                <Spinner />
            </div>
        );
    } else if (data?.length > 0) {
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
