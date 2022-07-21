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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TextareaAutosize } from '@mui/material'

function UserPostEdit() {

    const { lang, setLang } = useContext(Context);
    const [postData, setPostData] = useState([]);
    const { postID } = useParams();
    const [usRegion, setUsRegion] = useState('');
    const [usSale, setUsSale] = useState('')
    const [usHtype, setUsHtype] = useState('');
    const [usAddrs, setUsAddrs] = useState('');
    const [usYearHouse, setUsYearHouse] = useState('');
    const [usRoom, setUsRoom] = useState('');
    const [usRepair, setUsRepair] = useState('');
    const [usMaterials, setUsMaterials] = useState('');
    const [usDes, setUsDes] = useState('');
    const [usPrice, setUsPrice] = useState('');
    const [usTotalAre, setUsTotalAre] = useState('');
    const [usKitchenArea, setUsKitchenArea] = useState('');
    const [usLivingArea, setUsLivingArea] = useState('');
    const [usFloor, setUsFloor] = useState('');
    const [usFlat, setUsFlat] = useState('');
    const [usImg, setUsImg] = useState([]);

    const [region, setRegion] = useState([]);
    const [htype, setHtype] = useState([]);
    const [sale, setSale] = useState([]);
    const [repair, setRepair] = useState([]);
    const [materials, setMaterials] = useState([]);

    const cityArr = []

    useEffect(() => {
        axios.get(`https://ali98.uz/api/regions`)
            .then(res => {
                const persons = res?.data.data;
                setRegion(persons)
            })
    }, [])

    useEffect(() => {
        axios.get(`https://ali98.uz/api/sales`)
            .then(res => {
                const persons = res?.data.data;
                setSale(persons)
            })
    }, [])

    useEffect(() => {
        axios.get(`https://ali98.uz/api/htype`)
            .then(res => {
                const persons = res?.data.data;
                setHtype(persons)
            })
    }, [])

    useEffect(() => {
        axios.get(`https://ali98.uz/api/repairs`)
            .then(res => {
                const persons = res?.data.data;
                setRepair(persons)
            })
    }, [])

    useEffect(() => {
        axios.get(`https://ali98.uz/api/materials`)
            .then(res => {
                const persons = res?.data.data;
                setMaterials(persons)
            })
    }, [])

    useEffect(() => {
        axios.get(`https://ali98.uz/api/post/${postID}`)
            .then(res => {
                const persons = res?.data.data;
                setPostData(persons);
                setUsRegion(persons.region_id.id);
                setUsSale(persons.sale_id.id);
                setUsHtype(persons.htype_id.id);
                setUsAddrs(persons.street);
                setUsYearHouse(persons.date);
                setUsRoom(persons.room);
                setUsRepair(persons.repair_id.id);
                setUsMaterials(persons.material_id.id);
                setUsDes(persons.description);
                setUsPrice(persons.price_som);
                setUsTotalAre(persons.total_area);
                setUsKitchenArea(persons.kitchen_area);
                setUsLivingArea(persons.living_area);
                setUsFloor(persons.floor);
                setUsFlat(persons.flat);
                setUsImg(persons.image);
            })
    }, [])

    region.map((reg) => {
        return (
            cityArr.push(reg.citys)
        )
    })

    console.log(usImg)

    return (
        <>
            <Header />
            <Container>
                <div className="user-wrap-router">
                    <UserProfilList />
                    <div className="user-post">
                        {/* POST Header */}
                        <div className="user-post__header">
                            <h2 className="user-post__title">
                                E'lonni tahrirlash №{postData.id}
                            </h2>
                        </div>

                        {/* POST MAIN LIST */}
                        <ul className="user-post__list">

                            <li className="user-post__item">
                                <h4 className="user-post__main-title">Sotish Turlari</h4>

                                <FormControl sx={{ m: 1, minWidth: "50%" }}>
                                    <Select
                                        value={usSale}
                                        onChange={(e) => setUsSale(e.target.value)}>

                                        {sale.map((type) => {
                                            return (
                                                <MenuItem key={type.id} value={type.id}>
                                                    {lang == "uz" ? type.name_uz : lang !== "ru" ? type.name_en : type.name_ru}
                                                </MenuItem>
                                            )

                                        })}
                                    </Select>
                                </FormControl>
                            </li>

                            <li className="user-post__item">
                                <h4 className="user-post__main-title">Bino Turlari</h4>

                                <FormControl sx={{ m: 1, minWidth: "50%" }}>
                                    <Select
                                        value={usHtype}
                                        onChange={(e) => setUsHtype(e.target.value)}>
                                        {
                                            htype.map((xtype) => {
                                                return (
                                                    <MenuItem key={xtype.id} value={xtype.id}>
                                                        {lang == "uz" ? xtype.name_uz : lang !== "ru" ? xtype.name_en : xtype.name_ru}
                                                    </MenuItem>
                                                )
                                            })
                                        }
                                    </Select>
                                </FormControl>

                            </li>

                            <li className="user-post__item">
                                <div className="user-post__main-title">Ofis manzili</div>
                                <FormControl sx={{ m: 1, minWidth: "50%" }}>
                                    <InputLabel id="viloyat">{content[lang].form_select_vil}</InputLabel>
                                    <Select
                                        value={usRegion}
                                        label={content[lang].form_select_vil}
                                        onChange={(e) => setUsRegion(e.target.value)}>

                                        {region.map((region) => (
                                            <MenuItem
                                                key={region.id}
                                                value={region.id}
                                            >
                                                {lang == "uz" ? region.name_uz : lang !== "ru" ? region.name_en : region.name_ru}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <Select >
                                        {/* {
                                            cityArr.map((reg) => {
                                                <MenuItem
                                                    key={reg.id}
                                                    value={reg.id}
                                                >
                                                    {lang == "uz" ? reg.name_uz : lang !== "ru" ? reg.name_en : reg.name_ru}
                                                </MenuItem>
                                            })
                                        } */}
                                    </Select>
                                </FormControl>
                                <p className="input-post__name">Manzil</p>
                                <input className="user-post__main-input input-post" value={usAddrs} type="text" />
                            </li>

                            <li className="user-post__item">
                                <div className="user-post__main-title">Ofis Haqida</div>

                                <ul className="user-post__main-list">
                                    <li className="user-post__main-item">
                                        <p className="input-post__name">Qurilgan Yili:</p>
                                        <input className="user-post__main-input input-post"
                                            value={usYearHouse}
                                            type="number"
                                            onChange={(e) => setUsYearHouse(e.target.value)} />
                                    </li>

                                    <li className="user-post__main-item">
                                        <p className="input-post__name">Honalar soni:</p>
                                        <input className="user-post__main-input input-post"
                                            value={usRoom}
                                            type="number"
                                            onChange={(e) => setUsRoom(e.target.value)} />
                                    </li>

                                    <li className="user-post__main-item">
                                        <p className="input-post__name">Maydoni: Xona</p>
                                        <input className="user-post__main-input input-post"
                                            value={usTotalAre}
                                            type="number"
                                            onChange={(e) => setUsTotalAre(e.target.value)} />
                                    </li>

                                    <li className="user-post__main-item">
                                        <p className="input-post__name">Maydoni: Oshxona</p>
                                        <input className="user-post__main-input input-post"
                                            value={usKitchenArea}
                                            type="number"
                                            onChange={(e) => setUsKitchenArea(e.target.value)} />
                                    </li>

                                    <li className="user-post__main-item">
                                        <p className="input-post__name">Jami</p>
                                        <input className="user-post__main-input input-post"
                                            value={usLivingArea}
                                            type="text"
                                            onChange={(e) => setUsLivingArea(e.target.value)} />
                                    </li>

                                    <li className="user-post__main-item">
                                        <p className="input-post__name">Qavat:</p>
                                        <input className="user-post__main-input input-post"
                                            value={usFloor}
                                            type="number"
                                            onChange={(e) => setUsFloor(e.target.value)} />
                                        <p className="input-post__name">gacha</p>
                                        <input className="user-post__main-input input-post"
                                            value={usFlat}
                                            type="number"
                                            onChange={(e) => setUsFlat(e.target.value)} />
                                    </li>

                                    <li className="user-post__main-item">
                                        <p className="input-post__name">Tamir holati:</p>
                                        <FormControl sx={{ m: 1, minWidth: "98%" }}>
                                            <Select
                                                value={usRepair}
                                                onChange={(e) => setUsRepair(e.target.value)}>

                                                {
                                                    repair.map((rep) => {
                                                        return (
                                                            <MenuItem
                                                                key={rep.id}
                                                                value={rep.id}>
                                                                {lang == "uz" ? rep.name_uz : lang !== "ru" ? rep.name_en : rep.name_ru}
                                                            </MenuItem>
                                                        )
                                                    })
                                                }

                                            </Select>
                                        </FormControl>
                                    </li>

                                    <li className="user-post__main-item">
                                        <p className="input-post__name">Materiallari:</p>
                                        <FormControl sx={{ m: 1, minWidth: "98%" }}>
                                            <Select
                                                value={usMaterials}
                                                onChange={(e) => setUsMaterials(e.target.value)}
                                            >

                                                {
                                                    materials.map((mete) => {
                                                        return (
                                                            <MenuItem
                                                                key={mete.id}
                                                                value={mete.id}>
                                                                {lang == "uz" ? mete.name_uz : lang !== "ru" ? mete.name_en : mete.name_ru}
                                                            </MenuItem>
                                                        )
                                                    })
                                                }

                                            </Select>
                                        </FormControl>
                                    </li>

                                    <li className="user-post__main-item">
                                        <p className="input-post__name">Ofis Haqida:</p>
                                        <textarea value={usDes} onChange={(e) => setUsDes(e.target.value)}></textarea>

                                    </li>

                                    <li className="user-post__main-item">

                                        <p className="input-post__name">Uy Narhi:</p>
                                        <input className="user-post__main-input input-post"
                                            value={usPrice}
                                            onChange={(e) => setUsPrice(e.target.value)}
                                            type="text" />
                                    </li>

                                </ul>
                            </li>
                        </ul>

                        {/* POST FORM */}
                        <ul className="form-list">
                            {
                                usImg.map((im) => {
                                    return (
                                        <>
                                            <li className="form-item">
                                                <img id={im.id} src={im.url} className="form-row__img"></img>
                                            </li>

                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default UserPostEdit

