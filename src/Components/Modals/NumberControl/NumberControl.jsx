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
import Tick from '../../Animations/Tick/Tick';
import Error from "../Error/Error";
import Success from "../Success/Success";

function NumberControl({ control, setControl, phone, setPhone }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [suc, setSuc] = useState(false);//Success State
    const [err, setErr] = useState(false);//Error State
    const handleClose = () => setControl(false);//Close Control Message function
    const handleSuc = () => setSuc(true);//Open Success State
    const handleErr = () => setErr(true);//Open Error State
    //HTTP Request Function
    const onSubmit = (data) => {
        const control = new FormData();
        control.append('control', data.control)
        axios.post('http://ali98.uz/api/login', control)
            .then(function (response) {
                const Token = response.data.data
                localStorage.setItem('Token', Token);
                handleClose();
                handleSuc();
            })
            .catch(function (error) {
                handleErr();
            })
        reset();
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
                    <Tick />
                    <Typography className={style.title} id="modal-modal-title" variant="h6" component="h2">
                        +{phone}<span> ga <br /> borgan sms kodni kiriting !!!</span>
                    </Typography>
                    <TextField
                        className="form__input form__input-lastname"
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ mt: 2, mb: 2, width: "260px" }}
                        {...register('control', { required: 'Sms Kodni kiring!!!' })}
                        error={!!errors?.control}
                        helperText={errors?.control ? errors.control.message : null}
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