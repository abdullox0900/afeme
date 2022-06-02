import React, { useState } from 'react'
import { Button } from '@mui/material';
import { v4 } from 'uuid';
import style from './VideoFile.module.scss'

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
    function dropVideoHandler(e) {
        e.preventDefault()
        let files = [...e.dataTransfer.files]
        setVideo(files)
        setVideoFile(false)

    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className={style.htypeText}>Ofis  videolari:</p>
            <div className={style.video}>
                {video.map((i) => (
                    <div key={v4}>
                        <video width="200px" height="100px" controls />
                        <source type='video/mp4' alt={"wldölw"} src={URL.createObjectURL(i)} />
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
                            <Button
                                style={{ cursor: 'pointer' }}
                                variant="contained" component="span"
                                accept="image/*" id="contained-button-file" multiple type="file">
                                Videoni Tanlang
                            </Button>
                        </label>
                        <p>Drop Here...</p>
                    </div>
                }

            </div >
        </div>
    )
}

export default VideoFile