import { TextareaAutosize } from '@mui/material'
import React, { useState } from 'react'
import style from './HouseDescr.module.scss'

function HouseDescr({hDescr, sethDescr}) {
    const [text, setText] = useState('Uy hakida kiskacha malumot bering...')

    return (
        <>
            <TextareaAutosize
                maxLength={400}
                className={style.HouseDescr}
                aria-label="empty textarea"
                placeholder={text}
                onChange={(e) => sethDescr(e.target.value)}
            />
        </>
    )
}

export default HouseDescr