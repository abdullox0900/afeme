// Import => React
import React, { useContext, useEffect, useState } from "react";
import { NavLink as Link, HashRouter, Route } from "react-router-dom";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

// Import => Mui
import { Box, Button, IconButton } from "@mui/material";

// Import => Components
import ChatUsers from "../ChatUsers/ChatUsers";
import ChatMessages from "../ChatMessages/ChatMessages";
import ChatSend from "../ChatSend/ChatSend";
import Cards from "../Card/Card";
import { v4 } from "uuid";
import ArrowDown from "../../Lib/Svg/arrowDown";
import Dots from "../../Assets/Img/Icon/dots.svg";
import Person1 from "../../Assets/Img/person1.jpg";
import Person2 from "../../Assets/Img/person2.jpg";
import Person3 from "../../Assets/Img/person3.jpg";
import HeroImg1 from "../../Assets/Img/home-hero-1.jpg";

// Import => Style
import "./Chat.scss";
import "aos/dist/aos.css";

// Import useContext => Localization
import { Context } from "../../Context/LangContext";
import content from "../../Localization/Content";
let url = process.env.REACT_APP_URL;


function Chat() {
    let token = localStorage.getItem("Token");
    let urlHash = window.location.hash.substring(1);

    const { lang, setLang } = useContext(Context);
    const [messages, setMessagesData] = useState([]);
    const [message, setMessage] = useState("");
    const [chats, setChats] = useState(null);
    const [chatID, setChatID] = useState(urlHash.trim() != '' && !isNaN(urlHash) ? urlHash : null);
    const [chatUser, setChatUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    console.log(chatID);

    useEffect(() => {
        let headers = new Headers();
        headers.append("Authorization", `Bearer ${token}`);
        if (chatID) {
            getMessages();

            const echo = new Echo({
                broadcaster: "pusher",
                key: "c837940215701b405def",
                cluster: "mt1",
                encrypted: true,
            });

            echo.channel("chat")
                .subscribed(() => {
                    console.log("You are subscribed");
                })
                .listen("MessageSent", (data) => {
                    getMessages();
                });

        }

        async function getMessages() {
            await fetch(`${url}message/${chatID}`, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.text())
                .then((response) => {
                    let data = JSON.parse(response);
                    if (data.length > 0) {
                        setMessagesData(data);
                        scrollBottom();
                        console.log(data);
                    }
                });
        }
        async function getChats() {
            await fetch(`${url}message`, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.text())
                .then((response) => {
                    setChats(JSON.parse(response));
                    setIsLoading(false);
                    console.log(chats);
                });
        }
        getChats();

        window.addEventListener("hashchange", getHashUrl);
        function getHashUrl() {
            let hash = window.location.hash.substring(1);
            if (hash.trim() != '' && !isNaN(hash)) {
                setChatID(hash);
                console.log(hash);
            } else {
                window.addEventListener("hashchange", getHashUrl, {once: true});
                window.location.hash = '';
            }
        }

        function scrollBottom() {
            let msgScroller = document.querySelector(".messages");
            if (msgScroller) {
                msgScroller.scrollTop = msgScroller.scrollHeight
            }
        }
    }, [chatID]);

    return (
        <Box className="chat">
            <ChatUsers
                chats={chats}
                setChatUser={setChatUser}
                chatID={chatID}
                setChatID={setChatID}
                isLoading={isLoading}
            />

            <section className="messagesPanel">
                {chatID ? (
                    <Box className="messagesPanel__header">
                        <Box className="chatProfile">
                            <Link to="/reltorcob/">
                                <img
                                    src={Person2}
                                    alt=""
                                    className="chatProfile__img"
                                />
                            </Link>
                            <Box className="chatProfile__content">
                                <Link
                                    to="/reltorcob/"
                                    className="chatProfile__name"
                                >
                                    {chatUser?.name} {chatUser?.lastname}
                                </Link>
                                <span className="chatProfile__text">
                                    {chatUser?.user_type}
                                </span>
                            </Box>
                        </Box>
                        <div className="header__more">
                            <IconButton className="header__more__btn">
                                <img src={Dots} alt="" />
                            </IconButton>
                        </div>
                    </Box>
                ) : (
                    ""
                )}

                <ChatMessages messages={messages} userID={chatUser?.id} chatID={chatID} />

                {chatID ? (
                    <ChatSend
                        chats={chats}
                        chatUser={chatUser}
                        message={message}
                        setMessage={setMessage}
                    />
                ) : (
                    ""
                )}
            </section>

            <section className="infoPanel">
                <Box className="infoPanel__header">
                    <h5 className="infoPanel__title">
                        Elmerdan boshqa e'lonlar
                        <ArrowDown className="arrowDown"/>
                    </h5>
                    <img
                        src={HeroImg1}
                        alt=""
                        className="infoPanel__header__img"
                    />
                </Box>
                <Box className="infoPanel__main">
                    <h5 className="infoPanel__title">
                        {content[lang].doyou}
                        <ArrowDown className="arrowDown"/>
                        <span className="chats__indicator">2</span>
                    </h5>
                    <div className="infoPanel__cards"></div>
                </Box>
                <Box></Box>
            </section>
        </Box>
    );
}
export default Chat;
