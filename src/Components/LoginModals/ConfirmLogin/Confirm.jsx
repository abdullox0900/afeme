//Import React vs React Hooks
import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { NavLink } from "react-router-dom";

//Import MUI Components
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { TextField } from "@mui/material";

//Import Components
import LogoAuthorization from "../../../Assets/Img/logo_authorization.svg";
import "../../../Assets/scss/colors.scss";
import "../ModalAuthorization/Modal.scss";

// Import useContext => Localization
import { useContext } from 'react';
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/Content';
import Error from '../../Modals/Error/Error'

//Import Request Package
import axios from "axios";

function Confirm({ second }) {
    const [err, setErr] = useState(false);//Error State
    const handleErr = () => setErr(true);
    const phone = sessionStorage.getItem('phone') !== undefined ? sessionStorage.getItem('phone') : ''
    const { lang, setLang } = useContext(Context);

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    //Request Function
    const onSubmit = (data) => {
        const log = new FormData();
        log.append('phone', phone)
        log.append('code', data.code)
        axios.post('http://ali98.uz/api/login', log)
            .then(function (response) {
                sessionStorage.clear();
                const Token = (response.data.data)
                localStorage.setItem('Token', Token);
                window.location.reload();
            })
            .catch(function (error) {
                handleErr()
            })
        second.current.classList.remove("modal--open");
        reset();
    }



    return (
        <>
            <Error err={err} setErr={setErr} />
            <div
                className="modal"
                ref={second}
                //Modal Open/Close Function
                onClick={(evt) => {
                    if (
                        evt.target.matches(".modal") || evt.target.matches(".modal__close-btn")
                    ) {
                        second.current.classList.remove("modal--open");
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
                            label='Code'
                            {...register('code', { required: 'Raqam Kiriting' })}
                            error={!!errors?.code}
                            helperText={errors?.code ? errors.code.message : null}
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

export default Confirm