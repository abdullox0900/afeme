// Import => React and Hooks
import React, { useState, useEffect, useContext } from "react";
import {
    useSearchParams,
    NavLink as Link,
    useLocation,
} from "react-router-dom";
import axios from "axios";

// Import => Components
import { Context } from "../../Context/LangContext";
import CardSkeleton from "../../Components/CardSkeleton/CardSkeleton";
import { Pagination, Grid } from "@mui/material";
import Container from "../../Components/Container/Container";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Cards from "../../Components/Card/Card";
import { CurrencyContext } from "../../Context/CurrencyContext";
import AfemePhone from "../../Components/AfemePhone/AfemePhone";
import Footer from "../../Components/Footer/Footer";
import ApiError from "../../Components/ApiError/ApiError";
import useWindowDimensions from "../../Utils/windowDimension";
import NoResults from "../../Components/NoResults/NoResults";

// Import => Style
import "./Adverts.scss";

let url = process.env.REACT_APP_URL;

function Adverts() {

    const [searchParams, setSearchParams] = useSearchParams();
    const { currency, setCurrency } = useContext(CurrencyContext);
    const { lang } = useContext(Context);
    const location = useLocation();

    const term = searchParams.get("term");
    const sale = searchParams.get("sale");
    const htype = searchParams.get("htype");
    const region = searchParams.get("region");
    const room = searchParams.get("room");
    const from = searchParams.get("from");
    const to = searchParams.get("to");

    const [data, setData] = useState([]);
    const [adverts, setAdverts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    let searchTerms = new FormData();
    searchTerms.append("keyword", term ? term : "");
    searchTerms.append("sale_id", sale ? sale : "");
    searchTerms.append("htype", htype ? htype : "");
    searchTerms.append("region_id", region ? region : "");
    searchTerms.append("room", room ? room : "");
    searchTerms.append("from", from ? from : "");
    searchTerms.append("to", to ? to : "");

    if (from && to) {
        if (from != '' && to != '') {
            searchTerms.append("price_type", currency === 'sum' ? 'som': currency);
        }
    }
    if (term && term != '') {
        searchTerms.append("lang", lang);
    }
    
    useEffect(() => {
        setIsLoading(true);

        fetch(`${url}filter?page=${currentPage}`, {
            method: "POST",
            body: searchTerms,
        })
            .then((response) => response.text())
            .then((response) => {
                let newData = JSON.parse(response);
                if (newData.data) {
                    setData(newData);
                    setAdverts(newData.data);
                    setTotalPages(newData.meta.last_page);
                } else {
                    setAdverts([]);
                }
            })
            .catch(() => {
                setAdverts([]);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [currentPage, term, htype, from, to, room, sale]);

    function showCards(amount) {
        if (isLoading) {
            return <CardSkeleton amount={amount}/>;
        } else if (adverts) {
            if (adverts.length > 0) {
                return adverts.map((row) => (
                    <Cards data={row} />
                ));
            } else {
                return <NoResults />
            }
        } else {
            return <ApiError />;
        }
    }

    function pagination() {
        const changePage = (e, value) => {
            if (currentPage !== value) {
                setCurrentPage(value);
                setIsLoading(true);
            }
        };

        if (adverts.length > 0) {
            return (
                <Grid sx={{ my: 3 }}>
                    <Pagination
                        count={totalPages}
                        color="primary"
                        size="large"
                        sx={{ display: "flex", justifyContent: "center" }}
                        onChange={(e, value) => changePage(e, value)}
                    />
                </Grid>
            );
        }
    }
    const { windowWidth } = useWindowDimensions();

    return (
        <>
            <Header />
            <Hero />
            <div className="adverts">
                <Container>
                    <div className="adverts__blog">
                        {showCards(6)}
                    </div>
                    {pagination()}
                    {windowWidth > 800 ? <AfemePhone /> : ""}
                </Container>
            </div>
            <Footer />
        </>
    );
}
export default Adverts;
