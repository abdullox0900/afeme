// Import => React and Hooks
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

// Import => Components
import CardSkeleton from "../../Components/CardSkeleton/CardSkeleton";
import { Pagination, Grid } from "@mui/material";
import Container from "../../Components/Container/Container";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Cards from "../../Components/Card/Card";
import AfemePhone from "../../Components/AfemePhone/AfemePhone";
import Footer from "../../Components/Footer/Footer";
import ApiError from "../../Components/ApiError/ApiError";
import useWindowDimensions from "../../Utils/windowDimension";

// Import => Style
import "./Adverts.scss";

function Adverts() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const term = searchParams.get("term");
    const htype = searchParams.get("htype");
    const regionID = searchParams.get("region");
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const room = searchParams.get("room");
    const sale = searchParams.get("sale");

    const [formData, setFormData] = useState();
    const [data, setData] = useState([]);
    const [adverts, setAdverts] = useState([]);
    const [dataError, setDataError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const URL = `https://ali98.uz/api/filter`;

    let searchTerms = new FormData();
    searchTerms.append('keyword', term ? term : '');
    searchTerms.append('region_id', regionID ? regionID : '');
    searchTerms.append('htype', htype ? htype : '');
    searchTerms.append('room', room ? room : '');
    searchTerms.append('sale_id', sale ? sale : '');
    
    useEffect(() => {
        setFormData(searchTerms);
        fetch(URL, {
            method: "POST",
            body: searchTerms
        })
        .then(response => response.text())
        .then((response) => {
            let newData = JSON.parse(response);
            if (newData.status == true || newData.status == 200) {
                setData(newData);
                setAdverts(newData.data);
                console.log(data);
                // setTotalPages(newData.meta.last_page + 1);
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
    }, [currentPage]);

    function showCards(amount) {
        if (isLoading) {
            return <CardSkeleton amount={amount} fullCard={true} />;

        } else if (adverts.length > 0) {
            
            return adverts.map((row) => {
                return <Cards data={row} fullCard={true} />;
            });
        } else {
            return <ApiError />;
        }
    }

    function pagination() {
        const changePage = (e, value) => {
            setCurrentPage(value - 1);
            setIsLoading(true);
        };

        if (adverts.length > 0) {
            return (
                <Grid sx={{ my: 3 }} >
                    <Pagination
                        count={totalPages}
                        color="primary"
                        size="large"
                        sx={{ display: 'flex', justifyContent: "center" }}
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
                    {windowWidth > 800 ? (<AfemePhone />) : ''}
                </Container>
            </div>
            <Footer />
        </>
    );
}
export default Adverts;
