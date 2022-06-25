//Import React and Hooks
import React, { useState } from 'react'
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

function NumberControl({ control, setControl, phone_number, setPhoneNumber }) {
    const handleClose = () => setControl(false);//Close Control Message function
    const Navigate = useNavigate();
    const handleSuc = () => setSuc(true);//Open Success State
    const handleErr = () => setErr(true);//Open Error State
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [suc, setSuc] = useState(false);//Success State
    const [err, setErr] = useState(false);//Error State
    const name = sessionStorage.getItem('name') !== undefined ? sessionStorage.getItem('name') : ''
    const lastname = sessionStorage.getItem('lastname') !== undefined ? sessionStorage.getItem('lastname') : ''
    const email = sessionStorage.getItem('email') !== undefined ? sessionStorage.getItem('email') : ''
    const phone = sessionStorage.getItem('phone') !== undefined ? sessionStorage.getItem('phone') : ''
    const passport = sessionStorage.getItem('passport') !== undefined ? sessionStorage.getItem('passport') : ''
    const user_type = sessionStorage.getItem('user_type') !== undefined ? sessionStorage.getItem('user_type') : ''
    const region_id = sessionStorage.getItem('region_id') !== undefined ? sessionStorage.getItem('region_id') : ''
    //HTTP Request Function
    const onSubmit = (data) => {
        const control = new FormData();
        control.append('code', data.code)
        control.append('name', name)
        control.append('lastname', lastname)
        control.append('email', email)
        control.append('phone', phone)
        control.append('passport', passport)
        control.append('region_id', region_id)
        control.append('user_type', user_type)
        axios.post('http://ali98.uz/api/login', control)
            .then(function (response) {
                sessionStorage.clear();
                const Token = response.data.data
                localStorage.setItem('Token', Token);
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
                    <img src={SuccessIL} alt="alt" style={{width:'185px', height:'200px'}} />
                    <Typography className={style.title} id="modal-modal-title" variant="h6" component="h2">
                        +{phone_number}<span> ga <br /> borgan sms kodni kiriting !!!</span>
                    </Typography>
                    <TextField
                        className="form__input form__input-lastname"
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ mt: 2, mb: 2, width: "260px" }}
                        {...register('code', { required: 'Sms Kodni kiring!!!' })}
                        error={!!errors?.code}
                        helperText={errors?.code ? errors.code.message : null}
                    />
                    <div className={style.btnG}>
                        <button onClick={() => handleClose()} className={style.button}>Orkaga</button>
                        <input type="submit" className={style.button} />
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default NumberControl