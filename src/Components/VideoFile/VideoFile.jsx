// Import => React
import React, { useState, useContext } from 'react'

// Import => Mui
import { Button } from '@mui/material';
import { v4 } from 'uuid';


// Import => Components
import { Context } from '../../Context/LangContext';
import content from '../../Localization/Content';
import style from '../ImageFile/ImageFile.module.scss'
import axios from 'axios';

function VideoFile({ video, setVideo }) {

    const { lang, setLang } = useContext(Context);

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
    function SelectV(e) {
        console.log(e);
        let files = [...e]
        let formdataV = new FormData();
        for (let i = 0; i < files.length; i++) {
            formdataV.append('key', 'Service For C Group')
            formdataV.append('file', files)
            console.log('send',files[i]);
            axios.post('http://ali98.uz/api/service', formdataV)
                .then(function (res) {
                    console.log('v',res);
                    let data = res.data;
                    Object.entries(data).forEach(([name, value]) => {
                        if (typeof value === 'string') {
                            Arr.push(value);
                            setVideo(Arr)
                            console.log(video);
                        }
                    })
                })
                .catch(function (err) {
                    console.log('v',err);
                })
        }
    }

    return (
        <div className={style.wrapper}>
            <p className={style.htypeText}>{content[lang].adverd_office_video}</p>
            <div className={style.videos}>
                {video.map((i) => (
                    <div key={v4}>
                        <video width="400px" height="200px" controls >
                            <source type='video/mp4' alt={"wldölw"} src={i} />
                            <source type='video/ogg' alt={"wldölw"} src={i} />
                        </video>
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
                                <label htmlFor="buttonV">{content[lang].adverd_office_drop_video}</label>
                                <input
                                    type="file"
                                    id='buttonV'
                                    onChange={(e) => SelectV(e.target.files)}
                                    className={style.label}
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

export default VideoFile