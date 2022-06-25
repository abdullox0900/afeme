// Import => React
import React, { useState } from 'react'

// Import => Mui
import { Button } from '@mui/material';
import { v4 } from 'uuid';

// Import => Components
import style from '../ImageFile/ImageFile.module.scss'
import axios from 'axios';

function VideoFile({ video, setVideo }) {
    const [videoFile, setVideoFile] = useState(false);
    function startVideoHandler(e) {
        e.preventDefault();
        setVideoFile(true)
    }
    function leaveVideoHandler(e) {
        e.preventDefault();
        setVideoFile(false)
    }
    const arr = [];
    function dropVideoHandler(e) {
        e.preventDefault()
        var formdata = new FormData();
        let files = [...e.dataTransfer.files]
        for (let i = 0; i < files.length; i++) {
            formdata.append('key', 'Service For C Group')
            formdata.append("file", files[i]);
            axios.post('http://ali98.uz/api/service', formdata)
                .then(function (response) {
                    let res = response.data
                    Object.entries(res).forEach(([name, value]) => {
                        if (typeof value === 'string') {
                            arr.push(value);
                            setVideo(arr)
                        }
                    })
                })
                .catch(function (res) {
                    console.log(res.response.data.message);
                })
        }
        setVideoFile(false)
        setVideo(files)
    }
    let Arr = [];
    function Select(e) {
        let files = [...e]
        let formdata = new FormData();
        for (let i = 0; i < files.length; i++) {
            formdata.append('key', 'Service For C Group')
            formdata.append('file', files)
            axios.post('http://ali98.uz/api/service', formdata)
                .then(function (res) {
                    let data = res.data;
                    Object.entries(data).forEach(([name, value]) => {
                        if (typeof value === 'string') {
                            Arr.push(value);
                            setVideo(Arr)
                            console.log(Arr);
                        }
                    })
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
    }

    return (
        <div className={style.wrapper}>
            <p className={style.htypeText}>Ofis  videolari:</p>
            <div className={style}>
                {video.map((i) => (
                    <div key={v4}>
                        <video width="200px" height="100px" controls />
                        <source type='video/mp4' alt={"wldölw"} src={i} />
                    </div>
                ))}
            </div>
            <div className={style.videoF}>
                {videoFile
                    ? <div
                        className={style.dragArea}
                        onDragStart={e => startVideoHandler(e)}
                        onDragLeave={e => leaveVideoHandler(e)}
                        onDragOver={e => startVideoHandler(e)}
                        onDrop={e => dropVideoHandler(e)}
                    >
                        <p>Drag here...</p>
                    </div>
                    : <div
                        className={style.dropArea}
                        onDragStart={e => startVideoHandler(e)}
                        onDragLeave={e => leaveVideoHandler(e)}
                        onDragOver={e => startVideoHandler(e)}

                    >
                        <label htmlFor="contained-button-file">
                            <div className={style.btns}>
                                <label htmlFor="button">Videoni Tanlang</label>
                                <input type="file" id='button' onChange={(e) => Select(e.target.files)} className={style.label} />
                            </div>
                        </label>
                        <span>Drop Here...</span>
                    </div>
                }

            </div >
        </div>
    )
}

export default VideoFile