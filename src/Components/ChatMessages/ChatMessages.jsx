import React, { useEffect, createRef, useRef } from "react";

import { v4 } from "uuid";
import ReactScrollableFeed from "react-scrollable-feed";
import AOS from "aos";
import ArrowDown from "../../Lib/Svg/arrowDown";
import "./ChatMessages.scss";
import noMessageIcon from "../../Assets/Img/noMessages.svg";
import welcomeToChat from "../../Assets/Img/Icon/welcomeToChat.svg";

function ChatMessages({ messages, userID, chatID }) {
    let i = 0;
    useEffect(() => {
        AOS.init({
            offset: 150,
            duration: 750,
            debounceDelay: 50,
            throttleDelay: 90,
        });
    }, []);
    let messagesBlog = document.querySelector(".styles_scrollable-div__prSCv");
    let scrollBottomBtn = document.querySelector(".scrollBottom");

    messagesBlog?.addEventListener("scroll", function () {
        console.log();
        if (this.scrollHeight - this.clientHeight - this.scrollTop > 400) {
            scrollBottomBtn.classList.add("active");
        } else {
            scrollBottomBtn.classList.remove("active");
        }
    });

    if (!chatID) {
        return (
            <div className="welcomeAfemeChat">
                <img
                    src={welcomeToChat}
                    alt=""
                    className="welcomeAfemeChat__img"
                />
                <h3 className="welcomeAfemeChat__title">
                    Afeme chatga xush kelibsiz
                </h3>
                <p className="welcomeAfemeChat__text">
                    Suhbatlashishni boshlash uchun foydalanuvchilardan birini
                    ustiga bosing
                </p>
            </div>
        );
    } else {
        if (messages) {
            return (
                <div className="messages">
                    <div className="bubbles">
                        <ReactScrollableFeed>
                            {messages.map((message) => {
                                i++;
                                if (message.to == userID) {
                                    let className = `message outgoing${
                                        messages[i + 1]?.to == userID
                                            ? " messageGroup"
                                            : ""
                                    }`;
                                    return (
                                        <div className={className} key={v4()}>
                                            <div className="message__content">
                                                <p className="message__text">
                                                    {message.message}
                                                </p>
                                                <p className="message__date">
                                                    18-may, 11:11
                                                </p>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div
                                            className="message incoming"
                                            key={v4()}
                                        >
                                            <img
                                                src=""
                                                alt=""
                                                className="message__sender"
                                            />
                                            <div className="message__content">
                                                <p className="message__text">
                                                    {message.message}
                                                </p>
                                                <p className="message__date">
                                                    18-may, 11:11
                                                </p>
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                        </ReactScrollableFeed>
                    </div>
                    <div className="scrollBottom">
                        <ArrowDown
                            className="arrowDown"
                            color="#fff"
                            width={16}
                            height={16}
                        />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="noChatMessages">
                    <img
                        src={noMessageIcon}
                        alt=""
                        className="noChatMessages__img"
                    />
                    <h3 className="noChatMessages__title">
                        Hozircha bu yerda xabarlar yo'q
                    </h3>
                </div>
            );
        }
    }
}
export default ChatMessages;
