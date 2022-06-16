// Import => React
import React from 'react';
import { v4 } from 'uuid';

// Import => Components
import style from '../HouseAbout/HouseAbout.module.scss';

function Floor({ floor, setFloor, flat, setFlat }) {
    return (
        <div className={style.typeInp}>
            <p>Qavat: </p>
            <div className={style.InpG}>
                <div>
                    <input
                        key={v4}
                        onChange={(e) => setFloor(e.target.value)}
                        type={'number'}
                        min={0}
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
                        min={0}
                        className={style.input}
                        defaultValue={flat}>
                    </input>
                </div>
            </div>
        </div>
    )
}

export default Floor