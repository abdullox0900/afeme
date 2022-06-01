import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material';
import style from './HouseAbout.module.scss'

function HouseAbout({ hAbout, sethAbout }) {
  const [room, setRoom] = useState('3');
  
  return (
    <>
      
      <div className={style.typeInp}>
        <p>Honalar soni: </p>
        <div>
          <input
            onChange={(e) => setRoom(e.target.value)}
            type={'number'}
            className={style.input}
            defaultValue={room}></input>
        </div>
      </div>
      
      
      
      
    </>
  )
}

export default HouseAbout