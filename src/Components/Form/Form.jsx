// Import React and React Hooks
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

//Import HTTP 
import axios from "axios";

// Import MUI Components
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

//Import Components
import Container from "../Container/Container"
import LogoOval from "../../Assets/Img/logo-oval.svg";
import LogoHome from "../../Assets/Img/home-logo.svg";
import "../../Assets/scss/colors.scss";
import "../Form/Form.scss";
import { Box, Modal, Typography } from "@mui/material";



function Form() {
    const [name, setName] = useState('')//FirstName
    const [lastname, setLastName] = useState('')//LastName
    const [email, setEmail] = useState('')//Email
    const [phone, setPhone] = useState('')//PhoneNumber
    const [passport, setPassport] = useState('')//IDCard
    const [user_type, setUserType] = useState('')//UserType
    const [regions, setRegions] = useState([])//Recieve Regions State
    const [region_id, setRegion] = useState('')//Send Region State

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    var data = new FormData();
    data.append('name', name);
    data.append('lastname', lastname);
    data.append('email', email);
    data.append('phone', phone);
    data.append('passport', passport);
    data.append('user_type', user_type);
    data.append('region_id', region_id);

    const config = {
        method: 'post',
        url: 'http://ali98.uz/api/register',
        headers: {
            // ...data.getHeaders()
        },
        data: data
    };
    //Send Date's set Token in localStorage, Reset Input Value's
    function onSubmit(e) {
        const handleOpen = () => setOpen(true);
        e.preventDefault();
        axios(config)
            .then(function (response) {
                const Token = JSON.stringify(response.data.data)
                localStorage.setItem('Token', Token);
            })
            .catch(function (error) {
                console.log(error);
            });
        setName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setPassport('')
        setUserType('')
        setRegion('')
        handleOpen();
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
                <div className="form">
                    <img className="logo-home" src={LogoHome} alt="img" data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="200"
                        data-aos-offset="10"
                        data-aos-duration="1500" />
                    <img className="logo-oval" src={LogoOval} alt="img" data-aos="zoom-in" ata-aos-easing="linear"
                        data-aos-duration="3000" />
                    <h1 className="form-title">Roʻyxatdan oʻtish</h1>
                    {/*UserType Input*/}
                    <FormControl sx={{ width: "240px", mt: 2, mr: 2.5 }}>
                        <InputLabel id="demo-simple-select-label">Jismoniy shaxs</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Jismoniy shaxs" value={user_type}
                            onChange={e => setUserType(e.target.value)}>
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
                            value={region_id}
                            label="Viloyat"
                            onChange={e => setRegion(e.target.value)}>

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
                        label="Ism"
                        variant="outlined"
                        value={name}
                        sx={{ mt: 2, width: "240px" }}
                        onChange={e => setName(e.target.value)}
                    />
                    {/*LastName Input*/}
                    <TextField
                        className="form__input form__input-lastname"
                        id="outlined-basic"
                        label="Familiya"
                        variant="outlined"
                        value={lastname}
                        sx={{ mt: 2, ml: 2.5, mb: 2, width: "240px" }}
                        onChange={e => setLastName(e.target.value)}
                    />
                    {/*Email Input*/}
                    <TextField
                        className="form__input form__input-email"
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    {/*IDCard 'Passport' Input*/}
                    <TextField
                        className="form__input form__input-passport"
                        id="outlined-basic"
                        label="Passport"
                        variant="outlined"
                        fullWidth
                        value={passport}
                        sx={{ mt: 2 }}
                        onChange={e => setPassport(e.target.value)}
                    />
                    {/*PhoneNumber Input*/}
                    <TextField
                        className="form__input form__input-number"
                        id="outlined-number"
                        label="Telefon Raqami"
                        type="number"
                        fullWidth
                        value={phone}
                        sx={{ mt: 2, }}
                        onChange={e => setPhone(e.target.value)}
                    />
                    {/* SingUp and LogIn Buttons */}
                    <div className="form__box">
                        <NavLink
                            to={"/Afeme"}
                            className="form__link-myaccount"
                        >
                            Mening akkauntim bor
                        </NavLink>
                        <button
                            className="button"
                            onClick={(e) => onSubmit(e)}
                            sx={{ p: 1.3, ml: 22.5 }}
                            variant="contained">
                            Roʻyxatdan oʻtish
                        </button>
                    </div>
                </div>
                <div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box className="style">
                            <p className="title">Royhatdan Muvafaqqiyatli <br /> Otdingiz</p>
                            <NavLink to={"/Afeme"}>
                                <button className="button">
                                    Bosh Sahifaga
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