import React, { useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Tooltip, Zoom } from "@mui/material";
import "./LoveBtn.scss";

function LoveBtn({ advertID, elModal }) {

    const { isUser, setIsUser } = useContext(UserContext);

    function LoveAnimate(e) {
        let modal = document.querySelector(".loginModal");
        let loveBtn = document.querySelectorAll(".love-btn");
        let content = document.querySelectorAll(".content");
        let heart = document.querySelectorAll(".heart");

        if (isUser) {
            for (let i = 0; i < loveBtn.length; i++) {
                if (
                    loveBtn[i].getAttribute("advertid") ==
                    e.target.getAttribute("advertid")
                ) {
                    if (content[i].classList.contains("active")) {
                        content[i].classList.remove("active");
                        heart[i].classList.remove("active");
                    } else {
                        content[i].classList.add("active");
                        heart[i].classList.add("active");
                    }
                }
            }
        } else {
            modal.classList.add("modal--open");
            modal.classList.add("modal--style");
        }
    }

    return (
        <Tooltip title="Yoqtirganlarga qo'shish" TransitionComponent={Zoom} arrow>
            <div
                className="love-btn"
                advertid={advertID}
                onClick={(e) => LoveAnimate(e)}
            >
                <div className="content">
                    <span className="heart"></span>
                </div>
            </div>
        </Tooltip>
    );
}
export default LoveBtn;