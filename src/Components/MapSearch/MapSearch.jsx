import React, { useEffect, useState, useContext } from "react";
import { NavLink as Link } from "react-router-dom";

import ApiError from "../../Components/ApiError/ApiError";
import CardSkeleton from "../../Components/CardSkeleton/CardSkeleton";
import Cards from "../../Components/Card/Card";
import notFoundIcon from "../../Assets/Img/Icon/not-found.svg";
import { SearchContext } from "../../Context/SearchContext";

function MapSearch() {
    const [data, setData] = useState([]);
    const [dataError, setDataError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { searchTerms, setSearchTerms } = useContext(SearchContext);
    const URL = `https://ali98.uz/api/filter`;
    console.log(searchTerms);

    useEffect(() => {
        setIsLoading(true);

        fetch(URL, {
            method: "POST",
            body: searchTerms,
        })
            .then((response) => response.text())
            .then((response) => {
                console.log(JSON.parse(response));
                let newData = JSON.parse(response);
                if (!newData.hasOwnProperty("status")) {
                    setData(newData.data);
                    console.log(data);
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
    }, [searchTerms]);

    function showCards(amount) {
        if (isLoading) {
            return <CardSkeleton amount={amount} />;
        } else if (data) {
            if (data.length > 0) {
                return data.map((row) => <Cards data={row} />);
            } else {
                return (
                    <div className="noResults">
                        <img src={notFoundIcon} alt="" />
                        <div className="noResults__content">
                            <h3 className="noResults__title">
                                Hozircha bu so'rov bo'yicha hech qanday e'lon
                                qo'yilmagan
                            </h3>
                            <ul style={{ padding: 0 }}>
                                <li
                                    className="noResults__text"
                                    style={{ listStyle: "inside" }}
                                >
                                    Filterda biror narsani o'zgartirib ko'ring
                                </li>
                                <li
                                    className="noResults__text"
                                    style={{ listStyle: "inside" }}
                                >
                                    Filterni tozalashga harakat qilib ko'ring
                                </li>
                                <li
                                    className="noResults__text"
                                    style={{ listStyle: "inside" }}
                                >
                                    <Link to={"/map"}>Xarita</Link> orqali
                                    qidiring
                                </li>
                            </ul>
                        </div>
                    </div>
                );
            }
        } else {
            return <ApiError />;
        }
    }

    return (
        <div className="searchMap__adverts">
            <h3 className="searchMap__title">Qidiruv natijalari</h3>
            <div className="searchMap__cards">{showCards(4)}</div>
        </div>
    );
}
export default MapSearch;
