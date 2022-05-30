import React from 'react'
import { v4 } from 'uuid'
import style from '../HouseAbout/HouseAbout.module.scss'

function Floor({ floor, setFloor, flat, setFlat }) {
    return (
        <div className={style.typeInp}>
            <p>Qavat: </p>
            <div>
                <input
                    key={v4}
                    onChange={(e) => setFloor(e.target.value)}
                    type={'number'}
                    className={style.input}
                    defaultValue={floor}>
                </input>
            </div>
            <span>dan:</span>
            <div>
                <input
                    key={v4}
                    onChange={(e) => setFlat(e.target.value)}
                    type={'number'}
                    className={style.input}
                    defaultValue={flat}>
                </input>
            </div>
        </div>
    )
}

export default Floor