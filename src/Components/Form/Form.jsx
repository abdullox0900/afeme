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
    const [region_id, setRegions] = useState([])
    const [name, setName] = useState('')//FirstName
    const [lastname, setLastName] = useState('')//LastName
    const [email, setEmail] = useState('')//Email
    const [phone, setPhone] = useState('')//PhoneNumber
    const [image, setImage] = useState('jhjhkjhjkhj')
    const [passport, setPassport] = useState('')//IDCard
    const [user_type, setUserType] = useState('')//UserType
    const [Regionsname, setRegionsname] = useState('')
    const [password, setPassword] = useState({//UserPassword
        amount: '',
        password: '',
        weight: '',
    });


    var data = new FormData();
    data.append('name', name);
    data.append('lastname', lastname);
    data.append('email', email);
    data.append('phone', phone);
    data.append('image', image);
    data.append('passport', passport);
    data.append('user_type', user_type);
    data.append('region_id', region_id);

    var config = {
        method: 'post',
        url: 'http://ali98.uz/api/register',
        headers: {
            // ...data.getHeaders()
        },
        data: data
    };
    function onSubmit() {   
        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
    }


    // let formData = new FormData()
    // formData.append('name', name)
    // formData.append('lastname', lastname)
    // formData.append('email', email)
    // formData.append('phone', phone)
    // formData.append('image', image)
    // formData.append('passport', passport)
    // formData.append('user_type', user_type)
    // formData.append('region_id', region_id)
    // formData.append('password', password)

    // //Post API Function
    // function onSubmit(e) {
    //     console.log(formData);
    //     axios.post('http://ali98.uz/api/register', formData)
    //         .then((res) => console.log('asda', res))
    // }
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
                            value={Regionsname}
                            label="Viloyat"
                            onChange={e => setRegionsname(e.target.value)}>

                            {region_id.map((region) => (
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