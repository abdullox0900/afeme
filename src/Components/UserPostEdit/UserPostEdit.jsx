// Import React
import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

// Import Components
import Header from "../Header/Header";
import UserProfilList from "../UserProfilList/UserProfilList";
import Container from "../Container/Container";
import "../UserPostEdit/UserPostEdit.scss";
import axios from "axios"
import { Context } from "../../Context/LangContext";
import content from "../../Localization/Content";


// Import Mui 
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


function UserPostEdit() {

    const { lang, setLang } = useContext(Context);
    const [postData, setPostData] = useState([]);
    const { postID } = useParams();
    const [usRegion, setUsRegion] = useState('');

    const [region, setRegion] = useState([]);
    const [htype, setHtype] = useState('');
    const [sale, setSale] = useState('');
    const [material, setMaterial] = useState('');
    const [desstreet, setdesstreet] = useState('');
    const [des, setDes] = useState('');
    const [repair, setRepair] = useState('');
    const [room, setRoom] = useState('');
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [price, setPrice] = useState('');
    const [priceUsd, setPriceUsd] = useState('');
    const [postimg, setPostImg] = useState([]);

    useEffect(() => {
        axios.get(`https://ali98.uz/api/regions`)
            .then(res => {
                const persons = res?.data.data;
                setRegion(persons)
            })
    }, [])

    useEffect(() => {
        axios.get(`https://ali98.uz/api/post/${postID}`)
            .then(res => {
                const persons = res?.data.data;
                setPostData(persons)
                setUsRegion(persons.region_id.id)
            })
        }, [])
        
        console.log(usRegion);
    
    

    return (
        <>
            <Header />
            <Container>
                <div className="user-wrap-router">
                    <UserProfilList />
                    <div className="user-post">
                        <div className="user-post__header">
                            <h2 className="user-post__title">
                                E'lonni tahrirlash №{postData.id}
                            </h2>
                        </div>

                        <ul className="user-post__list">

                            <li className="user-post__item">
                                <h4 className="user-post__main-title">Sotish Turlari</h4>

                                <FormControl sx={{ m: 1, minWidth: "50%" }}>
                                    <Select
                                        // value={age}
                                        // onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem placeholder="Sotish Turlari" value="">
                                        </MenuItem>

                                        <MenuItem value={10}></MenuItem>
                                        <MenuItem value={20}></MenuItem>

                                    </Select>
                                </FormControl>

                            </li>

                            <li className="user-post__item">

                                <h4 className="user-post__main-title">Bino Turlari</h4>

                                <FormControl sx={{ m: 1, minWidth: "50%" }}>
                                    <Select
                                        // value={age}
                                        // onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="Bino Turlari">Bino Turlari</MenuItem>
                                        <MenuItem value={10}>Hovli</MenuItem>
                                        <MenuItem value={20}>Ojis</MenuItem>
                                        <MenuItem value={20}>Hone</MenuItem>
                                        <MenuItem value={20}>Kvartira</MenuItem>
                                        <MenuItem value={20}>Dala Hovli</MenuItem>
                                    </Select>
                                </FormControl>

                            </li>

                            <li className="user-post__item">
                                <div className="user-post__main-title">Ofis manzili</div>
                                <FormControl sx={{ m: 1, minWidth: "50%" }}>
                                    <Select
                                        value={usRegion}
                                        displayEmpty
                                        onChange={(e) => setRegion(e.target.value)}>

                                        {region.map((region) => (
                                            <MenuItem
                                                key={region.id}

                                            >
                                                {lang == "uz" ? region.name_uz : lang !== "ru" ? region.name_en : region.name_ru}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <Select
                                        // value={age}
                                        // onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem placeholder="Sotish Turlari" value="">
                                        </MenuItem>
                                        <MenuItem value={10}>Ijara</MenuItem>
                                        <MenuItem value={20}>Sotish</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <Select
                                        // value={age}
                                        // onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem placeholder="Sotish Turlari" value="">
                                        </MenuItem>
                                        <MenuItem value={10}>Ijara</MenuItem>
                                        <MenuItem value={20}>Sotish</MenuItem>
                                    </Select>
                                </FormControl>
                            </li>

                            <li className="user-post__item">
                                <div className="user-post__main-title">Ofis Haqida</div>

                                <ul className="user-post__main-list">
                                    <li className="user-post__main-item">
                                        <p className="input-post__name">Qurilgan Yili:</p>
                                        <input className="user-post__main-input input-post" type="text" />
                                    </li>

                                    <li className="user-post__main-item">
                                        <p className="input-post__name">Honalar soni:</p>
                                        <input className="user-post__main-input input-post" type="text" />
                                    </li>

                                    <li className="user-post__main-item">
                                        <p className="input-post__name">Maydoni:</p>
                                        <input className="user-post__main-input input-post" type="text" />
                                    </li>

                                    <li className="user-post__main-item">
                                        <p className="input-post__name">Qavat:</p>
                                        <input className="user-post__main-input input-post" type="text" />
                                        <p className="input-post__name">gacha</p>
                                        <input className="user-post__main-input input-post" type="text" />
                                    </li>

                                    <li className="user-post__main-item">
                                        <p className="input-post__name">Tamir holati:</p>
                                        <FormControl sx={{ m: 1, minWidth: "98%" }}>
                                            <Select
                                                // value={age}
                                                // onChange={handleChange}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <MenuItem placeholder="Sotish Turlari" value="">
                                                </MenuItem>
                                                <MenuItem value={10}>Ijara</MenuItem>
                                                <MenuItem value={20}>Sotish</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </li>

                                    <li className="user-post__main-item">
                                        <p className="input-post__name">Materiallari:</p>
                                        <FormControl sx={{ m: 1, minWidth: "98%" }}>
                                            <Select
                                                // value={age}
                                                // onChange={handleChange}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <MenuItem placeholder="Sotish Turlari" value="">
                                                </MenuItem>
                                                <MenuItem value={10}>Ijara</MenuItem>
                                                <MenuItem value={20}>Sotish</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default UserPostEdit

