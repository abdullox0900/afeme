import React from "react";
import Container from "../Container/Container";
import SearchBackground from "../../Assets/Img/header_banner.jpg";
import searchIcon from "../../Assets/Img/search-icon.svg";

import { Box, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import "../Search/Search.scss";

function Search() {
    
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <Box className="search">
                <Container>
                    <Box className="search__blog">
                        <h2 className="search__main-title">Toshkent shahridagi ko'chmas mulk</h2>

                        <form action="#" className="search__form">
                            <InputLabel id="filter__select-label">Age</InputLabel>
                            <Select labelId="filter__select-label" id="filter__select" value={age} label="Age" onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            <div className="search__box">
                                <span className="search__icon"><img src={searchIcon} alt="" /></span>
                                <input type="text" className="input__search" placeholder="Search by filtering"/>
                            </div>
                            
                            {/* <Button className="btn search__submit-btn" variant="contained">Search</Button> */}
                        </form>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default Search;
