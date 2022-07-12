// Import => React
import React, { useState, useContext } from 'react';

// Import => Mui
import { TextareaAutosize } from '@mui/material';

// Import Components
import { Context } from '../../Context/LangContext';
import content from '../../Localization/Content';
import style from './HouseDescr.module.scss';

function HouseDescr({hDescr, sethDescr}) {
    const { lang, setLang } = useContext(Context);
    const [text, setText] = useState()

    return (
        <>
            <TextareaAutosize
                maxLength={400}
                className={style.HouseDescr}
                aria-label="empty textarea"
                placeholder={content[lang].adverd_office_textior}
                onChange={(e) => sethDescr(e.target.value)}
            />
        </>
    )
}

export default HouseDescr