import style from './HouseType.module.scss'
import { ReactComponent as SaleIcon } from '../../Assets/Img/Icon/house.svg'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from '@mui/material';

function HouseType({ htype_id, sethType }) {
  const [houseType, setHouseType] = useState([]);

  useEffect(() => {
    const houseT = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/htype');
        if (res.data.status) {
          setHouseType(res.data.data)
        } else {
          alert('hato')
        }
      } catch (error) {
        console.log(error);
      }
    }
    houseT();
  }, [])
  return (
    <div
      className={style.HType}>
      {houseType.map((sType) => (
        <Button
          className={style.saleCard}
          key={sType.id}
          onClick={() => sethType(sType.id)}
          style={{
            backgroundColor: htype_id === sType.id ? '#0468ff' : '',
            color: htype_id === sType.id ? 'white' : ''
          }}
        >
          <SaleIcon
            className={style.house} style={{
              stroke: htype_id === sType.id ? 'white' : ''
            }} />
          <span>
            {sType.name}
          </span>
        </Button>
      ))}
    </div>
  )
}

export default HouseType