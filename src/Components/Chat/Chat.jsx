// Import => React
import React, { useContext, useEffect, useState, createRef } from "react";
import { NavLink as Link, HashRouter, Route } from "react-router-dom";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

// Import => Mui
import { Box, Button, IconButton } from "@mui/material";

// Import => Components
import ChatUsers from "../ChatUsers/ChatUsers";
import ChatMessages from "../ChatMessages/ChatMessages";
import ChatSend from "../ChatSend/ChatSend";
import { UserContext } from "../../Context/UserContext";
import Notification from "../Notification/Notification";
import Page404 from "../../Pages/404/404";
import Cards from "../Card/Card";
import useWindowDimensions from "../../Utils/windowDimension";
import MenuIcon from "../../Lib/Svg/menu";
import { v4 } from "uuid";
import ArrowDown from "../../Lib/Svg/arrowDown";
import Dots from "../../Assets/Img/Icon/dots.svg";

// Import => Style
import "./Chat.scss";
import "aos/dist/aos.css";

// Import useContext => Localization
import { Context } from "../../Context/LangContext";
import content from "../../Localization/Content";
let url = process.env.REACT_APP_URL;
let CHATKEY = process.env.REACT_APP_CHAT_KEY;

function Chat() {
    let token = localStorage.getItem("Token");
    let urlHash = window.location.hash.substring(1);
    let headers = new Headers();
    headers.append("Authorization", `Bearer ${token}`);

    const { user, setUser } = useContext(UserContext);
    const { lang, setLang } = useContext(Context);
    const [messages, setMessagesData] = useState([]);
    const [adverts, setAdverts] = useState([]);
    const [chats, setChats] = useState(null);
    const [chatID, setChatID] = useState(
        urlHash.trim() != "" && !isNaN(urlHash) ? urlHash : null
    );
    const [chatUser, setChatUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [chatFound, setChatFound] = useState(true);
    const [dataError, setDataError] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const defaultAvatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU";
    const { windowWidth } = useWindowDimensions();
    const chatMenu = createRef();

    useEffect(() => {
        if (chatID) {
            function getUser() {
                fetch(`${url}user/${chatID}`, {
                    method: "GET",
                })
                    .then((response) => response.text())
                    .then((response) => {
                        let data = JSON.parse(response);
                        console.log(data);
                        if (data.hasOwnProperty("data")) {
                            setChatUser(data.data);
                            getMessages();
                            setChatFound(true);
                            console.log(chatUser);
                        } else {
                            setChatFound(false);
                            setMessagesData(null);
                        }
                    })
                    .catch(() => {
                        setChatFound(false);
                        setMessagesData(null);
                        console.log(chatFound);
                    });
            }
            getUser();
        }
    }, [chatID]);

    useEffect(() => {
        const echo = new Echo({
            broadcaster: "pusher",
            key: CHATKEY,
            cluster: "mt1",
            encrypted: true,
        });

        getChats();
        echo.channel("chat" + 458)
            .subscribed(() => {
                console.log("You are subscribed");
            })
            .listen("MessageSent", (data) => {
                getMessages();
                getChats();
                showNotification();
                console.log("xabar keldi");
            });

        window.addEventListener("hashchange", getHashUrl);
        function getHashUrl() {
            let hash = window.location.hash.substring(1);
            if (hash.trim() != "" && !isNaN(hash)) {
                setChatID(hash);
                console.log(hash);
            } else {
                window.addEventListener("hashchange", getHashUrl, {
                    once: true,
                });
                window.location.hash = "";
            }
        }

        fetch(url + "popular/", {
            method: "GET",
        })
            .then((response) => response.text())
            .then((response) => {
                let data = JSON.parse(response);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

    async function getMessages() {
        await fetch(`${url}message/${chatID}`, {
            method: "DELETE",
            headers: headers,
        })
            .then((response) => response.text())
            .then((response) => {
                let data = JSON.parse(response);
                console.log(data);
                if (data) {
                    setMessagesData(data);
                } else {
                    setMessagesData(null);
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
                let res = JSON.parse(response);
                console.log(res);
                setChats(res);
            })
            .catch(() => {
                setChats(null);
            })
            .finally(() => setIsLoading(false));
    }

    function showNotification() {
        setNotificationOpen(true);
        setTimeout(() => {
            setNotificationOpen(false);
        }, 5000);
    }

    function closeMenu() {
        
        function handleClickOutside(e) {
            if ((chatMenu.current && !chatMenu.current.contains(e.target)) && !document.querySelector('.chatMenuBtn').contains(e.target)) {
                chatMenu.current.classList.remove('active');
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }
    closeMenu();

    if (token && token.trim() != "") {
        if (user.hasOwnProperty("data")) {
            return (
                <Box className="chat">
                    {notificationOpen ? (
                        <Notification
                            message={chats[0]?.latest?.message.slice(0, 50)}
                            type={"success"}
                        />
                    ) : (
                        ""
                    )}

                    <ChatUsers
                        chats={chats}
                        isLoading={isLoading}
                        defaultAvatar={defaultAvatar}
                        chatMenu={chatMenu}
                    />

                    <section className="messagesPanel">
                        {chatUser && chatFound ? (
                            <Box className="messagesPanel__header">
                                {windowWidth > 768 ? (
                                    ""
                                ) : (
                                    <IconButton
                                        className="chatMenuBtn"
                                        variant="text"
                                        onClick={() =>
                                            chatMenu.current.classList.add(
                                                "active"
                                            )
                                        }
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                )}
                                <Box className="chatProfile">
                                    <Link to={"/reltorcob/" + chatUser.id}>
                                        <img
                                            src={
                                                chatUser.image
                                                    ? chatUser.image
                                                    : defaultAvatar
                                            }
                                            alt=""
                                            className="chatProfile__img"
                                            onError={(e) =>
                                                (e.target.src = defaultAvatar)
                                            }
                                        />
                                    </Link>
                                    <Box className="chatProfile__content">
                                        <Link
                                            to={"/reltorcob/" + chatUser.id}
                                            className="chatProfile__name"
                                        >
                                            {chatUser.name} {chatUser.lastname}
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

                        <ChatMessages
                            messages={messages}
                            chatUser={chatUser}
                            chatID={chatID}
                            defaultAvatar={defaultAvatar}
                        />

                        {chatUser && chatFound ? (
                            <ChatSend
                                chatUser={chatUser}
                                getMessages={getMessages}
                                getChats={getChats}
                            />
                        ) : (
                            ""
                        )}
                    </section>

                    <section className="infoPanel">
                        {/* <Box className="infoPanel__header">
                            <h5 className="infoPanel__title">
                                Elmerdan boshqa e'lonlar
                                <ArrowDown className="arrowDown" />
                            </h5>
                        </Box> */}
                        <Box className="infoPanel__main">
                            <h5 className="infoPanel__title">
                                {content[lang].doyou}
                                <ArrowDown className="arrowDown" />
                                <span className="chats__indicator">4</span>
                            </h5>
                            <div className="infoPanel__cards">
                                {adverts.map((advert) => (
                                    <Cards data={advert} />
                                ))}
                            </div>
                        </Box>
                        <Box></Box>
                    </section>
                </Box>
            );
        } else {
            setTimeout(() => {
                return <Page404 />;
            }, 2000);
        }
    } else {
        setTimeout(() => {
            return <Page404 />;
        }, 2000);
    }
}
export default Chat;
