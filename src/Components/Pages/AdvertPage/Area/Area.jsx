
import React from 'react'
import style from '../HouseAbout/HouseAbout.module.scss'

function Area({ area, setArea, areatype, setAreaValue }) {

    return (
        <div>
            <div className={style.typeInp}>
                <p>Maydoni: </p>
                <input
                    onChange={(e) => setArea(e.target.value)}
                    type={'number'}
                    className={style.input}
                    defaultValue={area}>
                </input>
                <select name="cash" id="cash"
                    value={areatype}
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