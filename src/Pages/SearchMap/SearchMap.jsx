import React, { useEffect, useState, useContext, createContext } from "react";
import { NavLink as Link } from "react-router-dom";

import Header from "../../Components/Header/Header";
import Search from "../../Components/Search/Search";
import { Provider as SearchContext } from "../../Context/SearchContext";
import { IPContext } from "../../Context/IPContext";
import AdvertMap from "../../Components/AdvertMap/AdvertMap";
import MapSearch from "../../Components/MapSearch/MapSearch";
import useWindowDimensions from "../../Utils/windowDimension";

import "./SearchMap.scss";

function SearchMap() {
    const { IP, setIP } = useContext(IPContext);
    const { windowWidth } = useWindowDimensions();

    return (
        <SearchContext>
            <div className="searchMap" id="searchMap">
                <Header />
                <Search map={windowWidth > 1000 ? true : false} />
                <div className="searchMap__content">
                    <div className="searchMap__map">
                        <AdvertMap currentAdvert={IP} zoom={8} />
                    </div>
                    {windowWidth > 666 ? <MapSearch /> : ''}
                </div>
            </div>
        </SearchContext>
    );
}
export default SearchMap;
