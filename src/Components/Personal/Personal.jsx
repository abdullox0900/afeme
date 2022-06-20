// Import => React
import React from "react";

// Import => Mui
import { Button, IconButton } from "@mui/material";

// Import => Components
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteIcon from "../../Lib/Svg/delete";
import EditIcon from "../../Lib/Svg/edit";
import style from "./Personal.module.scss";
import Spinner from "../Spinner/Spinner";

function Personal({ data, dataError, isLoading }) {
    
    function showUserPhoto() {
        if (!dataError && data.hasOwnProperty("id")) {
            if (data.image) {
                return (
                    <img
                        src={data.image}
                        className={"user__photo " + style.user__photo}
                    />
                );
            } else {
                return (
                    <AccountCircleIcon
                        className={"user__photo " + style.user__photo}
                        style={{ fill: "#bdbdbd" }}
                    />
                );
            }
        }
    }

    if (isLoading) {
        return (
            <div className={"userProfile " + style.card}>
                <Spinner />
            </div>
        );
    } else {
        
        return (
            <div className={"userProfile " + style.card}>
                <div className="userProfile__content">
                    {showUserPhoto()}
                    <b>
                        {data?.name} {data?.lastname}
                    </b>
                    <em>ID:{data?.id}</em>
                    <div className={style.InpG}>
                        <input type="text" placeholder="Email va Telefon Raqamlar." />
                        <input type="text" placeholder="Parol va Avtorizatsiyalar" />
                        <input type="text" placeholder="Qirish va qurilmalar" />
                        <input type="text" placeholder="Ijtimoiy tarmoqlar" />
                    </div>
                    <div style={{ margin: "20px auto" }}>
                        <IconButton
                            variant="outlined"
                            color="error"
                            className="cardControls cardDelete"
                            sx={{ mr: 1.5, px: 2.5, borderRadius: 2.5 }}
                        >
                            <DeleteIcon />
                        </IconButton>
                        <IconButton
                            variant="solid"
                            color="primary"
                            className="cardControls cardEdit"
                            sx={{ px: 2.5, borderRadius: 2.5 }}
                        >
                            <EditIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        );
    }

    
}

export default Personal;
