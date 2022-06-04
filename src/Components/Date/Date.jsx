import React from 'react'
import { v4 } from 'uuid'
import style from '../HouseAbout/HouseAbout.module.scss'

function Date({ date, setDate }) {
    return (
        <div className={style.typeInp}>
            <p>Qurilgan Yili: </p>
            <div>
                    <input
                        key={v4}
                        onChange={(e) => setDate(e.target.value)}
                        type={'number'}
                        min={0}
                        step={5}
                        className={style.input}
                        defaultValue={date}>
                    </input>
            </div>
        </div>
    )
}

export default Date