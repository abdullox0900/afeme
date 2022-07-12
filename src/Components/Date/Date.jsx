// Import => React
import React from 'react';
import { useState, useContext } from 'react';
import { v4 } from 'uuid';
import { Context } from '../../Context/LangContext';
import content from '../../Localization/Content';

// Import => Components
import style from '../../Pages/AdventPage/advertPage.module.scss';



function Date({ date, setDate }) {

    const { lang, setLang } = useContext(Context);


    return (
        <div className={style.typeInp}>
            <p>{content[lang].adverd_about_1}</p>
            <div className={style.InpG}>
                    <input
                        key={v4}
                        onChange={(e) => setDate(e.target.value)}
                        type={'number'}
                        min={0}
                        className={style.input}
                        defaultValue={date}>
                    </input>
            </div>
        </div>
    )
}

export default Date