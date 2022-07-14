// Import => React and Hooks
import React, { useState, useEffect, useContext } from "react";
import {
    useNavigate,
    useSearchParams,
    NavLink as Link,
    useLocation,
} from "react-router-dom";
import axios from "axios";

// Import => Components
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
import notFoundIcon from "../../Assets/Img/Icon/not-found.svg";

// Import => Style
import "./Adverts.scss";

function Adverts() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const { currency, setCurrency } = useContext(CurrencyContext);
    const location = useLocation();

    const term = searchParams.get("term");
    const sale = searchParams.get("sale");
    const htype = searchParams.get("htype");
    const room = searchParams.get("room");
    const from = searchParams.get("from");
    const to = searchParams.get("to");

    const [formData, setFormData] = useState();
    const [data, setData] = useState([]);
    const [adverts, setAdverts] = useState([]);
    const [dataError, setDataError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const URL = `https://ali98.uz/api/filter?page=${currentPage}`;

    let searchTerms = new FormData();
    searchTerms.append("keyword", term ? term : "");
    searchTerms.append("sale_id", sale ? sale : "");
    searchTerms.append("htype", htype ? htype : "");
    searchTerms.append("room", room ? room : "");
    searchTerms.append("from", from ? from : "");
    searchTerms.append("to", to ? to : "");
    // searchTerms.append("perpage", 10);
    if (from && to) {
        if (from != '' && to != '') {
            searchTerms.append("price_type", currency == 'sum' ? 'som': currency);
        }
    }
    
    useEffect(() => {
        setFormData(searchTerms);
        setIsLoading(true);

        fetch(URL, {
            method: "POST",
            body: searchTerms,
        })
            .then((response) => response.text())
            .then((response) => {
                let newData = JSON.parse(response);
                if (!newData.hasOwnProperty('status')) {
                    setData(newData);
                    setAdverts(newData.data);
                    setTotalPages(newData.meta.last_page);
                } else {
                    setDataError(true);
                }
            })
            .catch((error) => {
                setDataError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [currentPage, term, htype, from, to, room, sale ]);

    function showCards(amount) {
        if (isLoading) {
            return <CardSkeleton amount={amount} fullCard={true} />;
        } else if (adverts) {
            
            if (adverts.length > 0) {
                return adverts.map((row) => (
                    <Cards data={row} fullCard={true} />
                ));
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

    function pagination() {
        const changePage = (e, value) => {
            if (currentPage != value) {
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
                    {showCards(6)}
                    {pagination()}
                    {windowWidth > 800 ? <AfemePhone /> : ""}
                </Container>
            </div>
            <Footer />
        </>
    );
}
export default Adverts;
