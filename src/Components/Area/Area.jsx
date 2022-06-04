
import React from 'react'
import style from '../HouseAbout/HouseAbout.module.scss'

function Area({ area, setArea, area_type, setAreaValue }) {

    return (
        <div>
            <div className={style.typeInp}>
                <p>Maydoni: </p>
                <input
                    onChange={(e) => setArea(e.target.value)}
                    type={'number'}
                    min={0}
                    className={style.input}
                    defaultValue={area}>
                </input>
                <select name="cash" id="cash"
                    value={area_type}
                    onChange={(e) => setAreaValue(e.target.value)}
                >
                    <option value="m2">Metr Kvadrat</option>
                    <option value="ar">Sotix</option>
                </select>
            </div>
        </div>
    )
}

export default Area