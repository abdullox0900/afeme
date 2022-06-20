// Import => React
import React, { useState } from 'react'

// Import => @Mui
import { Button } from '@mui/material';
import { v4 } from 'uuid';

// Import => Components
import style from './ImageFile.module.scss'
import axios from 'axios';

function ImageFile({ images, setImages }) {
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
    const [array, setarray] = useState([]);
    function dropImageHandler(e) {
        // const [obj, setobj] = useState({})
        e.preventDefault()
        var formdata = new FormData();
        let files = [...e.dataTransfer.files]
        console.log(typeof arr);
        // let obj = [];
        for (let i = 0; i < files.length; i++) {
            formdata.append("image", files[1]);
            axios.post('http://ali98.uz/api/service', formdata)
                .then(function (response) {
                    let one = (JSON.stringify(response.data.data));
                    // console.log(one);
                    // setarray(one)
                })
        }
        setImage(files)
        setImg(false)
        setTimeout(() => {
            console.log(array);
        }, 2000)
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
                            <Button
                                style={{ cursor: 'pointer' }}
                                variant="contained" component="span"
                                accept="image/*" id="contained-button-file" multiple type="file">
                                Videoni Tanlang
                            </Button>
                        </label>
                        <span>Drop Here...</span>

                    </div>

                }

            </div >
        </div>
    )
}

export default ImageFile