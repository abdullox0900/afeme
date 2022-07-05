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
import Error from "../Modals/Error/Error";
import NumberControl from "../Modals/NumberControl/NumberControl";
import Container from "../Container/Container"

// Import useContext => Localization
import { useContext } from 'react';
import { Context } from '../../Context/LangContext';
import content from '../../Localization/Content';


function Form() {
    // Localization == useContext
    const { lang, setLang } = useContext(Context);

    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    //Modal States
    const [phone_number, setPhoneNumber] = useState('')
    const [err, setErr] = useState(false);
    const [control, setControl] = useState(false);
    const handleControl = () => setControl(true);
    const handleErr = () => setErr(true);
    //Recieve Regions State
    const [regions, setRegions] = useState([]);
    const [experience, setExperience] = useState('');
    const [description, setDescription] = useState('');

    //Send Date's and set Token in localStorage, Reset Input Value's

    const onSubmit = (data) => {
        const singup = new FormData();
        sessionStorage.setItem('name', data.name)
        sessionStorage.setItem('experience', experience)
        sessionStorage.setItem('description', description)
        sessionStorage.setItem('name', data.name)
        sessionStorage.setItem('lastname', data.lastname);
        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('phone', data.phone);
        sessionStorage.setItem('passport', data.passport);
        sessionStorage.setItem('user_type', data.user_type);
        sessionStorage.setItem('region_id', data.region_id);
        singup.append('phone', data.phone)
        axios.post('http://ali98.uz/api/sms', singup)
            .then(function (response) {
                const Token = response.data.data
                const Sts = response.data.status
                localStorage.setItem('Token', Token);
                if (Sts) {
                    handleControl();
                }
            })
            .catch(function (error) {
                handleErr(error);
            })
        setPhoneNumber(data.phone)
    }

    //Recieve Regions Request
    useEffect(() => {
        const regions = async () => {
            try {
                const res = await axios.get('https://ali98.uz/api/regions');
                if (res) {
                    let data = res.data.data
                    setRegions(data)
                }
            } catch (error) {
                console.log("error")
            }
        }
        regions();
    }, [])

    const exper = useRef(null);
    const area = useRef(null);
    const { ref, ...rest } = register('experience');
    useEffect(() => {
        function Input(e) {
            const Rieltor = 'rieltor';
            const Type = watch(['user_type']);
            if (Type == Rieltor) {
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
            <div className="form__wrap">
                <Error err={err} setErr={setErr} />
                <NumberControl control={control} setControl={setControl} phone_number={phone_number} setPhoneNumber={setPhoneNumber} />
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <img className="form__img" src={AfemeLogo} alt="" data-aos="zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="200"
                        data-aos-offset="10"
                        data-aos-duration="900" />
                    <h1 className="form-title">{content[lang].from_sign}</h1>
                    {/*UserType Input*/}
                    <div className="form__controler-one">
                        <FormControl className="form__controler-input1">
                            <InputLabel id="demo-simple-select-label">{content[lang].form_select_jis}</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                defaultValue={'mijoz'}
                                label={content[lang].form_select_jis}
                                {...register('user_type')}
                            >
                                <MenuItem value={'mijoz'}>{content[lang].form_select_type_m}</MenuItem>
                                <MenuItem value={'rieltor'}>{content[lang].form_select_type_r}</MenuItem>
                                <MenuItem value={'companiya'}>{content[lang].form_select_type_c}</MenuItem>
                                <MenuItem value={'quruvchi firma'}>{content[lang].form_select_type_q}</MenuItem>
                            </Select>
                        </FormControl>

                        {/* User Region Input */}
                        <FormControl className="form__controler-input2">
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
                                        {region.name_uz}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    {/*FirstName Input*/}
                    <div className="form__controler-input">
                        <TextField
                            className="form__input form__input-name"
                            id="outlined-basic"
                            label={content[lang].from_select_nam}
                            variant="outlined"
                            sx={{ mt: 2, width: "240px", }}
                            {...register('name', { required: 'Ism Kiriting' })}
                            error={!!errors?.name}
                            helperText={errors?.name ? errors.name.message : null}
                        />
                        {/*LastName Input*/}
                        <TextField
                            className="form__input form__input-lastname"
                            id="outlined-basic"
                            label={content[lang].form_select_las}
                            variant="outlined"
                            sx={{ mt: 2, ml: 2.5, mb: 2, width: "240px" }}
                            {...register('lastname')}
                        />
                    </div>
                    {/*Email Input*/}
                    <TextField
                        className="form__input form__input-email"
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        {...register('email', {
                            required: false,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Email manzili noto‘g‘ri'
                            }
                        })}
                        error={!!errors?.email}
                        helperText={errors?.email ? errors.email.message : null}
                    />
                    <input
                        ref={exper}
                        type="number"
                        className="disable default form__input-password"
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
                    {/*IDCard 'Passport' Input*/}
                    <TextField
                        className="form__input form__input-passport"
                        id="outlined-basic"
                        label="Passport*"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        {...register('passport', {
                            required: 'Passport Seria Kiriting',
                        })}
                        error={!!errors?.passport}
                        helperText={errors?.passport ? errors.passport.message : null}
                    />

                    {/*PhoneNumber Input*/}
                    <TextField
                        className="form__input form__input-number"
                        id="outlined-number"
                        label="Telefon Raqami*"
                        type="number"
                        fullWidth
                        sx={{ mt: 2, }}
                        {...register('phone', { required: 'Raqam Kiriting' })}
                        error={!!errors?.phone}
                        helperText={errors?.phone ? errors.phone.message : null}
                    />
                    {/* SingUp and LogIn Buttons */}
                    <div className="form__box">
                        <NavLink
                            to={"/Afeme"}
                            className="form__link-myaccount">
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