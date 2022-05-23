import React from "react";
import Container from "../Container/Container";
import SearchBackground from "../../Assets/Img/header_banner.jpg";
import searchIcon from "../../Assets/Img/search-icon.svg";

import { Box, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import "../Search/Search.scss";

function Search() {
    
    const [price, setPrice] = React.useState('');
    const [room, setRoom] = React.useState('');

    const priceChange = (event) => {
        setPrice(event.target.value);
    };
    const roomChange = (event) => {
        setRoom(event.target.value);
    };

    return (
        <>
            <Box className="search">
                <Container>
                    <Box className="search__blog">
                        <h2 className="search__main-title">Toshkent shahridagi ko'chmas mulk</h2>

                        <form action="#" className="search__form">
                            <Box className="form__content">
                                <Box className="filter__content">
                                    <FormControl className="filter__items" sx={{mr: 1}}>
                                        <InputLabel id="filter__select-label">Price</InputLabel>
                                        <Select labelId="filter__select-label" id="filter__select" value={price} label="Price" onChange={priceChange}>
                                            <MenuItem value={'Cheap'}>Cheap</MenuItem>
                                            <MenuItem value={'Middle'}>Middle</MenuItem>
                                            <MenuItem value={'Expensive'}>Expensive</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl className="filter__items" sx={{width: 100}}>
                                        <InputLabel id="filter__select-label">Room</InputLabel>
                                        <Select labelId="filter__select-label" id="filter__select" value={room} label="Room" onChange={roomChange}>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                            <MenuItem value={'5+'}>5+</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box className="search__box" sx={{mr: 1}}>
                                    <span className="search__icon"><img src={searchIcon} alt="" /></span>
                                    <input type="text" className="input__search" placeholder="Search by filtering"/>
                                </Box>
                                <Button className="btn search__submit-btn" type="submit" variant="contained">Search</Button>
                            </Box>
                        </form>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default Search;
