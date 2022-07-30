import React, { useContext } from "react";
import { NavLink as Link } from "react-router-dom";

import content from "../../Localization/Content";
import { Context } from "../../Context/LangContext";
import { IconButton } from "@mui/material";
import callIcon from "../../Assets/Img/call.svg";
import messageIcon from "../../Assets/Img/message.svg";
import "./UserContactButtons.scss"

export default function UserContactButtons({ data, isLoading = null }) {

    const userID = localStorage.getItem("user_id");
    const { lang } = useContext(Context); 
    let ownerChat = `/chat#${data?.id}`;

    if (!isLoading) {
        if (userID != data.id) {
            return (
                <>
                    <Link to={ownerChat}>
                        <IconButton
                            variant="contained"
                            className="sellerProfile__btn sellerProfile__msg"
                        >
                            <img src={messageIcon} alt="" />
                            <p className="callBtn__text">
                                {content[lang].sendMessageBtn}
                            </p>
                        </IconButton>
                    </Link>
                    <a href={`tel:${data?.phone}`}>
                        <IconButton
                            variant="contained"
                            className="sellerProfile__btn sellerProfile__call"
                        >
                            <img src={callIcon} alt="" />
                            <p className="callBtn__text">
                                {content[lang].contactBtn}
                            </p>
                        </IconButton>
                    </a>
                </>
            );
        } else {
            return (
                <Link to={ownerChat}>
                    <IconButton
                        variant="contained"
                        className="sellerProfile__btn sellerProfile__msg"
                    >
                        <p className="callBtn__text">{content[lang].user_profil}</p>
                    </IconButton>
                </Link>
            );
        }
    }
}
