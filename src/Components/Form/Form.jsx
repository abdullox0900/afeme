// Import => React and React Hooks
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from 'react-hook-form'

//Import => Request Package
import axios from "axios";
// Import => MUI Components
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
}
    from "@mui/material";

//Import => Components
// import { Container } from "@mui/material";
import AfemeLogo from "../../Assets/Img/afeme-logo.svg"
import "../../Assets/scss/colors.scss";
import "../Form/Form.scss";
import NumberControl from "../Modals/NumberControl/NumberControl";

// Import useContext => Localization
import { useContext } from 'react';
import { Context } from '../../Context/LangContext';
import content from '../../Localization/Content';
import LoginImg from "../LoginImg/LoginImg";


let url = process.env.REACT_APP_URL;

function Form() {
    // Localization == useContext
    const { lang, setLang } = useContext(Context);
    const [show, setShow] = useState(false)

    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
    //Modal States
    const [phone_number, setPhoneNumber] = useState('')
    const [control, setControl] = useState(false);
    const handleControl = () => setControl(true);
    //Recieve Regions State
    const [regions, setRegions] = useState([]);
    const [experience, setExperience] = useState('');
    const [description, setDescription] = useState('');

    //Send Date's and set Token in localStorage, Reset Input Value's

    const singup = new FormData();

    let requestOptions = {
        method: 'POST',
        body: singup,
        redirect: 'follow'
    };

    const onSubmit = (data) => {
        singup.append('name', data.name)
        singup.append('phone', data.phone)
        sessionStorage.setItem('name', data.name)
        sessionStorage.setItem('experience', experience)
        sessionStorage.setItem('description', description)
        sessionStorage.setItem('name', data.name)
        sessionStorage.setItem('lastname', data.lastname);
        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('phone', data.phone);
        sessionStorage.setItem('password', data.password);
        sessionStorage.setItem('user_type', data.user_type);
        sessionStorage.setItem('region_id', data.region_id);

        fetch(`${url}sms`, requestOptions)
            .then(response => response.text())
            .then(function (response) {
                let status = JSON.parse(response);
                if (status.status == true) {
                    handleControl();
                    setShow(false)
                } else {
                    setShow(true)
                }
            })
        setPhoneNumber(data.phone)
    }

    //Recieve Regions Request
    useEffect(() => {
        const regions = async () => {
            try {
                const res = await axios.get(`${url}regions`);
                if (res) {
                    let data = res.data.data
                    setRegions(data)
                }
            } catch(error) {}
        }
        regions();
    }, [])

    const exper = useRef(null);
    const area = useRef(null);
    const { ref, ...rest } = register('experience');
    useEffect(() => {
        function Input(e) {
            const Bussines = 'bussines';
            const Type = watch(['user_type']);
            if (Type == Bussines) {
                exper.current.classList.remove('default')
                area.current.classList.remove('default')
            } else {
                exper.current.classList.add('default')
                area.current.classList.add('default')
            }
        }
        Input()
    })

    return (
        <>
            <div className="form_wrap">
                <div className="ilus">
                    <LoginImg />
                </div>
                <NumberControl control={control} setControl={setControl} phone_number={phone_number} setPhoneNumber={setPhoneNumber} />
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <img className="form_img" src={AfemeLogo} alt="" data-aos="zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="200"
                        data-aos-offset="10"
                        data-aos-duration="900" />
                    <h1 className="form_title">{content[lang].from_sign}</h1>
                    {/*UserType Input*/}
                    <div className="usertregion">
                        <FormControl className="type">
                            <InputLabel id="demo-simple-select-label">{content[lang].form_select_jis}</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                defaultValue={'personal'}
                                label={content[lang].form_select_jis}
                                {...register('user_type')}
                            >
                                <MenuItem value={'personal'}>{content[lang].form_select_type_sh}</MenuItem>
                                <MenuItem value={'bussines'}>{content[lang].form_select_type_b}</MenuItem>
                            </Select>
                        </FormControl>

                        {/* User Region Input */}
                        <FormControl className="region">
                            <InputLabel id="viloyat"> {content[lang].form_select_vil} </InputLabel>
                            <Select
                                labelId="viloyat"
                                id="viloyat"
                                label={content[lang].form_select_vil}
                                {...register('region_id')}
                            >
                                {regions.map((region) => (
                                    <MenuItem
                                        key={region.id}
                                        value={region.id}
                                    >
                                        {lang == "uz"
                                            ? region.name_uz : lang == "ru"
                                                ? region.name_ru : region.name_en}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    {/*FirstName Input*/}
                    <div className="fullname">
                        <TextField
                            className="name"
                            id="outlined-basic"
                            label={content[lang].from_select_nam}
                            variant="outlined"
                            {...register('name', { required: `${content[lang].form_select_nam_req}` })}
                            error={!!errors?.name}
                            helperText={errors?.name ? errors.name.message : null}
                        />
                        {/*LastName Input*/}
                        <TextField
                            className="lastname"
                            id="outlined-basic"
                            label={content[lang].form_select_las}
                            variant="outlined"
                            {...register('lastname', { required: `${content[lang].form_select_nam_req}` })}
                            error={!!errors?.lastname}
                            helperText={errors?.lastname ? errors.lastname.message : null}
                        />
                    </div>
                    {/*Email Input*/}
                    <TextField
                        className="email"
                        id="outlined-basic"
                        label={content[lang].form_select_email}
                        variant="outlined"
                        fullWidth
                        {...register('email', {
                            required: `${content[lang].form_select_email_req}`,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: `${content[lang].forgot_email_err}`
                            }
                        })}
                        error={!!errors?.email}
                        helperText={errors?.email ? errors.email.message : null}
                    />
                    <input
                        ref={exper}
                        type="number"
                        className="disable default"
                        placeholder={content[lang].rexperience}
                        onChange={(e) => setExperience(e.target.value)}
                    />
                    <textarea
                        ref={area}
                        type="text"
                        placeholder={content[lang].bio}
                        className="textarea disable default"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    {/*IDCard 'Password' Input*/}
                    <TextField
                        className="password"
                        id="outlined-basic"
                        label={content[lang].form_select_pass}
                        variant="outlined"
                        fullWidth
                        type={'password'}
                        {...register('password', {
                            required: `${content[lang].form_select_pass_req}`,
                        })}
                        error={!!errors?.password}
                        helperText={errors?.password ? errors.password.message : null}
                    />

                    {/*PhoneNumber Input*/}
                    <TextField
                        className="number"
                        id="outlined-number"
                        label={content[lang].form_select_tel}
                        type="text"
                        fullWidth
                        {...register('phone', { required: `${content[lang].form_select_tel_req}` })}
                        error={!!errors?.phone}
                        helperText={errors?.phone ? errors.phone.message : null}
                    />
                    <p style={{ display: show ? 'block' : 'none' }}>Bu raqam mavjud</p>
                    {/* SingUp and LogIn Buttons */}
                    <div className="btns">
                        <NavLink
                            to={"/Afeme"}
                            className="link">
                            {content[lang].have}
                        </NavLink>
                        <button
                            className="button"
                            type="submit"
                            sx={{ p: 1.3, ml: 22.5 }}
                            variant="contained">
                            {content[lang].sing}
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Form;