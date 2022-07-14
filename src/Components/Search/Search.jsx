// Import => React and React-Router-Dom
import React, { useState, useEffect, useContext, useRef } from "react";
import {
    useNavigate,
    NavLink as Link,
    useSearchParams,
} from "react-router-dom";
import axios from "axios";
// import searchIcon from "../../Assets/Img/search-icon.svg";

// Import => Mui
import { Box, Button, Select, MenuItem, FormControl, InputLabel, Modal, Container } from "@mui/material";

// Import => Components
import { IPContext } from "../../Context/IPContext";
import { Context } from "../../Context/LangContext";
import content from "../../Localization/Content";
import "../Search/Search.scss";
import searchIcon from "../../Assets/Img/search-icon.svg";
import { SearchContext } from "../../Context/SearchContext";

function Search({ map = false }) {

    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const { lang, setLang } = useContext(Context);
    const { IP, setIP } = useContext(IPContext);
    const [term, setTerm] = useState(IP.region);
    const [sales, setSales] = useState([]);
    const [htypes, setHtypes] = useState([]);
    const [sale, setSale] = useState("");
    const [htype, setHtype] = useState("");
    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState("");
    const [room, setRoom] = useState("");
    const [fromMax, setFromMax] = useState("");
    const [toMin, setToMin] = useState(0);
    const { searchTerms, setSearchTerms } = useContext(SearchContext);

    const regionID = searchParams.get("region");
    const fromInput = document.querySelector("#frominput");
    const toInput = document.querySelector("#toInput");
    const [modalOpen, setModalOpen] = React.useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    const termChange = (event) => {
        setTerm(event.target.value);
    };
    const roomChange = (event) => {
        setRoom(event.target.value);
    };
    const salesChange = (event) => {
        setSale(event.target.value);
    };
    const htypeChange = (event) => {
        setHtype(event.target.value);
    };
    const fromMaxChange = (e) => {
        setToMin(e.target.value);
        setPriceFrom(e.target.value);
    };
    const toMinChange = (e) => {
        setFromMax(e.target.value);
        setPriceTo(e.target.value);
    };

    const Clear = () => {
        setSale("");
        setHtype("");
        setRoom("");
        setToMin("");
        setPriceFrom("");
        setFromMax("");
        setPriceTo("");
        setTerm("");
    };
    useEffect(() => {}, []);

    function search(e, map) {
        e.preventDefault();
        if (!map) {
            navigate(
                `/adverts?${sale ? "&sale=" + sale : ""
                }${htype ? "&htype=" + htype : ""
                }${room ? "&room=" + room : ""
                }${priceFrom ? "&from=" + priceFrom : ""
                }${priceTo ? "&to=" + priceTo : ""
                }${term ? "term=" + term : ""}`
            );
        } else {
            let formData = new FormData();
            formData.append("keyword", term);
            formData.append("sale_id", sale);
            formData.append("htype", htype);
            formData.append("room", room);
            formData.append("from", priceFrom);
            formData.append("to", priceTo);
            console.log({sale, htype, room, priceFrom, priceTo, term});
            setSearchTerms(formData);
        }
    }
    useEffect(() => {
        const salesData = async () => {
            try {
                const res = await axios.get("https://ali98.uz/api/sales");
                if (res) {
                    let data = res.data.data;
                    setSales(data);
                }
            } catch (error) {}
        };
        salesData();

        axios.get("https://ali98.uz/api/htype").then((response) => {
            if (response.hasOwnProperty("data")) {
                setHtypes(response.data.data);
            }
        });
    }, []);

    function filterModal() {
        return (
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                className="filterModal"
                id="filterModal"
            >
                <Box className="filterModal__blog">
                    <h3 className="filterModal__title">Filterlar</h3>
                    <Box className="filterModal__content">
                        <FormControl className="filter__items" sx={{ mr: 1 }}>
                            <InputLabel id="filter__select-label">
                                {"Sotish turi"}
                            </InputLabel>
                            <Select
                                labelId="filter__select-label"
                                MenuProps={{
                                    disableScrollLock: true,
                                }}
                                id="filter__select"
                                autoWidth={false}
                                label={"Sotish turi"}
                                value={sale}
                                onChange={salesChange}
                                sx={{
                                    borderRadius: "10px",
                                    height: "45px",
                                }}
                            >
                                {sales.map((sale) => (
                                    <MenuItem key={sale.id} value={sale.id}>
                                        {lang == "uz"
                                            ? sale.name_uz
                                            : lang == "ru"
                                            ? sale.name_ru
                                            : sale.name_en}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl className="filter__items" sx={{ mr: 1 }}>
                            <InputLabel id="filter__select-label">
                                {"Uy turi"}
                            </InputLabel>
                            <Select
                                labelId="filter__select-label"
                                MenuProps={{
                                    disableScrollLock: true,
                                }}
                                id="filter__select"
                                autoWidth={false}
                                label={"Uy turi"}
                                value={htype}
                                onChange={htypeChange}
                                sx={{
                                    borderRadius: "10px",
                                    height: "45px",
                                }}
                            >
                                {htypes.map((htype) => (
                                    <MenuItem key={htype.id} value={htype.id}>
                                        {lang == "uz"
                                            ? htype.name_uz
                                            : lang == "ru"
                                            ? htype.name_ru
                                            : htype.name_en}
                                    </MenuItem>
                                ))}
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
                                <MenuItem disabled value={2}>
                                    2
                                </MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={"5+"}>5+</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl
                            className="filter__items"
                            sx={{ mr: 1, ml: 1 }}
                        >
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

                        <div className="search__btn-wrap">
                            <Button
                                type="reset"
                                variant="contained"
                                className="btn search__submit-btn search__reset-btn"
                                onClick={() => Clear()}
                            >
                                Tozalash
                            </Button>
                            <Button
                                className="btn search__submit-btn"
                                type="button"
                                variant="contained"
                                onClick={(e) => search(e)}
                            >
                                {content[lang].hero_search}
                            </Button>
                        </div>
                    </Box>
                </Box>
            </Modal>
        );
    }

    if (!map) {
        return (
            <>
                <form
                    action="/adverts"
                    className="search__form"
                    onSubmit={(e) => search(e)}
                >
                    <Box className="form__content">
                        <Box className="filter__content">
                            <FormControl
                                className="filter__items"
                                sx={{ mr: 1 }}
                            >
                                <InputLabel id="filter__select-label">
                                    {"Sotish turi"}
                                </InputLabel>
                                <Select
                                    labelId="filter__select-label"
                                    MenuProps={{
                                        disableScrollLock: true,
                                    }}
                                    id="filter__select"
                                    autoWidth={false}
                                    label={"Sotish turi"}
                                    value={sale}
                                    onChange={salesChange}
                                    sx={{
                                        borderRadius: "10px",
                                        height: "45px",
                                    }}
                                >
                                    {sales.map((region) => (
                                        <MenuItem
                                            key={region.id}
                                            value={region.id}
                                        >
                                            {lang == "uz"
                                                ? region.name_uz
                                                : lang == "ru"
                                                ? region.name_ru
                                                : region.name_en}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <FormControl
                                className="filter__items"
                                sx={{ mr: 1 }}
                            >
                                <InputLabel id="filter__select-label">
                                    {"Uy turi"}
                                </InputLabel>
                                <Select
                                    labelId="filter__select-label"
                                    MenuProps={{
                                        disableScrollLock: true,
                                    }}
                                    id="filter__select"
                                    autoWidth={false}
                                    label={"Uy turi"}
                                    value={htype}
                                    onChange={htypeChange}
                                    sx={{
                                        borderRadius: "10px",
                                        height: "45px",
                                    }}
                                >
                                    {htypes.map((htype) => (
                                        <MenuItem
                                            key={htype.id}
                                            value={htype.id}
                                        >
                                            {lang == "uz"
                                                ? htype.name_uz
                                                : lang == "ru"
                                                ? htype.name_ru
                                                : htype.name_en}
                                        </MenuItem>
                                    ))}
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
                                    <MenuItem disabled value={2}>
                                        2
                                    </MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={"5+"}>5+</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl
                                className="filter__items"
                                sx={{ mr: 1, ml: 1 }}
                            >
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
                            <FormControl
                                className="filter__items"
                                sx={{ mr: 1 }}
                            >
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
                                placeholder="Manzil, shahar, viloyat, qishloq va h.k "
                                value={term}
                                onChange={termChange}
                            />
                        </Box>
                    </Box>

                    <div className="search__btn-wrap">
                        <Link to={"/map"} className="btn search__map-btn">
                            Kartadan Izlash
                        </Link>
                        <Button
                            type="reset"
                            variant="contained"
                            className="btn search__submit-btn search__reset-btn"
                            style={{ marginRight: "10px" }}
                            onClick={Clear}
                        >
                            Tozalash
                        </Button>
                        <Button
                            type="button"
                            variant="contained"
                            className="btn search__submit-btn search__filter-btn"
                            style={{ marginRight: "10px" }}
                            onClick={handleModalOpen}
                        >
                            Filter
                        </Button>
                        <Button
                            className="btn search__submit-btn"
                            type="submit"
                            variant="contained"
                        >
                            {content[lang].hero_search}
                        </Button>
                    </div>
                </form>
                {filterModal()}
            </>
        );
    } else
        return (
            <div className="mapSearch">
                <Container>
                    <form className="mapSearch__filter">
                        <Box className="search__box" sx={{ mr: 1 }}>
                            <span className="search__icon">
                                <img src={searchIcon} alt="" />
                            </span>
                            <input
                                type="text"
                                className="input__search"
                                placeholder="Manzil, shahar, viloyat, qishloq va h.k "
                                value={term}
                                onChange={termChange}
                            />
                        </Box>
                        <FormControl className="filter__items" sx={{ mr: 1 }}>
                            <InputLabel id="filter__select-label">
                                {"Sotish turi"}
                            </InputLabel>
                            <Select
                                labelId="filter__select-label"
                                MenuProps={{
                                    disableScrollLock: true,
                                }}
                                id="filter__select"
                                label={"Sotish turi"}
                                value={sale}
                                onChange={salesChange}
                                sx={{
                                    borderRadius: "10px",
                                    height: "45px",
                                }}
                            >
                                {sales.map((region) => (
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
                                {"Uy turi"}
                            </InputLabel>
                            <Select
                                labelId="filter__select-label"
                                MenuProps={{
                                    disableScrollLock: true,
                                }}
                                id="filter__select"
                                label={"Uy turi"}
                                value={htype}
                                onChange={htypeChange}
                                sx={{
                                    borderRadius: "10px",
                                    height: "45px",
                                }}
                            >
                                {htypes.map((htype) => (
                                    <MenuItem key={htype.id} value={htype.id}>
                                        {lang == "uz"
                                            ? htype.name_uz
                                            : lang == "ru"
                                            ? htype.name_ru
                                            : htype.name_en}
                                    </MenuItem>
                                ))}
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
                                <MenuItem disabled value={2}>
                                    2
                                </MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={"5+"}>5+</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl
                            className="filter__items"
                            sx={{ mr: 1, ml: 1 }}
                        >
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
                        <div className="search__btn-wrap">
                            <Button
                                type="reset"
                                variant="contained"
                                className="btn search__submit-btn search__reset-btn"
                                onClick={() => Clear()}
                            >
                                Tozalash
                            </Button>
                            <Button
                                className="btn search__submit-btn"
                                type="submit"
                                variant="contained"
                                onClick={(e) => search(e, true)}
                            >
                                {content[lang].hero_search}
                            </Button>
                        </div>
                    </form>
                </Container>
            </div>
        );
}
export default Search;
