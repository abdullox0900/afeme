import React, { useState } from 'react'
import { Button } from '@mui/material';
import { v4 } from 'uuid';
import style from './ImageFile.module.scss'

function ImageFile({ image, setImage }) {
    const [img, setImg] = useState(false);
    function startImageHandler(e) {
        e.preventDefault();
        setImg(true)
    }
    function leaveImageHandler(e) {
        e.preventDefault();
        setImg(false)
    }
    function dropImageHandler(e) {
        e.preventDefault()
        let files = [...e.dataTransfer.files]
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
                    <img key={v4} style={{}} alt={"wldölw"} src={URL.createObjectURL(i)} />
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
                            <input 
                            type='file'
                            onClick={(e) => onChange(e)} 
                            />
                        </label>
                        {/* <span>Drop Here...</span> */}

                    </div>

                }

            </div >
        </div>
    )
}

export default ImageFile