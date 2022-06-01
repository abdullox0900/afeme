import React from "react";
import "../Form/Form.scss";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Container from "../Container/Container"
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LogoOval from "../../Assets/Img/logo-oval.svg";
import LogoHome from "../../Assets/Img/home-logo.svg";
import Button from '@mui/material/Button';
import "../../Assets/scss/colors.scss";
import LoadingButton from '@mui/lab/LoadingButton';
import { NavLink } from "react-router-dom";
import Modal from '../ModalAuthorization/Modal';



function Form() {

    const [age, setAge] = React.useState('');

    const handleChanges = (evt) => {
        setAge(evt.target.value);
    };

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const cusTomColor = {
        color: "$darkBlue"
    }

    const elModal = React.useRef()

    return (
        <>

            <Container>
                <form className="form">
                    <img className="logo-home" src={LogoHome} alt="img" data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="200"
                        data-aos-offset="10"
                        data-aos-duration="1500" />
                    <img className="logo-oval" src={LogoOval} alt="img" data-aos="zoom-in" ata-aos-easing="linear"
                        data-aos-duration="3000" />
                    <h1 className="form-title">Roʻyxatdan oʻtish</h1>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Jismoniy shaxs</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Jismoniy shaxs"
                            onChange={handleChanges}>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField className="form__input form__input-name" id="outlined-basic" label="Ism" variant="outlined"
                        sx={{ mt: 2, width: "240px" }} />
                    <TextField className="form__input form__input-lastname" id="outlined-basic" label="Familiya" variant="outlined" sx={{ mt: 2, ml: 2.5, mb: 2, width: "240px" }} />
                    <TextField className="form__input form__input-email" id="outlined-basic" label="Email" variant="outlined" fullWidth />
                    <TextField className="form__input form__input-number" id="outlined-number" label="Tel" type="number" fullWidth sx={{ mt: 2, }} />
                    <FormControl sx={{ mt: 2, width: '500' }} variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-password">Parol</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Parol"
                        />
                    </FormControl>
                    <div className="form__box">

                        <NavLink to={"/Afeme"} className="form__link-myaccount">Mening akkauntim bor</NavLink>
                        <Button className="form__btn" sx={{ p: 1.3, ml: 22.5 }} variant="contained"> Roʻyxatdan oʻtish</Button>
                    </div>

                    <Modal elModal={elModal} />
                </form>
            </Container>
        </>
    )
}

export default Form;