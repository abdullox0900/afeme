// Import => React
import React, { useContext, useEffect, useState } from "react";

// Import => Components
import Container from "../../Components/Container/Container";
import UserProfilList from "../UserProfilList/UserProfilList";

import { UserContext } from "../../Context/UserContext";

import { Context } from "../../Context/LangContext";
import content from "../../Localization/Content";


// Import => Style Component
import "../../Components/UserProfil/UserProfil.scss";
import axios from "axios";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

let url = process.env.REACT_APP_URL;

function UserProfil() {
    const { lang, setLang } = useContext(Context);
    const { user } = useContext(UserContext);
    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [region, setRegion] = useState('')
    const [type, setType] = useState('')
    const [uniq, setUniq] = useState('')
    const [regions, setRegions] = useState([]);

    useEffect(() => {
        if (user.hasOwnProperty('data')) {
            setName(user.data.name);
            setLastName(user.data.lastname);
            setPhone(user.data.phone);
            setEmail(user.data.email);
            setType(user.data.user_type);
            setRegion(user.data.region_id.id);
            setUniq(user.data.id);
        }
    }, [user]);

    let token = localStorage.getItem('Token')
    let all = new URLSearchParams();
    all.append('name', name)
    all.append('lastname', lastname)
    all.append('phone', phone)
    all.append('email', email)
    all.append('user_type', type)
    all.append('region_id', region)

    let headersList = {
        "Accept": "*/*",
        'Authorization': `Bearer ${token}`
    }
    const Put = (e) => {
        fetch(`${url}user/${user.data.id}?paremeter=PUT`, {
            method: "PUT",
            headers: headersList,
            body: all
        }).then(function (response) {
            return response.text();
        }).then(function (data) {
            window.location.reload()
        })
    }

    useEffect(() => {
        const regions = async () => {
            try {
                const res = await axios.get(`${url}regions`);
                if (res) {
                    let data = res.data.data
                    setRegions(data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        regions();
    }, [])

    return (
        <>
            <Container>
                <div className="user-profil-wrap">
                    <UserProfilList />
                    <div className="personal">
                        <div className="title">
                            <p>ID//{uniq}</p>
                            <button type="submit" onClick={(e) => Put(e)}>{content[lang].editBtn}</button>
                        </div>
                        <div className="inpG">
                            <TextField
                                label={content[lang].userProfilName}
                                id="outlined-basic"
                                variant="outlined"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                label={content[lang].userProfilLastName}
                                id="outlined-basic"
                                variant="outlined"
                                value={lastname}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <TextField
                                label={content[lang].userProfilPhone}
                                id="outlined-basic"
                                variant="outlined"x
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <TextField
                                label='Email'
                                id="outlined-basic"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <FormControl className="form__controler-input2">
                                <InputLabel id="viloyat">{content[lang].form_select_vil}</InputLabel>
                                <Select
                                    labelId="viloyat"
                                    id="viloyat"
                                    label={content[lang].form_select_vil}
                                    value={region}
                                    onChange={(e) => setRegion(e.target.value)}
                                >
                                    {regions.map((region) => (
                                        <MenuItem
                                            key={region.id}
                                            value={region.id}
                                        >
                                            {lang == "uz" ? region.name_uz : lang !== "ru" ? region.name_en : region.name_ru}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl className="form__controler-input1">
                                <InputLabel id="demo-simple-select-label">{content[lang].form_select_jis}</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={type}
                                    label={content[lang].form_select_jis}
                                    onChange={(e) => setType(e.target.value)}
                                >
                                    <MenuItem value={'personal'}>{content[lang].form_select_type_sh}</MenuItem>
                                    <MenuItem value={'bussines'}>{content[lang].form_select_type_b}</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default UserProfil;