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
import { TextareaAutosize, TextField } from '@mui/material'
import MapPicker from "react-google-map-picker";
import Trash from '@mui/icons-material/ClearRounded';
import { v4 } from "uuid";
import { typography } from "@mui/system";

const DefaultZomm = 2;
// const DefaultLocation = { lat: latitude, lng: longitude };

let url = process.env.REACT_APP_URL;

function UserPostEdit() {

    const { lang, setLang } = useContext(Context);

    const { postID } = useParams();
    const [zoom, setZoom] = useState(DefaultZomm);
    // const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
    // const [location, setLocation] = useState(defaultLocation);

    const [postData, setPostData] = useState([]);

    const [sale_id, setsType] = useState('')// SaleType State
    const [htype_id, sethType] = useState('')//HouseType State
    const [material_id, setMaterial] = useState('')// Materials State
    const [repair_id, setUsRepair] = useState('')//Reapairs State
    const [region_id, setRegionID] = useState('')//Region State
    const [city_id, setCity] = useState('')// City State
    const [longitude, setLongitude] = useState('')
    const [latitude, setLatitude] = useState('')
    const [price_som, setPrice_som] = useState('')//Price State //// tekshirish keree
    const [date, setDate] = useState('')//Building Year State
    const [room, setRoom] = useState('')//Room State
    const [description, sethDescr] = useState('')//House Description State
    const [street, setStreet] = useState('')// Street State
    const [house, setHouse] = useState('')// State
    const [floor, setFloor] = useState('')//Floor and Flat States
    const [flat, setFlat] = useState('')//
    const [total_area, setTotalArea] = useState('')
    const [living_area, setLivingArea] = useState('')
    const [kitchen_area, setKitchenArea] = useState('')
    const [total_area_type, setTotalAreaType] = useState('')
    const [document, setDocs] = useState([])//Documents State
    const [photo, setPhoto] = useState([])//ImageFile State
    const [video, setVideo] = useState([])//VideoFile State

    const [city, setdCity] = useState([])// City State

    const [region, setRegion] = useState([]);
    const [htype, setHtype] = useState([]);
    const [sale, setSale] = useState([]);
    const [repair, setRepair] = useState([]);
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        axios.get(`https://ali98.uz/api/regions`)
            .then(res => {
                const persons = res?.data.data;
                setRegion(persons)
            })
        axios.get(`https://ali98.uz/api/sales`)
            .then(res => {
                const persons = res?.data.data;
                setSale(persons)
            })
        axios.get(`https://ali98.uz/api/htype`)
            .then(res => {
                const persons = res?.data.data;
                setHtype(persons)
            })
        axios.get(`https://ali98.uz/api/repairs`)
            .then(res => {
                const persons = res?.data.data;
                setRepair(persons)
            })
        axios.get(`https://ali98.uz/api/materials`)
            .then(res => {
                const persons = res?.data.data;
                setMaterials(persons)
            })
        axios.get(`https://ali98.uz/api/post/${postID}`)
            .then(function (response) {
                setPostData(response.data);
            })
    }, [])


    useEffect(() => {
        if (postData.hasOwnProperty('data')) {
            setsType(Number(postData.data.sale_id.id))
            sethType(Number(postData.data.htype_id.id))
            setUsRepair(Number(postData.data.repair_id.id))
            setMaterial(Number(postData.data.material_id.id))
            setRegionID(Number(postData.data.region_id.id))
            setCity(Number(postData.data.city_id.id))
            setStreet(postData.data.street)
            setHouse(postData.data.house)
            setLongitude(Math.round(postData.data.longitude))
            setLatitude(Math.round(postData.data.latitude))
            setKitchenArea(Number(postData.data.kitchen_area))
            setLivingArea(Number(postData.data.living_area))
            setTotalArea(Number(postData.data.total_area))
            setTotalAreaType(postData.data.total_area_type)
            setDate(Number(postData.data.date))
            setRoom(Number(postData.data.room))
            setFloor(Number(postData.data.floor))
            setFlat(Number(postData.data.flat))
            setPhoto(postData.data.image)
            setVideo(postData.data.video)
            setDocs(postData.data.documents)
            sethDescr(postData.data.description)
            setPrice_som(Number(postData.data.price_som))
        }
    }, [postData])

    let token = localStorage.getItem('Token')
    let editPost = new URLSearchParams();
    console.log(photo);
    console.log(latitude);

    editPost.append('htype_id', htype_id);
    editPost.append('sale_id', sale_id);
    editPost.append('longitude', longitude);
    editPost.append('latitude', latitude);
    editPost.append('price_som', price_som);
    editPost.append('date', date);
    editPost.append('room', room);
    editPost.append('repair_id', repair_id);
    editPost.append('documents', document);
    editPost.append('description', description);
    editPost.append('material_id', material_id);
    editPost.append('region_id', region_id);
    editPost.append('city_id', city_id);
    editPost.append('street', street);
    editPost.append('house', house);
    editPost.append('floor', floor);
    editPost.append('flat', flat);
    editPost.append('total_area', total_area)
    editPost.append('total_area_type', total_area_type)
    editPost.append('living_area', living_area)
    editPost.append('kitchen_area', kitchen_area)
    editPost.append('photo', photo);
    editPost.append('video', video);
    editPost.append('check', '')

    let headersList = {
        "Accept": "*/*",
        'Authorization': `Bearer ${token}`
    }
    const Submit = (e) => {
        fetch(`${url}post/${postData.data.id}?paremeter=PUT`, {
            method: "PUT",
            headers: headersList,
            body: editPost
        }).then(function (response) {
            return response.text();
        }).then(function (data) {
            console.log(data);
            // window.location.reload()
        })
    }

    const Selector = (id) => {
        setRegionID(id)
        let filtered = region.filter((item) => {
            if (item.id === id) {
                return item
            }
        })
        setdCity(filtered[0].citys);
    }

    // function setLocation(lat, lng) {
    //     setLatitude('latitude', lat)
    //     setLongitude('longitude', lng)
    // }

    function Delete(e) {
        let deleted = photo.filter(pic => e !== pic.id);
        setPhoto(deleted);
    }

    function Reset(e) {
        let reseted = video.filter(pic => e !== pic.id);
        setVideo(reseted);
    }

    function Reseted(e) {
        let reseted = document.filter(pic => e !== pic.id);
        setDocs(reseted);
    }

    return (
        <>
            <Header />
            <Container>
                <div className="user-wrap-router">
                    <UserProfilList />
                    <div className="postEdit">
                        <p>{postData.data?.id}</p>
                        <div className="saleHouse">
                            <FormControl className="selectInp">
                                <InputLabel id="Sotish turi">Sotish Turi</InputLabel>
                                <Select
                                    labelId="Sotish turi"
                                    id="Sotish turi"
                                    label='Sotish turi'
                                    value={sale_id}
                                    onChange={(e) => setsType(e.target.value)}
                                >
                                    {sale.map((type) => (
                                        <MenuItem
                                            key={type.id}
                                            value={type.id}
                                        >
                                            {lang == "uz" ? type.name_uz : lang !== "ru" ? type.name_en : type.name_ru}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl className="selectInp">
                                <InputLabel id="Uy turi">Uy Turi</InputLabel>
                                <Select
                                    labelId="Uy turi"
                                    id="Uy turi"
                                    label='Uy turi'
                                    value={htype_id}
                                    onChange={(e) => sethType(e.target.value)}
                                >
                                    {htype.map((type) => (
                                        <MenuItem
                                            key={type.id}
                                            value={type.id}
                                        >
                                            {lang == "uz" ? type.name_uz : lang !== "ru" ? type.name_en : type.name_ru}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div className="saleHouse">
                            <FormControl className="selectInp">
                                <InputLabel id="Tamir turi">Tamir Turi</InputLabel>
                                <Select
                                    labelId="Tamir turi"
                                    id="Tamir turi"
                                    label='Tamir turi'
                                    value={repair_id}
                                    onChange={(e) => setUsRepair(e.target.value)}
                                >
                                    {repair.map((type) => (
                                        <MenuItem
                                            key={type.id}
                                            value={type.id}
                                        >
                                            {lang == "uz" ? type.name_uz : lang !== "ru" ? type.name_en : type.name_ru}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl className="selectInp">
                                <InputLabel id="Material turi">Material Turi</InputLabel>
                                <Select
                                    labelId="Material turi"
                                    id="Material turi"
                                    label='Material turi'
                                    value={material_id}
                                    onChange={(e) => setMaterial(e.target.value)}
                                >
                                    {materials.map((type) => (
                                        <MenuItem
                                            key={type.id}
                                            value={type.id}
                                        >
                                            {lang == "uz" ? type.name_uz : lang !== "ru" ? type.name_en : type.name_ru}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div className="saleHouse">
                            <FormControl className="selectInp">
                                <InputLabel id="Viloyat">Viloyat</InputLabel>
                                <Select
                                    labelId="Viloyat"
                                    id="Viloyat"
                                    label='Viloyat'
                                    value={region_id}
                                    onChange={(e) => Selector(e.target.value)}
                                >
                                    {region.map((type) => (
                                        <MenuItem
                                            key={type.id}
                                            value={type.id}
                                        >
                                            {lang == "uz" ? type.name_uz : lang !== "ru" ? type.name_en : type.name_ru}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl className="selectInp">
                                <InputLabel id="shaxar">Shaxar</InputLabel>
                                <Select
                                    labelId="shaxar"
                                    id="shaxar"
                                    label='shaxar'
                                    value={city_id}
                                    onChange={(e) => setCity(e.target.value)}
                                >
                                    {city.map((type) => (
                                        <MenuItem
                                            key={type.id}
                                            value={type.id}
                                        >
                                            {lang == "uz" ? type.name_uz : lang !== "ru" ? type.name_en : type.name_ru}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div className="saleHouse">
                            <TextField
                                className="address"
                                label='Kocha Nomi'
                                id="outlined-basic"
                                variant="outlined"
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                            />
                            <TextField
                                className="address"
                                label='Uy manzili'
                                id="outlined-basic"
                                variant="outlined"
                                value={house}
                                onChange={(e) => setHouse(e.target.value)}
                            />
                        </div>
                        <div className="saleHouse">
                            <MapPicker
                                // defaultLocation={defaultLocation}
                                zoom={zoom}
                                mapTypeId='roadmap'
                                style={{ height: '300px' }}
                                // onChangeLocation={(lat, lng) => setLocation(lat, lng)}
                                onChangeZoom={(newZoom) => setZoom(newZoom)}
                                apiKey='AIzaSyB8NHCF-5fMix0w2363RhC3V4vcyw8SHSM' />
                        </div>
                        <div className="saleHouse">
                            <TextField
                                className="area"
                                label='Kitchen'
                                id="outlined-basic"
                                variant="outlined"
                                value={kitchen_area}
                                onChange={(e) => setKitchenArea(e.target.value)}
                            />
                            <TextField
                                className="area"
                                label='Living'
                                id="outlined-basic"
                                variant="outlined"
                                value={living_area}
                                onChange={(e) => setLivingArea(e.target.value)}
                            />
                            <TextField
                                className="area"
                                label='Total'
                                id="outlined-basic"
                                variant="outlined"
                                value={total_area}
                                onChange={(e) => setTotalArea(e.target.value)}
                            />
                            <FormControl className="areaselect">
                                <InputLabel id="Type">Type</InputLabel>
                                <Select
                                    labelId="Type"
                                    id="Type"
                                    label='Type'
                                    value={total_area_type}
                                    onChange={(e) => setTotalAreaType(e.target.value)}
                                >
                                    <MenuItem value={'m2'}>Metr Kvadrat</MenuItem>
                                    <MenuItem value={'ar'}>Sotix</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="saleHouse">
                            <TextField
                                className="tools"
                                label='Date'
                                id="outlined-basic"
                                variant="outlined"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                            <TextField
                                className="tools"
                                label='Room'
                                id="outlined-basic"
                                variant="outlined"
                                value={room}
                                onChange={(e) => setRoom(e.target.value)}
                            />
                            <TextField
                                className="tools"
                                label='Floor'
                                id="outlined-basic"
                                variant="outlined"
                                value={floor}
                                onChange={(e) => setFloor(e.target.value)}
                            />
                            <TextField
                                className="tools"
                                label='Flat'
                                id="outlined-basic"
                                variant="outlined"
                                value={flat}
                                onChange={(e) => setFlat(e.target.value)}
                            />
                        </div>
                        <div className="images">
                            {photo.map((type) => (
                                <div className='img' key={type.id} style={{ background: `url(${type.url})no-repeat center center/cover` }} >
                                    <Trash onClick={(e) => Delete(type.id)} className='icon' />
                                </div>
                            ))}
                        </div>
                        <div className="video">
                            {video.map((type) => (
                                <div className="video" key={type.id}>
                                    <video controls>
                                        <source type="video/mp4" alt={type.id} src={type.url} />
                                        <source type="video/ogg" alt={type.id} src={type.url} />
                                    </video>
                                    <Trash onClick={(e) => Reset(type.id)} className='icon' />
                                </div>
                            ))}
                        </div>
                        <div className="document">
                            {document.map((type) => (
                                <div className='docs' key={type.id} style={{ background: `url(${type.url})no-repeat center center/cover` }} >
                                    <Trash onClick={(e) => Reseted(type.id)} className='icon' />
                                </div>
                            ))}
                        </div>
                        <div className="descr">
                            <h3 className="descrTitle">Description</h3>
                            <textarea className="descrArea" id='descr' cols="30" rows="10" defaultValue={description}></textarea>
                        </div>
                        <div className="priceSubmit">
                            <TextField
                                className="price"
                                label='Narhi'
                                id="outlined-basic"
                                variant="outlined"
                                value={price_som}
                                onChange={(e) => setPrice_som(e.target.value)}
                            />
                            <button onClick={Submit} className='btnSubmit'>Tasdiqlash</button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default UserPostEdit

