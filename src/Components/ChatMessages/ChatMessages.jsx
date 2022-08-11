import React, { useEffect, createRef, useRef } from "react";

import { v4 } from "uuid";
import ReactScrollableFeed from "react-scrollable-feed";
import AOS from "aos";
import TimeConverter from "../../Utils/timeConverter";
import Spinner from "../Spinner/Spinner";
import ArrowDown from "../../Lib/Svg/arrowDown";
import "./ChatMessages.scss";
import noMessageIcon from "../../Assets/Img/noMessages.svg";
import welcomeToChat from "../../Assets/Img/Icon/welcomeToChat.svg";

function ChatMessages({ messages, chatUser, chatID, defaultAvatar }) {
    let i = 0;
    useEffect(() => {
        AOS.init({
            offset: 0,
            duration: 500,
            debounceDelay: 50,
            throttleDelay: 90,
            mirror: true,
            once: false,
            anchorPlacement: 'top-bottom',
        });
    }, []);
    const messagesBlog = document.querySelector(
        ".styles_scrollable-div__prSCv"
    );
    const bubbles = document.querySelector(".bubbles");
    const scrollBottomBtn = document.querySelector(".scrollBottom");

    messagesBlog?.addEventListener("scroll", function () {
        if (this.scrollHeight - this.clientHeight - this.scrollTop > 400) {
            scrollBottomBtn.classList.add("active");
        } else {
            scrollBottomBtn.classList.remove("active");
        }
    });
    scrollBottomBtn?.addEventListener("click", function () {
        messagesBlog.scrollTop = messagesBlog.scrollHeight;
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
        if (messages == "loading") {
            return (
                <div className="messages__loader">
                    <Spinner />
                </div>
            );
        } else if (messages && chatUser) {
            let sendingMessages = document.querySelectorAll(".message.move");
            if (sendingMessages) {
                for (let i = 0; i < sendingMessages.length; i++) {
                    sendingMessages[i]?.remove();
                }
            }

            return (
                <div className="messages">
                    <div className="bubbles">
                        <ReactScrollableFeed>
                            {messages.map((message) => {
                                i++;
                                let messageText = message.message.trim();
                                let date = TimeConverter(message.created);
                                let animate =
                                    messages.length > 10
                                        ? ""
                                        : messages.length - 10 > i
                                        ? ""
                                        : "fade-up";

                                if (message.to == chatUser.id) {
                                    let className = `message${
                                        message.to == chatUser.id &&
                                        messages[i]?.to == chatUser.id
                                            ? " messageGroup"
                                            : ""
                                    } outgoing`;
                                    return (
                                        <div
                                            className={className}
                                            key={v4()}
                                            data-aos={animate}
                                        >
                                            <div className="message__content">
                                                <p className="message__text">
                                                    {messageText}
                                                </p>
                                                <p className="message__date">
                                                    {date}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    let className = `message${
                                        message.to != chatUser.id &&
                                        messages[i]?.to != chatUser.id &&
                                        messages[i]?.to
                                            ? " messageGroup"
                                            : ""
                                    } incoming`;
                                    return (
                                        <div
                                            className={className}
                                            key={v4()}
                                            data-aos={animate}
                                            to={message.to}
                                        >
                                            <img
                                                src={
                                                    chatUser.image
                                                        ? chatUser.image
                                                        : defaultAvatar
                                                }
                                                alt=""
                                                className="message__sender"
                                                onError={(e) =>
                                                    (e.target.src =
                                                        defaultAvatar)
                                                }
                                            />
                                            <div className="message__content">
                                                <p className="message__text">
                                                    {messageText}
                                                </p>
                                                <p className="message__date">
                                                    {date}
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
