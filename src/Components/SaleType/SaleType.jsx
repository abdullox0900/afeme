// Import => React && useEffect
import { ReactComponent as SaleIcon } from '../../Assets/Img/Icon/house.svg'
import React, { useEffect, useState } from 'react'

// Import => Components
import style from './SaleType.module.scss'
import axios from 'axios';


function SaleType({ sale_id, setsType }) {
  const [saleType, setSaleType] = useState([
    {name_uz: 'Hovli'},
    {name_uz: 'Ijara'}
  ]);

  // useEffect(() => {
  //   const saleT = async () => {
  //     try {
  //       const res = await axios.get('http://ali98.uz/api/sales');
  //       if (res.data.status) {
  //         setSaleType(res.data.data)
  //       } else {
  //         alert('xato')
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   saleT();
  // }, [])
  return (
    <div
      className={style.sType}>
      {saleType.map((type) => (
        <button
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
            }} />
          <p>
            {type.name_uz}
          </p>
        </button>
      ))}
    </div>
  )
}

export default SaleType