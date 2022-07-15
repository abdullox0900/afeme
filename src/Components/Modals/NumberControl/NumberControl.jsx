//Import React and Hooks
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'

//Import MUI
import { Modal, TextField, Typography } from '@mui/material';

//Import Request Package
import axios from 'axios';

//Import Style
import style from "./NumberControl.module.scss";

//Import Components
import SuccessIL from '../../../Assets/Img/verify.svg';
import Error from "../Error/Error";
import Success from "../Success/Success";
import { useNavigate } from 'react-router-dom';

// Import useContext => Localization
import { Context } from "../../../Context/LangContext";
import content from "../../../Localization/Content";

function NumberControl({ control, setControl, phone_number, setPhoneNumber }) {
    const { lang, setLang } = useContext(Context);
    const handleClose = () => setControl(false);//Close Control Message function
    const Navigate = useNavigate();
    const handleSuc = () => setSuc(true);//Open Success State
    const handleErr = () => setErr(true);//Open Error State
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [suc, setSuc] = useState(false);//Success State
    const [err, setErr] = useState(false);//Error State
    const name = sessionStorage.getItem('name')
    const lastname = sessionStorage.getItem('lastname')
    const email = sessionStorage.getItem('email')
    const phone = sessionStorage.getItem('phone')
    const passport = sessionStorage.getItem('passport')
    const user_type = sessionStorage.getItem('user_type')
    const region_id = sessionStorage.getItem('region_id')
    const description = sessionStorage.getItem('description')
    const experience = sessionStorage.getItem('experience')


    const Data = new FormData();

    Data.append('name', name)
    Data.append('lastname', lastname)
    Data.append('email', email)
    Data.append('phone', phone)
    Data.append('passport', passport)
    Data.append('region_id', region_id)
    Data.append('user_type', user_type)
    Data.append('experience', experience)
    Data.append('description', description)

    let requestOptions = {
        method: 'POST',
        body: Data,
        redirect: 'follow'
    };

    //HTTP Request Function
    const onSubmit = (data) => {
        Data.append('code', data.code)
        fetch("https://ali98.uz/api/register", requestOptions)
            .then(response => response.text())
            .then(function (response) {
                sessionStorage.clear();
                const Token = JSON.parse(response)
                localStorage.setItem('Token', Token.data);
                handleClose();
                handleSuc();
                Navigate('/Afeme')
                window.location.reload()
            })
            .catch(function (error) {
                handleClose();
                handleErr();
            })
    }
    return (
        <div>
            <Success suc={suc} setSuc={setSuc} />{/* Success Modal */}
            <Error err={err} setErr={setErr} />{/* Error Modal */}
            <Modal
                open={control}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form className={style.wrapper} onSubmit={handleSubmit(onSubmit)}>
                    <img src={SuccessIL} alt="alt" style={{ width: '185px', height: '200px' }} />
                    <Typography className={style.title} id="modal-modal-title" variant="h6" component="h2">
                        {phone_number}<span> {content[lang].to} <br />{content[lang].confirm}</span>
                    </Typography>
                    <TextField
                        className="form__input form__input-lastname"
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ mt: 2, mb: 2, width: "260px" }}
                        {...register('code', { required: `${content[lang].codemessage}` })}
                        error={!!errors?.code}
                        helperText={errors?.code ? errors.code.message : null}
                    />
                    <div className={style.btnG}>
                        <button onClick={() => handleClose()} className={style.button}>{content[lang].back}</button>
                        <input type="submit" className={style.button} />
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default NumberControl