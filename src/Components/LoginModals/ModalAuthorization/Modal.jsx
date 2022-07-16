//Import React vs React Hooks
import React, { useContext, useRef, useState } from "react";
import { useForm } from 'react-hook-form'
import { NavLink } from "react-router-dom";

//Import MUI Components
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { TextField } from "@mui/material";

//Import Components
import LogoAuthorization from "../../../Assets/Img/logo_authorization.svg";
import "../../../Assets/scss/colors.scss";
import "./Modal.scss";

// Import useContext => Localization
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/Content';

//Import Request Package
import Confirm from "../ConfirmLogin/Confirm";

let url = process.env.REACT_APP_URL;

function Modal({ elModal }) {
    const second = useRef(null);
    const { lang, setLang } = useContext(Context);

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const log = new FormData();

    var requestOptions = {
        method: 'POST',
        body: log,
        redirect: 'follow'
    };
    //Request Function
    const onSubmit = (data) => {
        sessionStorage.setItem('phone', data.phone)
        log.append('phone', data.phone)
        fetch(`${url}sms`, requestOptions)
            .then(response => response.text())
            .then(function (response) {
                console.log(response)
                second.current.classList.add("modal--open");
                reset();
            })
            .catch(function (error) {
                console.error(error);
            })
        elModal.current.classList.remove("modal--open");
    }

    return (
        <>

            <Confirm second={second} />
            <div
                className="modal loginModal"
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
                    <img className="modal__img-auth"
                        src={LogoAuthorization}
                        alt="logo__auth" />

                    <h3 className="modal__title">
                        {content[lang].form_modal_title}
                    </h3>

                    <form onSubmit={handleSubmit(onSubmit)} className="form">
                        <TextField
                            sx={{ width: '280px', marginBottom: '20px' }}
                            variant='outlined'
                            label={content[lang].from_modal_inputtel}
                            {...register('phone', { required: 'Raqam Kiriting' })}
                            error={!!errors?.phone}
                            helperText={errors?.phone ? errors.phone.message : null}
                        />
                        <Button
                            className="form__authorization-btn"
                            type='submit'
                            variant='contained'>
                            {content[lang].from_modal_btnsubmit}
                        </Button>
                        <NavLink to={"/SignUp"}>
                            <Button
                                className="form__authorization-link">
                                {content[lang].from_sign}
                            </Button>
                        </NavLink>
                    </form>

                    <IconButton
                        aria-label="close"
                        className="modal__close-btn">
                    </IconButton>
                </div>
            </div >
        </>
    );
};

export default Modal;