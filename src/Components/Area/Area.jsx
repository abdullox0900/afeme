// Import => React
import React from 'react'
import { useContext } from 'react';
import { Context } from '../../Context/LangContext';
import content from '../../Localization/Content';

// Import => Style Component
import style from '../../Pages/AdventPage/advertPage.module.scss'

function Area({ total_area, setTotalArea, living_area, setLivingArea, kitchen_area, setKitchenArea, total_area_type, setTotalAreaType }) {

    const { lang, setLang } = useContext(Context);

    return (
        <div>
            <div className={style.typeInp}>
                <p>{content[lang].adverd_about_3}</p>
                <div className={style.InpG}>
                    <input
                        className={style.input}
                        placeholder={content[lang].adverd_about_33}
                        type={'number'}
                        defaultValue={kitchen_area}
                        onChange={(e) => setKitchenArea(e.target.value)}
                    >
                    </input>
                    <input
                        onChange={(e) => setLivingArea(e.target.value)}
                        type={'number'}
                        placeholder={content[lang].adverd_about_34}
                        className={style.input}
                        defaultValue={living_area}>
                    </input>
                    <div className={style.total}>
                        <input
                            onChange={(e) => setTotalArea(e.target.value)}
                            type={'number'}
                            placeholder={content[lang].adverd_about_35}
                            className={style.input}
                            defaultValue={total_area}>
                        </input>
                        <select name="cash" id="cash"
                            value={total_area_type}
                            onChange={(e) => setTotalAreaType(e.target.value)}
                        >
                            <option value=''>Tanlang</option>
                            <option value="m2">{content[lang].adverd_about_36}</option>
                            <option value="ar">{content[lang].adverd_about_37}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Area