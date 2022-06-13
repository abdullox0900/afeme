//Import React vs React Hooks
import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { NavLink } from "react-router-dom";
//Import MUI Components
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { TextField } from "@mui/material";
//Import Components
import LogoAuthorization from "../../Assets/Img/logo_authorization.svg";
import "../../Assets/scss/colors.scss";
import "../../Components/ModalAuthorization/Modal.scss";
//Import Request Package
import axios from "axios";

function Modal({ elModal }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    //Request Function
    const onSubmit = (data) => {
        const log = new FormData();
        log.append('phone', data.phone)
        axios.post('http://ali98.uz/api/login', log)
            .then(function (response) {
                const Token = JSON.stringify(response.data.data)
                localStorage.setItem('Token', Token);
            })
            .catch(function (error) {
                console.error(error);
            })
        reset();
        elModal.current.classList.remove("modal--open");
    }

    return (
        <div
            className="modal"
            ref={elModal}
            //Modal Open/Close Function
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
                    Saytga kirish
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <TextField
                        sx={{ width: '280px', marginBottom: '20px' }}
                        variant='outlined'
                        label='Telefon Raqami'
                        {...register('phone', { required: 'Raqam Kiriting' })}
                        error={!!errors?.phone}
                        helperText={errors?.phone ? errors.phone.message : null}
                    />
                    <Button
                        className="form__authorization-btn"
                        type='submit'
                        variant='contained'>
                        Kirish
                    </Button>
                    <NavLink to={"/SignUp"}>
                        <Button
                            className="form__authorization-link">
                            Roʻyxatdan oʻtish
                        </Button>
                    </NavLink>
                </form>

                <IconButton
                    aria-label="close"
                    className="modal__close-btn">
                </IconButton>
            </div>
        </div >
    );
};

export default Modal;