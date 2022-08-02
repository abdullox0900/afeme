import React, { Fragment, useContext, createRef, useRef } from "react";
import { NavLink as Link, useNavigate } from "react-router-dom";

import { Box, IconButton } from "@mui/material";
import { v4 } from "uuid";

import ContentLoader from "react-content-loader";
import content from "../../Localization/Content";
import { Context } from "../../Context/LangContext";
import useWindowDimensions from "../../Utils/windowDimension";
import noChatsIcon from "../../Assets/Img/Icon/noChats.svg";
import ArrowDown from "../../Lib/Svg/arrowDown";
import LogoImg from "../../Lib/Svg/logo";
import "./ChatUsers.scss";

function ChatUsers({ chats, chatID, isLoading, defaultAvatar, chatMenu, isOpen }) {
    const { lang, setLang } = useContext(Context);
    const userIndicator = createRef();
    const { windowWidth } = useWindowDimensions();
    const history = useNavigate();

    const Back = () => {
        history(-1);
    }

    function showChats(amount) {
        if (isLoading) {
            let i = -75;
            return (
                <ContentLoader
                    speed={1.25}
                    width={"100%"}
                    height={"550px"}
                    interval={0.25}
                    backgroundColor="#ebebeb"
                    foregroundColor="#0066ff00"
                    style={{ padding: "10px 12px 0" }}
                >
                    {Array.apply(null, { length: amount }).map(() => {
                        i += 75;
                        return (
                            <Fragment key={v4()}>
                                <rect
                                    x="0"
                                    y={i}
                                    rx="10"
                                    width="50"
                                    height="50"
                                />
                                <rect
                                    x="65"
                                    y={i + 5}
                                    rx="5"
                                    width="75%"
                                    height="20"
                                />
                                <rect
                                    x="65"
                                    y={i + 33}
                                    rx="5"
                                    width="40%"
                                    height="10"
                                />
                            </Fragment>
                        );
                    })}
                </ContentLoader>
            );
        } else {
            if (chats) {
                return chats.map((chat) => {
                    let a = new Date(chat.latest.created * 1000);
                    let hour = a.getHours();
                    let min = a.getMinutes();
                    let lastMsgDate = hour + ":" + min;
                    return (
                        <a
                            href={`#${chat.user.id}`}
                            key={v4()}
                            onClick={() => {
                                userIndicator.current.classList.remove(
                                    "active"
                                );
                                chatMenu.current.classList.remove("active");
                            }}
                        >
                            <div className={chatID != chat.chat.id ? "chatProfile" : "chatProfile active"}>
                                <img
                                    src={
                                        chat.user.image
                                            ? chat.user.image
                                            : defaultAvatar
                                    }
                                    alt=""
                                    className="chatProfile__img"
                                    onError={(e) =>
                                        (e.target.src = defaultAvatar)
                                    }
                                />
                                <div className="chatProfile__content">
                                    <Box className="chatProfile__content__item">
                                        <h3 className="chatProfile__name">
                                            {chat.user?.name}{" "}
                                            {chat.user?.lastname}
                                        </h3>
                                        <p className="chatProfile__text">
                                            {chat?.latest?.message.slice(0, 20)}
                                        </p>
                                    </Box>
                                    <span
                                        ref={userIndicator}
                                        className={`chatProfile__read${chat.chat.reading ? "" : " active"
                                            }`}
                                    >
                                        {lastMsgDate}
                                    </span>
                                </div>
                            </div>
                        </a>
                    );
                });
            } else {
                return (
                    <div className="noChats">
                        <img
                            src={noChatsIcon}
                            alt=""
                            className="noChats__img"
                        />
                        <h3 className="noChats__title">
                            Hozircha hech kim bilan suhbatlashmagansiz
                        </h3>
                    </div>
                );
            }
        }
    }

    return (
        <section className={isOpen ? "chatsPanel active" : "chatsPanel"} ref={chatMenu}>
            <Box className="chatsPanel__header">
                <Link to="/" className="chatsPanel__logo">
                    <LogoImg width={45} height={45} />
                    <h4 className="chatsPanel__header__title">
                        {content[lang].ChatNews}
                    </h4>
                </Link>
                <ArrowDown className="arrowDown" />
                {chats?.hasOwnProperty("length") ? (
                    <span className="chats__indicator">{chats.length}</span>
                ) : (
                    ""
                )}
                <button className="back" onClick={Back}>{content[lang].chat_back}</button>
            </Box>
            <Box className="chatsPanel__main">
                <Box className="chatsPanel__chats">{showChats(7)}</Box>
            </Box>
            <Box></Box>
        </section>
    );
}
export default ChatUsers;
