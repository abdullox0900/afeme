import React, { Fragment, useContext } from "react";
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

function ChatUsers({ chats, setChatUser, chatID, setChatID, isLoading }) {
    const { lang, setLang } = useContext(Context);
    const images = [Person1, Person2, Person3, Person1, Person2, Person3];
    let rand = Math.floor(Math.random() * 500);

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
                if (chats && chatID) {
                    for (let i = 0; i < chats.length; i++) {
                        console.log(chats[i]);
                        if (chats[i].chat.id == chatID) {
                            setChatUser(chats[i].user);
                        }
                    }
                }
                return chats.map((chat) => (
                    <a
                        href={`#${chat.chat.id}`}
                        key={v4()}
                        // onClick={() => openUserChat(chat.chat.id, chat.user.id)}
                    >
                        <div className="chatProfile">
                            <img
                                src=""
                                alt=""
                                className="chatProfile__img"
                            />
                            <div className="chatProfile__content">
                                <Box className="chatProfile__content__item">
                                    <h3 className="chatProfile__name">
                                        {chat.user?.name} {chat.user?.lastname}
                                    </h3>
                                    <span className="chatProfile__text">
                                        Haha oh man 🔥
                                    </span>
                                </Box>
                                <span className="chatProfile__lastTime">
                                    12m
                                </span>
                            </div>
                        </div>
                    </a>
                ));
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
        <section className="chatsPanel">
            <Box className="chatsPanel__header">
                <Link to="/" className="chatsPanel__logo">
                    <LogoImg width={45} height={45} />
                    <h4 className="chatsPanel__header__title">
                        {content[lang].ChatNews}
                    </h4>
                </Link>
                <ArrowDown className="arrowDown"/>
                <span className="chats__indicator">6</span>
            </Box>
            <Box className="chatsPanel__main">
                <Box className="chatsPanel__chats">{showChats(7)}</Box>
            </Box>
            <Box></Box>
        </section>
    );
}
export default ChatUsers;
