import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";
import { Tooltip, Zoom } from "@mui/material";
import Notification from "../Notification/Notification";
import "./LoveBtn.scss";

// Import useContext => Localization
import { Context } from "../../Context/LangContext";
import content from "../../Localization/Content";

let url = process.env.REACT_APP_URL;

function LoveBtn({ advertID }) {
    const { lang, setLang } = useContext(Context);
    const { user, setUser } = useContext(UserContext);
    const [notf, setNotf] = useState(false);
    const [notfType, setNotfType] = useState("");
    const [isLove, setIsLove] = useState(false);

    function LoveAnimate(e) {
        let modal = document.querySelector(".loginModal");
        let loveBtn = document.querySelectorAll(".love-btn");
        let content = document.querySelectorAll(".content");
        let heart = document.querySelectorAll(".heart");
        const URL = `${url}save/${advertID}`;

        const token = localStorage.getItem("Token");
        let headers = new Headers();
        headers.append("Authorization", `Bearer ${token}`);
        let options = {
            method: "GET",
            headers: headers,
        };

        function addLove(content, heart) {
            controlFavorites(true);
            content.classList.add("active");
            heart.classList.add("active");

            setNotfType("success");
        }
        function removeLove(content, heart) {
            controlFavorites(false);
            content.classList.remove("active");
            heart.classList.remove("active");

            setNotfType("warning");
        }
        function controlFavorites(addOrRemove) {
            let newUser = user;
            newUser.favorites = addOrRemove
                ? user.favorites + 1
                : user.favorites - 1;
            setUser(newUser);
        }

        if (user.hasOwnProperty("data")) {
            setNotf(true);
            for (let i = 0; i < loveBtn.length; i++) {
                if (
                    loveBtn[i].getAttribute("advertid") != "" &&
                    loveBtn[i].getAttribute("advertid") ==
                        e.target.getAttribute("advertid")
                ) {
                    fetch(URL, options)
                        .then((response) => response.text())
                        .then((response) => {
                            if (JSON.parse(response) == 1) {
                            }
                        });
                    if (content[i].classList.contains("active")) {
                        removeLove(content[i], heart[i]);
                    } else {
                        addLove(content[i], heart[i]);
                    }
                }
            }
        } else {
            modal.classList.add("modal--open");
        }
    }
    const addNotf = () => {
        if (notf) {
            if (notfType == "success") {
                return (
                    <Notification
                        message={"E'lon yoqtirganlarga qo'shildi"}
                        type={notfType}
                    />
                );
            } else {
                return (
                    <Notification
                        message={"E'lon yoqtirganlardan olib tashlandi"}
                        type={notfType}
                    />
                );
            }
        }
    };

    useEffect(() => {
        if (user.hasOwnProperty("data") && advertID) {
            let userFavorites = user.data.favorites;

            for (let i = 0; i < userFavorites?.length; i++) {
                if (userFavorites[i].id == advertID) {
                    setIsLove(true);
                    break;
                }
            }
        }
    }, [user]);

    return (
        <>
            {addNotf()}
            <Tooltip
                title={content[lang].liked}
                TransitionComponent={Zoom}
                arrow
            >
                <div
                    className="love-btn"
                    advertid={advertID}
                    onClick={(e) => LoveAnimate(e)}
                >
                    <div className={!isLove ? "content" : "content active"}>
                        <span
                            className={!isLove ? "heart" : "heart active"}
                        ></span>
                    </div>
                </div>
            </Tooltip>
        </>
    );
}
export default LoveBtn;
