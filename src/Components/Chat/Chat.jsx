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
import Page404 from "../../Pages/404/404";
import Cards from "../Card/Card";
import useWindowDimensions from "../../Utils/windowDimension";
import ArrowLeft from "../../Lib/Svg/arrowLeft";
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
    let userID = localStorage.getItem("user_id");
    let urlHash = window.location.hash.substring(1);
    let headers = new Headers();
    headers.append("Authorization", `Bearer ${token}`);

    const { user, setUser } = useContext(UserContext);
    const { lang, setLang } = useContext(Context);
    const [messages, setMessagesData] = useState([]);
    const [adverts, setAdverts] = useState([]);
    const [chats, setChats] = useState(null);
    const [chatID, setChatID] = useState(
        urlHash.trim() != "" && !isNaN(urlHash) && urlHash != userID ? urlHash : null
    );
    const [chatUser, setChatUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [chatFound, setChatFound] = useState(true);
    const [dataError, setDataError] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const defaultAvatar =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU";
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
                        } else {
                            setChatFound(false);
                            setMessagesData(null);
                        }
                    })
                    .catch(() => {
                        setChatFound(false);
                        setMessagesData(null);
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
        echo.channel("chat" + userID)
            .subscribed(() => {
                console.log("You are subscribed");
            })
            .listen("MessageSent", () => {
                console.log("xabar keldi");
                getMessages();
                getChats();
                showNotification();
            });

        window.addEventListener("hashchange", getHashUrl);
        function getHashUrl() {
            let hash = window.location.hash.substring(1);
            if (hash.trim() != "" && !isNaN(hash) && hash != userID) {
                setChatID(hash);
            } else {
                setChatID(null);
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

        setTimeout(() => {
            Notification.requestPermission().then((result) => {
                console.log(result);
            });
        }, 3000);

    }, []);

    async function getMessages() {
        console.log(chatID);
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
        const notification = new Notification('To do list', { body: chats[0].latest.message, icon: chats[0].user.image ? chats[0].user.image : defaultAvatar });
    }

    if (token && token.trim() != "") {
        if (user.hasOwnProperty("data")) {
            return (
                <Box className="chat">
                    
                    <ChatUsers
                        chats={chats}
                        chatID={chatID}
                        isLoading={isLoading}
                        defaultAvatar={defaultAvatar}
                        chatMenu={chatMenu}
                        isOpen={windowWidth < 768 && !chatID ? true : false}
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
                                        color="primary"
                                        onClick={() =>
                                            chatMenu.current.classList.add(
                                                "active"
                                            )
                                        }
                                    >
                                        <Link to={"/chat#"}>
                                            <ArrowLeft />
                                        </Link>
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

                    {windowWidth > 1280 ? (
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
                    ) : (
                        ""
                    )}
                </Box>
            );
        } else {
            setTimeout(() => {
                return <Page404 />;
            }, 1000);
        }
    } else {
        setTimeout(() => {
            return <Page404 />;
        }, 1000);
    }
}
export default Chat;
