import React, { useState } from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LogoAuthorization from "../../Assets/Img/logo_authorization.svg";
import "../../Assets/scss/colors.scss";
import "../../Components/ModalAuthorization/Modal.scss";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Modal({ elModal }) {
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    let formData = new FormData();
    formData.append('phone', phone)
    formData.append('password', password)

    function onSubmit(e) {
        console.log(formData);
        axios.post('http://ali98.uz/api/login', formData)
            .then((res) => console.log('asda', res))
    }

    return (
        <div
            className="modal"
            ref={elModal}
            onClick={(evt) => {
                if (
                    evt.target.matches(".modal") || evt.target.matches(".modal__close-btn")
                ) {
                    elModal.current.classList.remove("modal--open");
                }
            }}>
            <div
                className="modal__authorization"
            >
                <img
                    className="modal__img-auth"
                    src={LogoAuthorization}
                    alt="logo__auth"
                />

                <h3
                    className="modal__title"
                >
                    Saytga kirish
                </h3>

                <div
                    className="form"
                >
                    <input
                        className="form__authorization-input input-auth"
                        type="text"
                        placeholder="Email yoki telefon raqam"
                        onChange={e => setPhone(e.target.value)}
                    />
                    <input
                        className="form__authorization-input--password input-auth"
                        type="text"
                        placeholder="Parol*"
                        onChange={e => setPassword(e.target.value)}
                        />
                    <Button
                        className="form__authorization-btn"
                        variant="contained"
                        onClick={(e) => onSubmit(e)}
                    >
                        Saytga Kirish
                    </Button>
                    <NavLink to={"/SignUp"}>
                        <Button
                            className="form__authorization-link"
                        >
                            Roʻyxatdan oʻtish
                        </Button>
                    </NavLink>
                </div>

                <IconButton
                    aria-label="close"
                    className="modal__close-btn"
                >
                </IconButton>
            </div>
        </div >
    );
};

export default Modal;