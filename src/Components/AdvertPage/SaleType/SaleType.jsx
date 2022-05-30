import style from './SaleType.module.scss'
import { ReactComponent as SaleIcon } from '../../../Assets/Img/Icon/house.svg'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';


function SaleType({ sale_id, setsType }) {
  const [saleType, setSaleType] = useState([]);

  useEffect(() => {
    const saleT = async () => {
      try {
        const { data } = await axios.get('http://127.0.0.1:8000/api/sales');
        setSaleType(data)
      } catch (error) {
        console.log(error);
      }
    }
    saleT();
  }, [])
  return (
    <div
      className={style.sType}>
      {saleType.map((type) => (
        <Button
          className={style.saleCard}
          key={type.id}
          onClick={() => setsType(type.id)}
          style={{
            backgroundColor: sale_id === type.id ? '#0468ff' : '',
            color: sale_id === type.id ? 'white' : ''
          }}
        >
          <SaleIcon
            className={style.house} style={{
              stroke: sale_id === type.id ? 'white' : ''
              }}/>
          <span>
            {type.name}
          </span>
        </Button>
      ))}
    </div>
  )
}

export default SaleType