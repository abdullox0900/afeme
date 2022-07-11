import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";
import { Tooltip, Zoom } from "@mui/material";
import Notification from "../Notification/Notification";
import "./LoveBtn.scss";

function LoveBtn({ advertID }) {

    const { user, setUser } = useContext(UserContext);
    const [notf, setNotf ] = useState(false); 
    const [notfType, setNotfType ] = useState(''); 
    const [isLove, setIsLove ] = useState(false); 

    function LoveAnimate(e) {
        let modal = document.querySelector(".loginModal");
        let loveBtn = document.querySelectorAll(".love-btn");
        let content = document.querySelectorAll(".content");
        let heart = document.querySelectorAll(".heart");
        const URL = `https://ali98.uz/api/save/${advertID}`;

        const token = localStorage.getItem("Token");
        let headers = new Headers();
        headers.append("Authorization", `Bearer ${token}`);
        let options = {
            method: "GET",
            headers: headers,
        };
        setNotf(true);

        function addLove(content, heart) {
            content.classList.add("active");
            heart.classList.add("active");

            fetch(URL, options)
                .then((response) => response.text())
                .then((response) => {
                    if (JSON.parse(response) == 1) {
                    }
                });
            setNotfType('success');
            controlFavorites(true);
        }
        function removeLove(content, heart) {
            content.classList.remove("active");
            heart.classList.remove("active");

            setNotfType('warning');
            controlFavorites(false);
        }
        function controlFavorites(addOrRemove) {
            let newUser = user;
            newUser.favorites = addOrRemove ? user.favorites + 1 : user.favorites - 1
            setUser(newUser)
            console.log(user);
        }

        if (user.hasOwnProperty("data")) {
            for (let i = 0; i < loveBtn.length; i++) {
                if (
                    loveBtn[i].getAttribute("advertid") != "" &&
                    loveBtn[i].getAttribute("advertid") ==
                        e.target.getAttribute("advertid")
                ) {
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
            if (notfType == 'success') {
                return <Notification message={"E'lon yoqtirganlarga qo'shildi"} type={notfType}/>
            } else {
                return <Notification message={"E'lon yoqtirganlardan olib tashlandi"} type={notfType}/>
            }
        }
    }

    useEffect(() => {
        if (user.hasOwnProperty('data') && advertID) {
            let userFavorites = user.data.favorites

            for (let i = 0; i < userFavorites.length; i++) {
                if (userFavorites[i].id == advertID) {
                    setIsLove(true);
                    break;
                }
            }
        }
    }, [user])

    return (
        <>
            {addNotf()}
            <Tooltip
                title="Yoqtirganlarga qo'shish"
                TransitionComponent={Zoom}
                arrow
            >
                <div
                    className="love-btn"
                    advertid={advertID}
                    onClick={(e) => LoveAnimate(e)}
                >
                    <div className={!isLove ? 'content' : 'content active' }>
                        <span className={!isLove ? 'heart' : 'heart active' }></span>
                    </div>
                </div>
            </Tooltip>
        </>
    );
}
export default LoveBtn;
