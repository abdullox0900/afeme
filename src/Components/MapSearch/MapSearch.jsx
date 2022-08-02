import React, { useEffect, useState, useContext } from "react";

import ApiError from "../../Components/ApiError/ApiError";
import CardSkeleton from "../../Components/CardSkeleton/CardSkeleton";
import Cards from "../../Components/Card/Card";
import { SearchContext } from "../../Context/SearchContext";
import NoResults from "../NoResults/NoResults";

let url = process.env.REACT_APP_URL;

function MapSearch() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { searchTerms, setSearchTerms } = useContext(SearchContext);

    useEffect(() => {
        setIsLoading(true);

        fetch(`${url}filter`, {
            method: "POST",
            body: searchTerms,
        })
            .then((response) => response.text())
            .then((response) => {
                let newData = JSON.parse(response);
                if (!newData.hasOwnProperty("status")) {
                    setData(newData.data);
                } else {
                    setData([]);
                }
            })
            .catch(() => {
                setData([]);
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
                return <NoResults />;
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
