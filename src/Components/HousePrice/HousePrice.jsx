import React from 'react'
import { v4 } from 'uuid';
import style from './HousePrice.module.scss'


function HousePrice({ price, sethPrice, pricetype, setpriceType }) {
    return (
        <div>
            <div className={style.hPrice}>
                <div className={style.numInp}>
                    <input
                        name={pricetype}
                        min={0}
                        key={v4}
                        onChange={(e) => sethPrice(e.target.value)}
                        type={'number'}
                        placeholder={price}>
                    </input>
                </div>
                <div className={style.select} htmlFor='cash'>
                    <select name="cash" id="cash"
                        value={pricetype}
                        onChange={(e) => setpriceType(e.target.value)}
                    >
                        <option value="uzs">Uzs</option>
                        <option value="usd">Usd</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default HousePrice