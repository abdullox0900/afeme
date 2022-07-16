// Import => React
import React, { useEffect, useState, useContext } from 'react'

// Import => @Mui
import { Button } from '@mui/material';
import { v4 } from 'uuid';
import Trash from '@mui/icons-material/ClearRounded';

// Import => Components
import style from './ImageFile.module.scss'
import axios from 'axios';
import { Delete } from '@mui/icons-material';
import { Context } from '../../Context/LangContext';
import content from '../../Localization/Content';

let url = process.env.REACT_APP_URL;

function ImageFile({ photo, setPhoto }) {
    const [image, setImage] = useState([]);
    const { lang, setLang } = useContext(Context);

    const [img, setImg] = useState(false);
    function startImageHandler(e) {
        e.preventDefault();
        setImg(true)
    }
    function leaveImageHandler(e) {
        e.preventDefault();
        setImg(false)
    }
    const arr = new Array();
    var formdata = new FormData();

    let drop = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    function dropImageHandler(e) {
        e.preventDefault();
        let files = [...e.dataTransfer.files]
        for (let i = 0; i < files.length; i++) {
            formdata.append('key', 'Service For C Group')
            formdata.append("file", files[i]);
            fetch(`${url}service`, drop)
                .then(response => response.text())
                .then(function (response) {
                    let res = JSON.parse(response);
                    Object.entries(res).forEach(([name, value]) => {
                        if (typeof value === 'string') {
                            arr.push(value);
                            setPhoto(arr)
                        }
                    })
                })
                .catch(error => console.log('error', error));
        }
        setImage(files)
        setImg(false)
    }

    let Select = new FormData();
    let select = {
        method: 'POST',
        body: Select,
        redirect: 'follow'
    };
    function SelectI(e) {
        let files = [...e];
        for (let i = 0; i < files.length; i++) {
            Select.append('key', 'Service For C Group')
            Select.append('file', files[i])
            fetch(`${url}service`, select)
                .then(response => response.text())
                .then(function (response) {
                    let res = JSON.parse(response);
                    Object.entries(res).forEach(([name, value]) => {
                        if (typeof value === 'string') {
                            arr.push(value);
                            setPhoto(arr)
                        }
                    })
                })
                .catch(error => console.log('error', error));
        }
    }
    function Delete(e) {
        let src = e;
        let n = photo.filter(pic => src != pic);
        photo = n;
        setPhoto(photo);
    }

    return (
        <div className={style.wrapper}>
            <p>{content[lang].adverd_office_img}</p>
            <div className={style.images}>
                {photo.map((i) => (
                    <div className={style.img} key={v4()}>
                        <img src={i} alt={null} className={style.img1} />
                        <Trash onClick={(e) => Delete(i)} className={style.icon} />
                    </div>
                ))}
            </div>
            <div className={style.imgF}>
                {img
                    ? <div
                        className={style.dragArea}
                        onDragStart={e => startImageHandler(e)}
                        onDragLeave={e => leaveImageHandler(e)}
                        onDragOver={e => startImageHandler(e)}
                        onDrop={e => dropImageHandler(e)}
                    >
                        <span>Drag here...</span>
                    </div>
                    : <div
                        className={style.dropArea}
                        onDragStart={e => startImageHandler(e)}
                        onDragLeave={e => leaveImageHandler(e)}
                        onDragOver={e => startImageHandler(e)}
                    >
                        <label htmlFor="contained-button-file">
                            <div className={style.btns}>
                                <label htmlFor="buttonI">{content[lang].adverd_office_drop_img}</label>
                                <input
                                    type="file"
                                    id='buttonI'
                                    className={style.label}
                                    onChange={(e) => SelectI(e.target.files)}
                                    multiple
                                />
                            </div>
                        </label>
                        <span>Drop Here...</span>
                    </div>
                }
            </div >
        </div>
    )
}

export default ImageFile