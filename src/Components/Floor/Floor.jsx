// Import => React
import React from 'react';
import { useContext } from 'react';
import { v4 } from 'uuid';
import { Context } from '../../Context/LangContext';
import content from '../../Localization/Content';

// Import => Components
import style from '../../Pages/AdventPage/advertPage.module.scss'


function Floor({ floor, setFloor, flat, setFlat }) {

    const { lang, setLang } = useContext(Context);


    return (
        <div className={style.typeInp}>
            <p>{content[lang].adverd_about_4}</p>
            <div className={style.InpG}>
                <div>
                    <input
                        key={v4}
                        onChange={(e) => setFloor(e.target.value)}
                        type={'number'}
                        min={0}
                        className={style.inputf}
                        defaultValue={floor}>
                    </input>
                </div>
                <span>{content[lang].adverd_about_38}</span>
                <div>
                    <input
                        key={v4}
                        onChange={(e) => setFlat(e.target.value)}
                        type={'number'}
                        min={0}
                        className={style.inputf}
                        defaultValue={flat}>
                    </input>
                </div>
            </div>
        </div>
    )
}

export default Floor