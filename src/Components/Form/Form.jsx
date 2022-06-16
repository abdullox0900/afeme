// Import React and React Hooks
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from 'react-hook-form'

//Import Request Package
import axios from "axios";

// Import MUI Components
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
}
    from "@mui/material";

//Import Components
import Container from "../Container/Container"
import AfemeLogo from "../../Assets/Img/afeme-logo.svg"
import "../../Assets/scss/colors.scss";
import "../Form/Form.scss";
import Error from "../Modals/Error/Error";
import NumberControl from "../Modals/NumberControl/NumberControl";



function Form() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    //Modal States
    const [phone, setPhone] = useState('')
    const [err, setErr] = useState(false);
    const [control, setControl] = useState(false);
    const handleControl = () => setControl(true);
    const handleErr = () => setErr(true);

    //Recieve Regions State
    const [regions, setRegions] = useState([])


    //Send Date's and set Token in localStorage, Reset Input Value's
    const onSubmit = (data) => {
        const singup = new FormData();
        singup.append('name', data.name)
        singup.append('lastname', data.lastname);
        singup.append('email', data.email);
        singup.append('phone', data.phone);
        singup.append('passport', data.passport);
        singup.append('user_type', data.user_type);
        singup.append('region_id', data.region_id);
        axios.post('http://ali98.uz/api/register', singup)
            .then(function (response) {
                const Token = response.data.data
                const Sts = response.data.status
                console.log(response);
                localStorage.setItem('Token', Token);
                if (Sts) {
                    handleControl();
                }
            })
            .catch(function (error) {
                handleErr(error);
            })
        setPhone(data.phone)
        reset();
    }

    //Recieve Regions Request
    useEffect(() => {
        const regions = async () => {
            try {
                const res = await axios.get('https://ali98.uz/api/regions');
                if (res) {
                    let data = res.data.data
                    setRegions(data)
                } else {
                    alert('xato')
                }
            } catch (error) {
                console.log(error);
            }
        }
        regions();
    }, [])

    return (
        <>
            <Error err={err} setErr={setErr} />
            <Container style={{ position: 'relative' }}>
                <NumberControl control={control} setControl={setControl} phone={phone} setPhone={setPhone} />
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <img className="form__img" src={AfemeLogo} alt="" data-aos="zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="200"
                        data-aos-offset="10"
                        data-aos-duration="900" />
                    <h1 className="form-title">Roʻyxatdan oʻtish</h1>
                    {/*UserType Input*/}
                    <div>
                        <FormControl sx={{ width: "240px", mt: 2, mr: 2.5 }}>
                            <InputLabel id="demo-simple-select-label">Jismoniy shaxs</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                defaultValue={'mijoz'}
                                label="Jismoniy shaxs"
                                {...register('user_type')}
                            >
                                <MenuItem value={'mijoz'}>Mijoz</MenuItem>
                                <MenuItem value={'rieltor'}>Rieltor</MenuItem>
                                <MenuItem value={'companiya'}>Companiya</MenuItem>
                                <MenuItem value={'quruvchi firma'}>Quruvchi Firma</MenuItem>
                            </Select>
                        </FormControl>
                        {/* User Region Input */}
                        <FormControl sx={{ mt: 2, width: "240px" }}>
                            <InputLabel id="viloyat">Viloyat</InputLabel>
                            <Select
                                labelId="viloyat"
                                id="viloyat"
                                label="Viloyat"
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
                    <div>
                        <TextField
                            className="form__input form__input-name"
                            id="outlined-basic"
                            label="Ism*"
                            variant="outlined"
                            sx={{ mt: 2, width: "240px" }}
                            {...register('name', { required: 'Ism Kiriting' })}
                            error={!!errors?.name}
                            helperText={errors?.name ? errors.name.message : null}
                        />
                        {/*LastName Input*/}
                        <TextField
                            className="form__input form__input-lastname"
                            id="outlined-basic"
                            label="Familiya"
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
                            // pattern: {
                            //     value: /^[A-PR-WYa-pr-wy][1-9]\\d\\s?\\d{4}[1-9]$/i,
                            //     message: 'Passport Notogri'
                            // }
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
                            Mening akkauntim bor
                        </NavLink>
                        <button
                            className="button"
                            type="submit"
                            sx={{ p: 1.3, ml: 22.5 }}
                            variant="contained">
                            Roʻyxatdan oʻtish
                        </button>
                    </div>
                </form>
            </Container>
        </>
    )
}

export default Form;