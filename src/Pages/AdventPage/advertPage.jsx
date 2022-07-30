// Import => React and Components
import React, { useState, useContext } from 'react';

// Import => Components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer'
import SaleType from '../../Components/SaleType/SaleType';
import HouseType from '../../Components/HouseType/HouseType';
import Date from '../../Components/Date/Date';
import Room from '../../Components/Room/Room';
import Area from '../../Components/Area/Area';
import Repair from '../../Components/Repair/Repair';
import Material from '../../Components/Material/Material';
import Floor from '../../Components/Floor/Floor';
import Docs from '../../Components/HouseDocs/Docs';
import ImageFile from '../../Components/ImageFile/ImageFile';
import VideoFile from '../../Components/VideoFile/VideoFile';
import HouseDescr from '../../Components/HouseDescr/HouseDescr';
import HousePrice from '../../Components/HousePrice/HousePrice';
import Map from '../../Components/Map/Map';
import Error from '../../Components/Modals/Error/Error';
import Success from '../../Components/Modals/Success/Success';
import Page404 from "../404/404";

// Import => Styles
import style from './advertPage.module.scss';

import { Context } from '../../Context/LangContext';
import { UserContext } from '../../Context/UserContext';
import content from '../../Localization/Content';

// Import => Mui
import { Button } from '@mui/material';

let url = process.env.REACT_APP_URL;

function AdvertPage() {

  const { lang } = useContext(Context);
  const { user, setUser } = useContext(UserContext);
  const [err, setErr] = useState(false);
  const [suc, setSuc] = useState(false);//Success State
  const handleErr = () => setErr(true);
  const handleSuc = () => setSuc(true);
  const [htype_id, sethType] = useState('')//HouseType State
  const [sale_id, setsType] = useState('')// SaleType State
  const longitude = localStorage.getItem('longitude') !== undefined ? localStorage.getItem('longitude') : ''
  const latitude = localStorage.getItem('latitude') !== undefined ? localStorage.getItem('latitude') : ''
  const [price_som, setRrice_som] = useState('')//Price State //// tekshirish keree
  const [date, setDate] = useState('')//Building Year State
  const [room, setRoom] = useState('')//Room State
  const [repair_id, setRepair] = useState('')//Reapairs State
  const [document, setDocs] = useState([])//Documents State
  const [description, sethDescr] = useState('')//House Description State
  const [material_id, setMaterial] = useState('')// Materials State
  const [region_id, setRegionID] = useState('')//Region State
  const [city_id, setCity] = useState('')// City State
  const [street, setStreet] = useState('')// Street State
  const [house, setHouse] = useState(2)// State
  const [floor, setFloor] = useState('')//Floor and Flat States
  const [flat, setFlat] = useState('')//
  const [total_area, setTotalArea] = useState('')
  const [living_area, setLivingArea] = useState('')
  const [kitchen_area, setKitchenArea] = useState('')
  const [total_area_type, setTotalAreaType] = useState('')
  const [photo, setPhoto] = useState([])//ImageFile State
  const [video, setVideo] = useState([])//VideoFile State

  //Dates for Send
  let token = localStorage.getItem('Token')
  var headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`)
  var data = new FormData();
  data.append('htype_id', htype_id);
  data.append('sale_id', sale_id);
  data.append('longitude', longitude);
  data.append('latitude', latitude);
  data.append('price_som', price_som);
  data.append('date', date);
  data.append('room', room);
  data.append('repair_id', repair_id);
  data.append('document', document);
  data.append('description', description);
  data.append('material_id', material_id);
  data.append('region_id', region_id);
  data.append('city_id', city_id);
  data.append('street', street);
  data.append('house', house);
  data.append('floor', floor);
  data.append('flat', flat);
  data.append('total_area', total_area)
  data.append('total_area_type', total_area_type)
  data.append('living_area', living_area)
  data.append('kitchen_area', kitchen_area)
  data.append('photo', photo);
  data.append('video', video);

  var requestOptions = {
    method: 'POST',
    headers: headers,
    body: data,
    redirect: 'follow'
  };
  //Post Function
  function onSubmit() {
    fetch(`${url}post`, requestOptions)
      .then(response => response.text())
      .then(function (response) {
        handleSuc();
      })
      .catch(function (err) {
        handleErr();
      })
  }

  if (token && token.trim() !== '') {
    if (user.hasOwnProperty('data')) {
      return (
        <>
          <Header />
          <Error err={err} setErr={setErr} />
          <Success suc={suc} setSuc={setSuc} />
          <div className={style.container}>
            <article>

              <h1 className={style.pageName}>{content[lang].advert_title}</h1>
              <h2 className={style.htypeText}>{content[lang].adverd_sotish_turi}</h2>
              <SaleType
                sale_id={sale_id} setsType={setsType} />
              <h2 className={style.htypeText}>{content[lang].adverd_build_title}</h2>
              <HouseType
                htype_id={htype_id} sethType={sethType} />
              <h2 className={style.htypeText}>{content[lang].adverd_adres_office}</h2>

              <Map
                house={house} setHouse={setHouse}
                street={street} setStreet={setStreet}
                city_id={city_id} setCity={setCity}
                region_id={region_id} setRegionID={setRegionID} />

              <h2 className={style.htypeText}>{content[lang].adverd_about_the_office}</h2>

              <Date
                date={date} setDate={setDate} />
              <Room
                room={room} setRoom={setRoom} />
              <Area total_area={total_area} setTotalArea={setTotalArea}
                living_area={living_area} setLivingArea={setLivingArea}
                kitchen_area={kitchen_area} setKitchenArea={setKitchenArea}
                total_area_type={total_area_type} setTotalAreaType={setTotalAreaType} />
              <Floor
                floor={floor} setFloor={setFloor}
                flat={flat} setFlat={setFlat} />
              <Repair
                repair_id={repair_id} setRepair={setRepair} />
              <Material
                material_id={material_id} setMaterial={setMaterial} />

              <h2 className={style.htypeText}>{content[lang].adverd_documents}</h2>

              <Docs
                document={document} setDocs={setDocs} />
              <ImageFile
                photo={photo} setPhoto={setPhoto} />
              <VideoFile
                video={video} setVideo={setVideo} />
              <h2
                className={style.htypeText}
                style={{ marginTop: '70px' }}>{content[lang].adverd_about_the_office}</h2>
              <HouseDescr
                description={description} sethDescr={sethDescr} />
              <h2 className={style.htypeText}>{content[lang].adverd_office_price}</h2>
              <HousePrice
                price_som={price_som} setPrice_som={setRrice_som} />
              <div className={style.BtnW}>
                <Button
                  type='submit'
                  className={style.onBtn}
                  onClick={(e) => onSubmit(e)}>
                  {content[lang].adverd_submit}
                </Button>
              </div>
            </article>
          </div>
          <Footer />
        </>
      )
    } else {
      setTimeout(() => {
        return <Page404 />
      }, 1000);
    }
  } else {
    setTimeout(() => {
      return <Page404 />
    }, 1000);
  }
}

export default AdvertPage