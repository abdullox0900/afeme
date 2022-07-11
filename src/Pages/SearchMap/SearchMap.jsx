import React, { useEffect, useState, useContext } from "react";

import Header from "../../Components/Header/Header";
import Search from "../../Components/Search/Search";
import AdvertMap from "../../Components/AdvertMap/AdvertMap"
import { IPContext } from "../../Context/IPContext";

function SearchMap() {

    const { IP, setIP } = useContext(IPContext);
    console.log(IP.latitude);

    return (
        <>
            <Header />
            <Search />
            <div className="searchMap" id="searchMap" style={{height: '80vh', display: 'flex'}}>
                <AdvertMap currentAdvert={IP} zoom={8} />

            </div>
        </>
    )
}
export default SearchMap