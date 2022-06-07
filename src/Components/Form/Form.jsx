// Import React and React Hooks
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//Import HTTP 
import axios from "axios";

// Import MUI Components
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

//Import Components
import Container from "../Container/Container"
import LogoOval from "../../Assets/Img/logo-oval.svg";
import LogoHome from "../../Assets/Img/home-logo.svg";
import "../../Assets/scss/colors.scss";
import "../Form/Form.scss";



function Form() {
    const [name, setName] = useState('')//FirstName
    const [lastname, setLastName] = useState('')//LastName
    const [email, setEmail] = useState('')//Email
    const [phone, setPhone] = useState('')//PhoneNumber
    const [photo, setPhoto] = useState('sdfsdfsdadsfsdfsdf')
    const [passport, setPassport] = useState('')//IDCard
    const [user_type, setUserType] = useState('')//UserType
    const [region_id, setRegions] = useState('')//UserRegion
    const [password, setPassword] = useState({//UserPassword
        amount: '',
        password: '',
        weight: '',
    });

    let formData = new FormData()
    formData.append('name', name)
    formData.append('lastname', lastname)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('photo', photo)
    formData.append('passport', passport)
    formData.append('user_type', user_type)
    formData.append('region_id', region_id)
    formData.append('password', password)

    //Post API Function
    function onSubmit(e) {
        console.log(formData);
        axios.post('http://ali98.uz/api/register', formData)
            .then((res) => console.log('asda', res))
    }
    //Password OnChange Function
    const handleChange = (prop) => (event) => {
        setPassword({ ...password, [prop]: event.target.value });
    };
    //Password Visible Function
    const handleClickShowPassword = () => {
        setPassword({
            ...password,
            showPassword: !password.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>

            <Container>
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
                    <FormControl sx={{ width: "240px", mr: 2.5 }}>
                        <InputLabel id="demo-simple-select-label">Jismoniy shaxs</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Jismoniy shaxs"
                            onChange={e => setUserType(e.target.value)}>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    {/*User Region Input*/}
                    <FormControl sx={{ mt: '2', width: '240px' }}>
                        <InputLabel id="viloyat-label">Viloyat</InputLabel>
                        <Select
                            labelId="viloyat-label"
                            id="viloyat"
                            label="Viloyat"
                            onChange={e => setRegions(e.target.value)}>
                            <MenuItem value={1}>Ten</MenuItem>
                            <MenuItem value={2}>Twenty</MenuItem>
                            <MenuItem value={3}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    {/*FirstName Input*/}
                    <TextField
                        className="form__input form__input-name"
                        id="outlined-basic"
                        label="Ism"
                        variant="outlined"
                        sx={{ mt: 2, width: "240px" }}
                        onChange={e => setName(e.target.value)}
                    />
                    {/*LastName Input*/}
                    <TextField
                        className="form__input form__input-lastname"
                        id="outlined-basic"
                        label="Familiya"
                        variant="outlined"
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
                        onChange={e => setEmail(e.target.value)}
                    />
                    {/*IDCard 'Passport' Input*/}
                    <TextField
                        className="form__input form__input-passport"
                        id="outlined-basic"
                        label="Passport"
                        variant="outlined"
                        fullWidth
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
                        sx={{ mt: 2, }}
                        onChange={e => setPhone(e.target.value)}
                    />
                    {/*PassWord Input*/}
                    <FormControl
                        sx={{ mt: 2, width: '500' }}
                        variant="outlined"
                        fullWidth
                    >
                        <InputLabel
                            htmlFor="outlined-adornment-password"
                        >Parol
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={password.showPassword ? 'text' : 'password'}
                            value={password.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment
                                    position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {password.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Parol"
                        />
                    </FormControl>
                    {/* SingUp and LogIn Buttons */}
                    <div className="form__box">
                        <NavLink
                            to={"/Afeme"}
                            className="form__link-myaccount"
                        >
                            Mening akkauntim bor
                        </NavLink>
                        <Button
                            onClick={(e) => onSubmit(e)}
                            className="form__btn"
                            sx={{ p: 1.3, ml: 22.5 }}
                            variant="contained">
                            Roʻyxatdan oʻtish
                        </Button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Form;