// Import => React
import React, { useEffect, useState } from 'react';

// Import => Axios
import axios from 'axios';

// Import Components
import style from './HouseType.module.scss';
import { ReactComponent as SaleIcon } from '../../Assets/Img/Icon/house.svg'


function HouseType({ htype_id, sethType }) {
  const [houseType, setHouseType] = useState([
    {name_uz:'Hona'},
    {name_uz:'Hovli'},
    {name_uz:'Dala Hovli'},
    {name_uz:'Kvartira'},
    {name_uz:'Ofis'},
  ]);

  // useEffect(() => {
  //   const houseT = async () => {
  //     try {
  //       const res = await axios.get('http://ali98.uz/api/htype');
  //       if (res.data.status) {
  //         setHouseType(res.data.data)
  //       } else {
  //         alert('hato')
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   houseT();
  // }, [])
  return (
    <div
      className={style.HType}>
      {houseType.map((sType) => (
        <button
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
          <p>
            {sType.name_uz}
          </p>
        </button>
      ))}
    </div>
  )
}

export default HouseType