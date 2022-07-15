// Import => React
import React, { useState, useContext } from 'react';
import { Context } from '../../Context/LangContext';
import content from '../../Localization/Content';

// Import => Components
import style from '../../Pages/AdventPage/advertPage.module.scss'



function HousePrice({ price_som, setPrice_som, price_usd, setPrice_usd }) {

    const { lang, setLang } = useContext(Context);
    return (
        <div className={style.Price}>
            <input
                className={style.numInp}
                min={0}
                onChange={(e) => setPrice_som(e.target.value)}
                type={'number'}
                placeholder={content[lang].adverd_office_price_info}>
            </input>
        </div>
    )
}

export default HousePrice