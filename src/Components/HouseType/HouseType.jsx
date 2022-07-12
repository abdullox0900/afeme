// Import => React
import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../../Context/LangContext';
import content from '../../Localization/Content';

// Import => Axios
import axios from 'axios';

// Import Components
import style from './HouseType.module.scss';
import { ReactComponent as SaleIcon } from '../../Assets/Img/Icon/house.svg'


function HouseType({ htype_id, sethType }) {
  const [houseType, setHouseType] = useState([]);
  const { lang, setLang } = useContext(Context);


  useEffect(() => {
    const houseT = async () => {
      try {
        const res = await axios.get('http://ali98.uz/api/htype');
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
            { lang == "uz"
              ? sType.name_uz
              : lang == "ru"
                ? sType.name_ru
                : sType.name_en}
          </p>
        </button>
      ))}
    </div>
  )
}

export default HouseType