import React, { Fragment, useContext, createRef, useRef } from "react";
import { NavLink as Link } from "react-router-dom";

import { Box } from "@mui/material";
import { v4 } from "uuid";

import ContentLoader from "react-content-loader";
import content from "../../Localization/Content";
import { Context } from "../../Context/LangContext";
import noChatsIcon from "../../Assets/Img/Icon/noChats.svg";
import ArrowDown from "../../Lib/Svg/arrowDown";
import Person1 from "../../Assets/Img/person1.jpg";
import Person2 from "../../Assets/Img/person2.jpg";
import Person3 from "../../Assets/Img/person3.jpg";
import LogoImg from "../../Lib/Svg/logo";
import "./ChatUsers.scss";

function ChatUsers({ chats, isLoading, defaultAvatar, chatMenu }) {
    const { lang, setLang } = useContext(Context);
    const images = [Person1, Person2, Person3, Person1, Person2, Person3];
    const userIndicator = createRef();

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
                    let lastMsgDate = hour + ':' + min;
                    return (
                        <a
                            href={`#${chat.user.id}`}
                            key={v4()}
                            onClick={() => {
                                userIndicator.current.classList.remove('active');
                                console.log(userIndicator.current);
                            }}
                        >
                            <div className="chatProfile">
                                <img
                                    src={
                                        chat.user.image
                                            ? chat.user.image
                                            : defaultAvatar
                                    }
                                    alt=""
                                    className="chatProfile__img"
                                    onError={(e) => e.target.src = defaultAvatar}
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
                                        className={`chatProfile__read${
                                            chat.chat.reading ? "" : " active"
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
        <section className="chatsPanel" ref={chatMenu}>
            <Box className="chatsPanel__header">
                <Link to="/" className="chatsPanel__logo">
                    <LogoImg width={45} height={45} />
                    <h4 className="chatsPanel__header__title">
                        {content[lang].ChatNews}
                    </h4>
                </Link>
                <ArrowDown className="arrowDown" />
                {chats?.hasOwnProperty('length') ? (<span className="chats__indicator">{chats.length}</span>) : ''}
            </Box>
            <Box className="chatsPanel__main">
                <Box className="chatsPanel__chats">{showChats(7)}</Box>
            </Box>
            <Box></Box>
        </section>
    );
}
export default ChatUsers;
