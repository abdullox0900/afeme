import React, { useState } from 'react'
import style from './HousePrice.module.scss'


function HousePrice({ price_som, setPrice_som, price_usd, setPrice_usd }) {
    const [type, setType] = useState('')
    function Price(e) {
        if (e.target.name === 'uzs') {
            setPrice_som(e.target.value )
            setPrice_usd('')
        } else {
            setPrice_usd(e.target.value )
            setPrice_som('')
        }
    }
    function Type(e) {
        setType(e.target.value)
    } 
    return (
        <div>
            <div className={style.hPrice}>
                <input
                    className={style.numInp}
                    min={0}
                    name={type}
                    onChange={(e) => Price(e)}
                    type={'number'}
                    placeholder={'Narhni kiriting !!!'}>
                </input>
                <select defaultValue='yok' id="cash"
                    className={style.select}
                    onChange={(e) => Type(e)}
                >
                    <option value="uzs">Uzs</option>
                    <option value="usd">Usd</option>
                </select>
            </div>
        </div>
    )
}

export default HousePrice