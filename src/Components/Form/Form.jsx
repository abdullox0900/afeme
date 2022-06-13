// Import React and React Hooks
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from 'react-hook-form'

//Import Request Package
import axios from "axios";

// Import MUI Components
import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    TextField,
    Typography
}
    from "@mui/material";



//Import Components
import Container from "../Container/Container"
// import LogoOval from "../../Assets/Img/logo-oval.svg";
// import LogoHome from "../../Assets/Img/home-logo.svg";
import AfemeLogo from "../../Assets/Img/afeme-logo.svg"
import "../../Assets/scss/colors.scss";
import "../Form/Form.scss";
import Tick from "../Animations/Tick/Tick";



function Form() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    //Modal States
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    //Recieve Regions State
    const [regions, setRegions] = useState([])


    //Send Date's and set Token in localStorage, Reset Input Value's
    const onSubmit = (data) => {
        const handleOpen = () => setOpen(true);
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
                const Token = JSON.stringify(response.data.data)
                localStorage.setItem('Token', Token);
            })
            .catch(function (error) {
                console.log(error);
            });
        handleOpen();
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
            <Container style={{ position: 'relative' }}>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <img className="form__img" src={AfemeLogo} alt="" data-aos="zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="200"
                        data-aos-offset="10"
                        data-aos-duration="900" />
                    <h1 className="form-title">Roʻyxatdan oʻtish</h1>
                    {/*UserType Input*/}
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
                                    {region.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {/*FirstName Input*/}
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
                            // onClick={(e) => onSubmit(e)}
                            sx={{ p: 1.3, ml: 22.5 }}
                            variant="contained">
                            Roʻyxatdan oʻtish
                        </button>
                    </div>
                </form>
                <div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box className="style">
                            <Tick />
                            <p className="title">Muvaffaqiyatli !!!</p>
                            <NavLink to={"/Afeme"}>
                                <button className="button">
                                    Bosh Sahifaga O'tish
                                </button>
                            </NavLink>
                        </Box>
                    </Modal>
                </div>
            </Container>
        </>
    )
}

export default Form;