import React, { createRef, useRef, useState } from "react";

import { IconButton, Button } from "@mui/material";
import PaperClip from "../../Assets/Img/Icon/paperclip.svg";
import PaperPlane from "../../Assets/Img/Icon/paper-plane.svg";
import "./ChatSend.scss";

let url = process.env.REACT_APP_URL;

function ChatSend({ chatUser, getMessages, getChats }) {
    const [previewImages, setPreviewImages] = useState();
    let msgValue = createRef();
    let previewModal = createRef();
    let fileInput = createRef();
    let token = localStorage.getItem("Token");
    let headers = new Headers();
    headers.append("Authorization", `Bearer ${token}`);

    async function sendMessage(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append("to", chatUser.id); 
        formData.append("message", msgValue.current.value.trim());
        messageChange("");

        await fetch(`${url}message`, {
            method: "POST",
            body: formData,
            headers: headers,
        })
            .then((response) => response.text())
            .then((response) => {
                console.log(JSON.parse(response));
                getMessages();
                getChats();
            });
    }

    function messageChange(msg) {
        let sendBtn = document.querySelector("#msgSend");

        if (msg.trim() != "") {
            sendBtn.classList.add("active");
            sendBtn.removeAttribute("disabled", "");
        } else {
            msgValue.current.value = "";
            sendBtn.classList.remove("active");
            sendBtn.setAttribute("disabled", "");
        }
    }

    function sendFile() {

        let formData = new FormData();
        formData.append('key', 'Service For C Group')
        formData.append("file", fileInput.current.files[0]);

        // fetch(`${url}service`, {
        //     method: 'POST',
        //     body: formData,
        //     // redirect: 'follow'
        // })
        //     .then((response) => response.text())
        //     .then(function (response) {
        //         let res = JSON.parse(response);
        //         console.log(res);
        //     })
        //     .catch((error) => console.log("error", error));
    }

    function openModal() {
        previewModal.current.classList.add("modal--open");
    }
    function closeModal() {
        previewModal.current.classList.remove("modal--open");
        fileInput.current.value = "";
    }

    function previewImage() {
        const objectUrl = [];
        let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

        if (fileInput.current.files.length > 0) {
            for (let i = 0; i < fileInput.current.files.length; i++) {
                objectUrl.push(URL.createObjectURL(fileInput.current.files[i]));
            }
            setPreviewImages(objectUrl);
            openModal();
        }
    }

    return (
        <form
            action="#"
            className="inputMessage sendMsgForm"
            onSubmit={(e) => sendMessage(e)}
        >
            <div className="modal imagePreview" ref={previewModal}>
                <div className="imagePreview__content">
                    <div className="imagePreview__group">
                        {previewImages?.map((image) => (
                            <img
                                src={image}
                                alt=""
                                className="imagePreview__image"
                            />
                        ))}
                    </div>
                    <div className="imagePreview__buttons">
                        <Button
                            variant="outlined"
                            color="error"
                            className="imagePreview__btn"
                            onClick={() => closeModal()}
                        >
                            Bekor qilish
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            className="imagePreview__btn"
                            onClick={() => sendFile()}
                        >
                            Yuborish
                        </Button>
                    </div>
                </div>
            </div>
            <IconButton className="attachFile" color="primary">
                <img src={PaperClip} alt="" />
                <input
                    type="file"
                    className="attachFile__input"
                    name="media"
                    onChange={() => previewImage()}
                    multiple
                    ref={fileInput}
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
