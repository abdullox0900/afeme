// Import => React
import React, { useState, useContext } from "react";
import { NavLink as Link } from "react-router-dom";

// Import => Mui
import { IconButton, Button } from "@mui/material";
import { Context } from "../../Context/LangContext";
import content from "../../Localization/Content";
import plusIcon from "../../Assets/Img/plus.svg";

function AdvertBtn() {

    const { lang, setLang } = useContext(Context);

    return (
        <Link to={"/advertPage"}>
            <Button
                className="btn header__button add__advert"
                variant="contained"
                sx={{ py: 1, px: 1.5 }}
            >
                <img src={plusIcon} alt="" style={{marginRight: '6px'}} />
                {content[lang].add}
            </Button>
        </Link>
    );
}
export default AdvertBtn;
