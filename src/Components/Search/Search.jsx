import React, { useState, useEffect } from "react";
import { useNavigate, NavigateProps } from "react-router-dom";
import axios from "axios";
import Redirect from "react-router";
import searchIcon from "../../Assets/Img/search-icon.svg";

import { Box, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import "../Search/Search.scss";

function Search() {
    const navigate = useNavigate();
    const URL = "https://ali98.uz/api/filter";
    const [data, setData] = useState(null);
    const [regions, setRegions] = useState([]);
    const [region, setRegion] = useState("");
    const [priceFrom, setPriceFrom] = useState(0);
    const [priceTo, setPriceTo] = useState("");
    const [room, setRoom] = useState("");
    const [fromMax, setFromMax] = useState("");
    const [toMin, setToMin] = useState("");

    const fromInput = document.querySelector("#frominput");
    const toInput = document.querySelector("#toInput");

    const roomChange = (event) => {
        setRoom(event.target.value);
    };
    const regionChange = (event) => {
        setRegion(event.target.value);
    };
    const fromMaxChange = (e) => {
        setToMin(e.target.value);
        setPriceFrom(e.target.value);
    };
    const toMinChange = (e) => {
        setFromMax(e.target.value);
        setPriceTo(e.target.value);
    };

    let formData = new FormData();
    formData.append("region", region);
    formData.append("price_from", priceFrom);
    formData.append("price_to", priceTo);
    formData.append("room", room);

    function search(e) {
        e.preventDefault();
        getData();
    }
    function getData() {
        const result = axios
        .post(URL, formData)
        .then((response) => {
            let data = response.data;
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        const regions = async () => {
            try {
                const res = await axios.get("https://ali98.uz/api/regions");
                if (res) {
                    let data = res.data.data;
                    setRegions(data);
                } else {
                    alert("xato");
                }
            } catch (error) {
                console.log(error);
            }
        };
        regions();
    }, []);

    return (
        <>
            <form action="#" className="search__form">
                <Box className="form__content">
                    <Box className="filter__content">
                        <FormControl className="filter__items" sx={{ mr: 1 }}>
                            <InputLabel id="filter__select-label">
                                Viloyat
                            </InputLabel>
                            <Select
                                labelId="filter__select-label"
                                id="filter__select"
                                autoWidth={false}
                                label="Viloyat"
                                value={region}
                                onChange={regionChange}
                                sx={{
                                    borderRadius: '10px',
                                    height: '45px'
                                }}>
                                {regions.map((region) => (
                                    <MenuItem key={region.id} value={region.id}>
                                        {region.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl className="filter__items" sx={{ mr: 1 }}>
                            <input
                                type="number"
                                className="filter__input"
                                id="frominput"
                                min="0"
                                max={fromMax}
                                onChange={fromMaxChange}
                                value={priceFrom}
                                placeholder="1000$ dan"
                            />
                        </FormControl>
                        <FormControl className="filter__items" sx={{ mr: 1 }}>
                            <input
                                type="number"
                                className="filter__input"
                                id="toInput"
                                min={toMin}
                                onChange={toMinChange}
                                value={priceTo}
                                placeholder="2000$ gacha"
                            />
                        </FormControl>
                        <FormControl className="filter__items">
                            <InputLabel id="filter__select-label">
                                Xona
                            </InputLabel>
                            <Select
                                labelId="filter__select-label"
                                id="filter__select"
                                value={room}
                                label="Xona"
                                onChange={roomChange} 
                                sx={{
                                    borderRadius: '10px',
                                    height: "45px"
                                }}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={"5+"}>5+</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box className="search__box" sx={{ mr: 1 }}>
                        <span className="search__icon">
                            <img src={searchIcon} alt="" />
                        </span>
                        <input
                            type="text"
                            className="input__search"
                            placeholder="Search by filtering"
                        />
                    </Box>
                    <Button
                        className="btn search__submit-btn"
                        type="submit"
                        onClick={(e) => search(e)}
                        variant="contained"
                    >
                        Search
                    </Button>
                </Box>
            </form>
        </>
    );
}
export default Search;
