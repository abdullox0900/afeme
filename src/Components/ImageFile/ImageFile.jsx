// Import => React
import React, { useEffect, useState } from 'react'

// Import => @Mui
import { Button } from '@mui/material';
import { v4 } from 'uuid';

// Import => Components
import style from './ImageFile.module.scss'
import axios from 'axios';

function ImageFile({ photo, setPhoto }) {
    const [image, setImage] = useState([])
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
    function dropImageHandler(e) {
        e.preventDefault()
        var formdata = new FormData();
        let files = [...e.dataTransfer.files]
        for (let i = 0; i < files.length; i++) {
            formdata.append('key','Service For C Group')
            formdata.append("file", files[i]);
            axios.post('http://ali98.uz/api/service', formdata)
                .then(function (response) {
                    let res = response.data
                    Object.entries(res).forEach(([name, value]) => {
                        if (typeof value === 'string') {
                            arr.push(value);
                            setPhoto(arr)
                        }
                    })
                })
                .catch(function (res) {
                    console.log(res.response.data.message);
                })
        }
        setImage(files)
        setImg(false)
    }
    function onChange(e) {
        let files = [...e.dataTransfer.files]
        setImage(files)
    }

    return (
        <div className={style.wrapper}>
            <p>Ofis  rasmlari:</p>
            <div className={style.images}>
                {image.map((i) => (
                    <img key={v4()} src={URL.createObjectURL(i)} />
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
                                <label htmlFor="button">Rasmni Tanlang</label>
                                <input type="file" id='button' className={style.label} multiple />
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