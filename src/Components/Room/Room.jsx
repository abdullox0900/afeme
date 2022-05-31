import React from 'react'
import { v4 } from 'uuid';
import style from '../HouseAbout/HouseAbout.module.scss'


function Room({room_id, setRoom}) {
    return (
        <div className={style.typeInp}>
            <p>Honalar soni: </p>
            <div>
                    <input
                        key={v4}
                        onChange={(e) => setRoom(e.target.value)}
                        type={'number'}
                        className={style.input}
                        defaultValue={room_id}>
                    </input>
            </div>
        </div>
    )
}

export default Room