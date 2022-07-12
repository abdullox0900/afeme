// Import => React
import React, { useState } from 'react'
// Import => Components
// import style from './HousePrice.module.scss'
import style from '../../Pages/AdventPage/advertPage.module.scss'



function HousePrice({ price_som, setPrice_som, price_usd, setPrice_usd }) {
    // const [type, setType] = useState('')
    // function Price(e) {
    //     if (e.target.name === 'uzs') {
    //         setPrice_som(e.target.value)
    //         setPrice_usd('')
    //     } else {
    //         setPrice_usd(e.target.value)
    //         setPrice_som('')
    //     }
    // }
    // function Type(e) {
    //     setType(e.target.value)
    // }
    return (
        <div className={style.Price}>
            <input
                className={style.numInp}
                min={0}
                // name={type}
                onChange={(e) => setPrice_som(e.target.value)}
                type={'number'}
                placeholder={'Narxni kiriting somda kiriting'}>
            </input>
            {/* <select
                id="cash"
                className={style.select}
                onChange={(e) => Type(e)}
            >
                <option className={style.option} value="uzs">Narx Turi</option>
                <option className={style.option} value="uzs">Uzs</option>
                <option className={style.option} value="usd">Usd</option>
            </select> */}
        </div>
    )
}

export default HousePrice