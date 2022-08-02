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

let url = process.env.REACT_APP_URL;

function Modal({ elModal }) {
    const second = useRef(null);
    const [show, setShow] = useState(false)
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
        log.append('phone', data.phone)
        log.append('password', data.password)
        fetch(`${url}login`, requestOptions)
            .then(response => response.text())
            .then(function (response) {
                let a = JSON.parse(response);
                console.log(a);
                if (a.status === true) {
                    localStorage.setItem('Token', a.data);
                    window.location.reload();
                    reset();
                } else {
                    setShow(true)
                }
            })
    }

    return (
        <>
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
                        <TextField
                            sx={{ width: '280px', marginBottom: '5px' }}
                            variant='outlined'
                            type={'password'}
                            label={'Password'}
                            {...register('password', { required: 'Password kiriting' })}
                            error={!!errors?.password}
                            helperText={errors?.password ? errors.password.message : null}
                        />
                        <p className='error' style={{ display: show ? 'block' : 'none' }}>Parol Notogri</p>
                        <NavLink to={'/forgot'}>
                            <p className="forgot">{content[lang].forgot}</p>
                        </NavLink>
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