import React, { createRef, useRef } from "react";

import { IconButton } from "@mui/material";
import PaperClip from "../../Assets/Img/Icon/paperclip.svg";
import PaperPlane from "../../Assets/Img/Icon/paper-plane.svg";
import "./ChatSend.scss";

let url = process.env.REACT_APP_URL;

function ChatSend({ chats, chatUser, message, setMessage }) {

    let token = localStorage.getItem('Token');
    let msgValue = createRef()

    async function sendMessage(e) {
        
        e.preventDefault();
        let formData = new FormData();
        formData.append("to", chatUser.id);
        formData.append("message", msgValue.current.value);
        console.log(chatUser.id, msgValue.current.value);
        messageChange('');

        let headers = new Headers();
        headers.append("Authorization", `Bearer ${token}`);
        await fetch(`${url}message`, {
            method: "POST",
            body: formData,
            headers: headers,
        })
            .then((response) => response.text())
            .then((response) => {
                console.log(JSON.parse(response));
            });
    }

    function messageChange(msg) {
        let sendBtn = document.querySelector("#msgSend");
        console.log(msg);

        if (msg.trim() != "") {
            sendBtn.classList.add("active");
            sendBtn.removeAttribute('disabled', '');
        } else {
            msgValue.current.value = '';
            sendBtn.classList.remove("active");
            sendBtn.setAttribute('disabled', '');
        }
    }

    function attachFile() {
        let attachInput = document.querySelector(".attachFile__input");
        attachInput.click();
    }

    return (
        <form
            action="#"
            className="inputMessage sendMsgForm"
            onSubmit={(e) => sendMessage(e)}
        >
            <IconButton className="attachFile" onClick={attachFile}>
                <img src={PaperClip} alt="" />
                <input
                    type="file"
                    className="attachFile__input"
                    name="media"
                    style={{ display: "none" }}
                />
            </IconButton>
            <div className="chatInput">
                <input
                    type="text"
                    className="message__input"
                    id="messageInput"
                    autoFocus
                    autoComplete="off"
                    placeholder="Type a message"
                    ref={msgValue}
                    onChange={(e) => messageChange(e.target.value)}
                />
                <IconButton
                    className="sendBtn"
                    id="msgSend"
                    title="Yuborish"
                    type="submit"
                    disabled
                >
                    <img src={PaperPlane} alt="" />
                </IconButton>
            </div>
        </form>
    );
}
export default ChatSend;
