// Import => React
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Import => Mui
import { IconButton, Button } from "@mui/material";
import { Context } from "../../Context/LangContext";
import { UserContext } from "../../Context/UserContext";
import content from "../../Localization/Content";
import plusIcon from "../../Assets/Img/plus.svg";

function AdvertBtn() {

    const navigate = useNavigate();
    const { lang, setLang } = useContext(Context);
    const { user, setUser } = useContext(UserContext);

    function checkUser() {
        if (user.hasOwnProperty('data')) {
            navigate("/advertPage");
        } else {
            document.querySelector('.loginModal').classList.add('modal--open');
        }
    }

    return (
        <Button
            className="btn header__button add__advert"
            variant="contained"
            sx={{ py: 1, px: 1.5, minWidth: "120px" }}
            onClick={checkUser}
        >
            <img src={plusIcon} alt="" style={{marginRight: '6px'}} />
            {content[lang].add} 
        </Button>
    );
}
export default AdvertBtn;
