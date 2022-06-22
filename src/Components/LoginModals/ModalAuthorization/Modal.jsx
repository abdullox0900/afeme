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
import axios from "axios";
import Confirm from "../ConfirmLogin/Confirm";

function Modal({ elModal }) {
    const second = useRef(null)
    const { lang, setLang } = useContext(Context);

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    //Request Function
    const onSubmit = (data) => {
        const log = new FormData();
        sessionStorage.setItem('phone', data.phone)
        log.append('phone', data.phone)
        axios.post('http://ali98.uz/api/sms', log)
            .then(function (response) {
                const Token = JSON.stringify(response.data.data)
                localStorage.setItem('Token', Token);
                second.current.classList.add("modal--open");
            })
            .catch(function (error) {
                console.error(error);
            })
        reset();
        elModal.current.classList.remove("modal--open");
    }

    return (
        <>

            <Confirm second={second} />
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