import React from 'react'
import { v4 } from 'uuid';
import style from './HousePrice.module.scss'


function HousePrice({ price, sethPrice, pricetype, setpriceType, patype, setPAtype, savdo, setsavdo }) {
    return (
        <div>
            <div className={style.hPrice}>
                <div className={style.numInp}>
                    <input
                        key={v4}
                        onChange={(e) => sethPrice(e.target.value)}
                        type={'number'}
                        placeholder={price}>
                    </input>
                </div>
                <div className={style.select} htmlFor='type'>
                    <select name="type" id="type"
                        value={patype}
                        onChange={(e) => setPAtype(e.target.value)}
                    >
                        <option value="metr">Metr</option>
                        <option value="sotix">Sotix</option>
                    </select>
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
                {/* <Box>
                <FormControl>
                    <RadioGroup sx={{ flexDirection: 'row' }}
                        value={savdo}
                        onClick={(e) => setsavdo(e.target.value)}
                    >
                        <FormControlLabel control={<Radio />} label='Savdolasha olamiz' value='savdolashaolamiz' />
                    </RadioGroup>
                </FormControl>
            </Box>  */}
            </div>
        </div>
    )
}

export default HousePrice