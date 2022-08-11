// Import React
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

// Components
import Header from "../Header/Header";
import UserProfilList from "../UserProfilList/UserProfilList";
import Container from "../Container/Container";

//Localization Components
import { Context } from "../../Context/LangContext";
import content from "../../Localization/Content";
//Style
import "../UserPostEdit/UserPostEdit.scss";

// Import Packages 
import InputLabel from '@mui/material/InputLabel';
import Trash from '@mui/icons-material/ClearRounded';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material'
import MapPicker from "react-google-map-picker";
import { v4 } from "uuid";
import axios from "axios"
import Compressor from 'compressorjs';


// Map Variables

//Url Variable

function UserPostEdit() {
    let url = process.env.REACT_APP_URL;
    const DefaultZomm = 4;
    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)
    // Localization Context
    const { lang, setLang } = useContext(Context);

    const { postID } = useParams();

    // Map 
    const [zoom, setZoom] = useState(DefaultZomm);
    const [defaultLocation, setDefaultLocation] = useState({});

    // Recieve Data Post
    const [postData, setPostData] = useState([]);

    // Send Data 
    const [sale_id, setsType] = useState('')
    const [htype_id, sethType] = useState('')
    const [material_id, setMaterial] = useState('')
    const [repair_id, setUsRepair] = useState('')
    const [region_id, setRegionID] = useState('')
    const [city_id, setCity] = useState('')
    const [price_som, setPrice_som] = useState('')
    const [date, setDate] = useState('')
    const [room, setRoom] = useState('')
    const [description, sethDescr] = useState('')
    const [street, setStreet] = useState('')
    const [house, setHouse] = useState('')
    const [floor, setFloor] = useState('')
    const [flat, setFlat] = useState('')
    const [total_area, setTotalArea] = useState('')
    const [living_area, setLivingArea] = useState('')
    const [kitchen_area, setKitchenArea] = useState('')
    const [total_area_type, setTotalAreaType] = useState('')
    const [usDocument, setUsDocs] = useState([])
    const [usPhoto, setUsPhoto] = useState([])
    const [usVideo, setUsVideo] = useState([])

    // Send New Edited Data 
    const [city, setdCity] = useState([])
    const [photo, setPhoto] = useState([])
    const [video, setVideo] = useState([])
    const [docs, setDocs] = useState([])

    // CallBack Database
    const [region, setRegion] = useState([]);
    const [htype, setHtype] = useState([]);
    const [sale, setSale] = useState([]);
    const [repair, setRepair] = useState([]);
    const [materials, setMaterials] = useState([]);
    const [tuman, settuman] = useState('buloqboshı')

    // Recieving Dates
    useEffect(() => {
        axios.get(`${url}regions`)
            .then(res => {
                const persons = res?.data.data;
                setRegion(persons)
            })
        axios.get(`${url}sales`)
            .then(res => {
                const persons = res?.data.data;
                setSale(persons)
            })
        axios.get(`${url}htype`)
            .then(res => {
                const persons = res?.data.data;
                setHtype(persons)
            })
        axios.get(`${url}repairs`)
            .then(res => {
                const persons = res?.data.data;
                setRepair(persons)
            })
        axios.get(`${url}materials`)
            .then(res => {
                const persons = res?.data.data;
                setMaterials(persons)
            })
        axios.get(`${url}post/${postID}`)
            .then(function (response) {
                setPostData(response.data);
                setDefaultLocation({ lat: response.data.data.latitude * 1, lng: response.data.data.longitude * 1 })
            })
    }, [])


    // INitialize Dates
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
            setKitchenArea(Number(postData.data.kitchen_area))
            setLivingArea(Number(postData.data.living_area))
            setTotalArea(Number(postData.data.total_area))
            setTotalAreaType(postData.data.total_area_type)
            setDate(Number(postData.data.date))
            setRoom(Number(postData.data.room))
            setFloor(Number(postData.data.floor))
            setFlat(Number(postData.data.flat))
            setUsPhoto(postData.data.image)
            setUsVideo(postData.data.video)
            setUsDocs(postData.data.documents)
            sethDescr(postData.data.description)
            setPrice_som(Number(postData.data.price_som))
            Selector(postData.data.region_id.id);
        }
    }, [postData])
    // Get Token
    let token = localStorage.getItem('Token')

    // Sending
    let editPost = new URLSearchParams();
    editPost.append('htype_id', htype_id);
    editPost.append('sale_id', sale_id);
    editPost.append('longitude', longitude);
    editPost.append('latitude', latitude);
    editPost.append('price_som', price_som);
    editPost.append('date', date);
    editPost.append('room', room);
    editPost.append('repair_id', repair_id);
    editPost.append('document', docs);
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

    // Send Variable
    let headersList = {
        "Accept": "*/*",
        'Authorization': `Bearer ${token}`
    }
    // Send Function
    const Submit = (e) => {
        fetch(`${url}post/${postData.data.id}?paremeter=PUT`, {
            method: "PUT",
            headers: headersList,
            body: editPost
        }).then(function (response) {
            return response.text();
        }).then(function (data) {
            window.location.href = "/userads"
        })
    }

    // Filter Old Data 
    useEffect(() => {
        let img = [];
        for (let i = 0; i < usPhoto.length; i++) {
            img.push(usPhoto[i].url)
            setPhoto(img);
        }
        let vid = [];
        for (let v = 0; v < usVideo.length; v++) {
            vid.push(usVideo[v].url)
            setVideo(vid)
        }
        let doc = [];
        for (let d = 0; d < usDocument.length; d++) {
            doc.push(usDocument[d].url)
            setDocs(doc)
        }
    }, [usPhoto, usVideo, usDocument])

    // Filter City
    const Selector = (id) => {
        setRegionID(id)
        let filtered = region.filter((item) => {
            if (item.id === id) {
                return item
            }
        })
        setdCity(filtered[0].citys);
    }

    // New Location
    function Location(lat, lng) {
        setLatitude(lat)
        setLongitude(lng)
    }

    // Filter 
    function Delete(e) {
        let deleted = photo.filter(pic => e !== pic);
        setPhoto(deleted);
    }

    function Reset(e) {
        let reseted = video.filter(pic => e !== pic);
        setVideo(reseted);
    }

    function Reseted(e) {
        let reseted = docs.filter(pic => e !== pic);
        setDocs(reseted);
    }

    // Sending a Service New Files
    let newImage = new FormData();
    let newPicture = {
        method: 'POST',
        body: newImage,
        redirect: 'follow'
    };

    function addImage(e) {
        let files = [...e];
        for (let i = 0; i < files.length; i++) {
            new Compressor(files[i], {
                quality: 0.2,
                success(result) {
                    newImage.append('key', 'Service For C Group')
                    newImage.append('file', result)
                    fetch(`${url}service`, newPicture)
                        .then(response => response.text())
                        .then(function (response) {
                            let res = JSON.parse(response);
                            Object.entries(res).forEach(([name, value]) => {
                                if (typeof value === 'string') {
                                    let array = [...photo]
                                    array = [...array, value]
                                    setPhoto(array);
                                }
                            })
                        })
                        .catch(error => console.log('error', error));
                }
            })
        }
    }

    let newVideo = new FormData();
    let newvideo = {
        method: 'POST',
        body: newVideo,
        redirect: 'follow'
    };

    function addVideo(e) {
        let files = [...e];
        for (let i = 0; i < files.length; i++) {
            newVideo.append('key', 'Service For C Group')
            newVideo.append('file', files[i])
            fetch(`${url}service`, newvideo)
                .then(response => response.text())
                .then(function (response) {
                    let res = JSON.parse(response);
                    Object.entries(res).forEach(([name, value]) => {
                        if (typeof value === 'string') {
                            let array = [...video]
                            array = [...array, value]
                            setVideo(array);
                        }
                    })
                })
                .catch(error => console.log('error', error));
        }
    }

    let newDocs = new FormData();
    let newdocs = {
        method: 'POST',
        body: newDocs,
        redirect: 'follow'
    };
    function addDocs(e) {
        let files = [...e];
        for (let i = 0; i < files.length; i++) {
            newDocs.append('key', 'Service For C Group')
            newDocs.append('file', files[i])
            fetch(`${url}service`, newdocs)
                .then(response => response.text())
                .then(function (response) {
                    let res = JSON.parse(response);
                    Object.entries(res).forEach(([name, value]) => {
                        if (typeof value === 'string') {
                            let array = [...docs]
                            array = [...array, value]
                            setDocs(array);
                        }
                    })
                })
                .catch(error => console.log('error', error));
        }
    }

    return (
        <>
            <Header />
            <Container>
                <div className="user-profil-wrap">
                    <UserProfilList />
                    <div className="postEdit">
                        <h1>{content[lang].edit_postTitle}</h1>
                        <p>{postData.data?.id}{content[lang].edit_post}</p>

                        <div className="saleHouse">
                            <FormControl className="selectInp">
                                <InputLabel id="Sotish turi">{content[lang].edit_saleType}</InputLabel>
                                <Select
                                    id="Sotish turi"
                                    label={content[lang].edit_saleType}
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
                                <InputLabel id="Uy turi">{content[lang].edit_houseType}</InputLabel>
                                <Select
                                    id="Uy turi"
                                    label={content[lang].edit_houseType}
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
                                <InputLabel id="Tamir turi">{content[lang].edit_repairType}</InputLabel>
                                <Select
                                    id="Tamir turi"
                                    label={content[lang].edit_repairType}
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
                                <InputLabel id="Material turi">{content[lang].edit_materialType}</InputLabel>
                                <Select
                                    id="Material turi"
                                    label={content[lang].edit_materialType}
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
                                <InputLabel id="Viloyat">{content[lang].edit_Region}</InputLabel>
                                <Select
                                    id="Viloyat"
                                    label={content[lang].edit_Region}
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
                                <InputLabel id="shaxar">Tuman</InputLabel>
                                <Select
                                    id="shaxar"
                                    label={'Tuman'}
                                    value={city_id}
                                    onChange={(e) => setCity(e.target.value)}
                                >
                                    {city.map((type) => (
                                        <MenuItem
                                            key={type.id}
                                            value={type.id}
                                            selected={city_id == type.id ? 'selected' : null}
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
                                label={content[lang].edit_Street}
                                id="outlined-basic"
                                variant="outlined"
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                            />
                            <TextField
                                className="address"
                                label={content[lang].edit_House}
                                id="outlined-basic"
                                variant="outlined"
                                value={house}
                                onChange={(e) => setHouse(e.target.value)}
                            />
                        </div>
                        <div className="saleHouse">
                            <MapPicker
                                defaultLocation={defaultLocation}
                                zoom={zoom}
                                mapTypeId='roadmap'
                                style={{ height: '300px' }}
                                onChangeLocation={(lat, lng) => Location(lat, lng)}
                                onChangeZoom={(newZoom) => setZoom(newZoom)}
                                apiKey='AIzaSyB8NHCF-5fMix0w2363RhC3V4vcyw8SHSM' />
                        </div>
                        <div className="saleHouse">
                            <TextField
                                className="area"
                                label={content[lang].edit_Kitchen}
                                id="outlined-basic"
                                variant="outlined"
                                value={kitchen_area}
                                onChange={(e) => setKitchenArea(e.target.value)}
                            />
                            <TextField
                                className="area"
                                label={content[lang].edit_Living}
                                id="outlined-basic"
                                variant="outlined"
                                value={living_area}
                                onChange={(e) => setLivingArea(e.target.value)}
                            />
                            <TextField
                                className="area"
                                label={content[lang].edit_Total}
                                id="outlined-basic"
                                variant="outlined"
                                value={total_area}
                                onChange={(e) => setTotalArea(e.target.value)}
                            />
                            <FormControl className="areaselect">
                                <InputLabel id="Type">{content[lang].edit_Type}</InputLabel>
                                <Select
                                    id="Type"
                                    label={content[lang].edit_Type}
                                    value={total_area_type}
                                    onChange={(e) => setTotalAreaType(e.target.value)}
                                >
                                    <MenuItem value={'m2'}>{content[lang].edit_M2}</MenuItem>
                                    <MenuItem value={'ar'}>{content[lang].edit_AR}</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="saleHouse">
                            <TextField
                                className="tools"
                                label={content[lang].edit_Date}
                                id="outlined-basic"
                                variant="outlined"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                            <TextField
                                className="tools"
                                label={content[lang].edit_Rooms}
                                id="outlined-basic"
                                variant="outlined"
                                value={room}
                                onChange={(e) => setRoom(e.target.value)}
                            />
                            <TextField
                                className="tools"
                                label={content[lang].edit_Floor}
                                id="outlined-basic"
                                variant="outlined"
                                value={floor}
                                onChange={(e) => setFloor(e.target.value)}
                            />
                            <TextField
                                className="tools"
                                label={content[lang].edit_Flat}
                                id="outlined-basic"
                                variant="outlined"
                                value={flat}
                                onChange={(e) => setFlat(e.target.value)}
                            />
                        </div>
                        <div className="images">
                            <label htmlFor="addImgBtn" className="addImgBtn">Add Image</label>
                            <input type='file' className="addImgInp" id="addImgBtn" onChange={e => addImage(e.target.files)}></input>
                            <div className="addImg">
                                <label htmlFor="addImage" className="addImage"></label>
                                <input
                                    type="file"
                                    id="addImage"
                                    className="inp"
                                    onChange={e => addImage(e.target.files)}
                                />
                            </div>
                            {photo.map((type) => (
                                <div className='img' key={v4()} >
                                    <img src={type} alt="" style={{width: '100%', height: '100%'}}/>
                                    <Trash onClick={(e) => Delete(type)} className='icon' />
                                </div>
                            ))}
                        </div>
                        <div className="videos">
                            <div className="addVid">
                                <label htmlFor="addVideo" className="addVideo">{content[lang].edit_Video}</label>
                                <input
                                    className="inp"
                                    type="file"
                                    id="addVideo"
                                    onChange={e => addVideo(e.target.files)}
                                />
                            </div>
                            {video.map((type) => (
                                <div className="video" key={v4()}>
                                    <video controls className="video">
                                        <source type="video/mp4" alt={v4()} src={type} />
                                        <source type="video/ogg" alt={v4()} src={type} />
                                    </video>
                                    <Trash onClick={(e) => Reset(type)} className='icon' />
                                </div>
                            ))}
                        </div>
                        <div className="document">
                            <div className="addDocs">
                                <label htmlFor="addDocument" className="addDocument">{content[lang].edit_Docs}</label>
                                <input
                                    className="inp"
                                    type="file"
                                    id="addDocument"
                                    onChange={e => addDocs(e.target.files)}
                                />
                            </div>
                            {docs.map((type) => (
                                <div className='docs' key={type} style={{ background: `url(${type})no-repeat center center/cover` }} >
                                    <Trash onClick={(e) => Reseted(type)} className='icon' />
                                </div>
                            ))}
                        </div>
                        <div className="descr">
                            <h3 className="descrTitle">{content[lang].edit_Descr}</h3>
                            <textarea className="descrArea" id='descr' cols="30" rows="10" defaultValue={description}></textarea>
                        </div>
                        <div className="priceSubmit">
                            <TextField
                                className="price"
                                label={content[lang].edit_Price}
                                id="outlined-basic"
                                variant="outlined"
                                value={price_som}
                                onChange={(e) => setPrice_som(e.target.value)}
                            />
                            <button onClick={Submit} className='btnSubmit'>{content[lang].edit_Submit}</button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default UserPostEdit

