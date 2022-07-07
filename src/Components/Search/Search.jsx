// Import => React and React-Router-Dom
import React, { useState, useEffect, useContext } from "react";
import { useNavigate, NavLink as Link, useSearchParams } from "react-router-dom";
import axios from "axios";
// import searchIcon from "../../Assets/Img/search-icon.svg";

// Import => Mui
import { Box, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

// Import => Components
import { IPContext } from "../../Context/IPContext";
import { Context } from "../../Context/LangContext";
import content from "../../Localization/Content";
import "../Search/Search.scss";
import searchIcon from "../../Assets/Img/search-icon.svg";
import Container from "@mui/material";

function Search() {

    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const { lang, setLang } = useContext(Context);
    const { IP, setIP } = useContext(IPContext);
    const [term, setTerm] = useState(IP.region);
    const [regions, setRegions] = useState([]);
    const [region, setRegion] = useState("");
    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState("");
    const [room, setRoom] = useState("");
    const [fromMax, setFromMax] = useState("");
    const [toMin, setToMin] = useState("");

    const regionID = searchParams.get("region");
    const fromInput = document.querySelector("#frominput");
    const toInput = document.querySelector("#toInput");

    const termChange = (event) => {
        setTerm(event.target.value);
    };
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
        navigate(
            `/adverts?term=${term ? term : "null"}&region=${region ? region : "null"
            }&from=${priceFrom ? priceFrom : "null"}&to=${priceTo ? priceTo : "null"
            }&room=${room ? room : "null"}`
        );
    }
    useEffect(() => {
        const regions = async () => {
            try {
                const res = await axios.get("https://ali98.uz/api/regions");
                if (res) {
                    let data = res.data.data;
                    setRegions(data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        regions();
    }, []);

    return (
        <>
            <form action="/adverts" className="search__form" onSubmit={(e) => search(e)}>

                <Box className="form__content">
                    <Box className="filter__content">
                        <FormControl className="filter__items" sx={{ mr: 1 }}>
                            <InputLabel id="filter__select-label">
                                {content[lang].form_select_vil}
                            </InputLabel>
                            <Select
                                labelId="filter__select-label"
                                MenuProps={{
                                    disableScrollLock: true,
                                }}
                                id="filter__select"
                                autoWidth={false}
                                label={content[lang].form_select_vil}
                                value={region}
                                onChange={regionChange}
                                sx={{
                                    borderRadius: "10px",
                                    height: "45px",
                                }}
                            >
                                {regions.map((region) => (
                                    <MenuItem key={region.id} value={region.id}>
                                        {lang == "uz"
                                            ? region.name_uz
                                            : lang == "ru"
                                                ? region.name_ru
                                                : region.name_en}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl className="filter__items" sx={{ mr: 1 }}>
                            <InputLabel id="filter__select-label">
                                Kvartira
                            </InputLabel>
                            <Select
                                labelId="filter__select-label"
                                id="filter__select"
                                value={room}
                                MenuProps={{
                                    disableScrollLock: true,
                                }}
                                label="Kvartira"
                                onChange={roomChange}
                                sx={{
                                    borderRadius: "10px",
                                    height: "45px",
                                }}
                            >
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={"5+"}>5+</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className="filter__items">
                            <InputLabel id="filter__select-label">
                                {content[lang].adverd_room}
                            </InputLabel>
                            <Select
                                labelId="filter__select-label"
                                id="filter__select"
                                value={room}
                                MenuProps={{
                                    disableScrollLock: true,
                                }}
                                label={content[lang].adverd_room}
                                onChange={roomChange}
                                sx={{
                                    borderRadius: "10px",
                                    height: "45px",
                                }}
                            >
                                <MenuItem disabled value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={"5+"}>5+</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className="filter__items" sx={{ mr: 1, ml: 1 }}>
                            <input
                                type="number"
                                className="filter__input"
                                id="frominput"
                                min="0"
                                MenuProps={{
                                    disableScrollLock: true,
                                }}
                                max={fromMax}
                                onChange={fromMaxChange}
                                value={priceFrom}
                                placeholder={content[lang].priceFrom}
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
                                placeholder={content[lang].priceTo}
                            />
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
                            value={term}
                            onChange={termChange}
                        />
                    </Box>
                </Box>

                <div className="search__btn-wrap">
                    <button className="btn search__map-btn">Kartadan Izlash</button>
                    <Button
                        className="btn search__submit-btn"
                        type="submit"
                        variant="contained"
                    >
                        {content[lang].hero_search}
                    </Button>
                </div>
            </form>
        </>
    );
}
export default Search;
