// Import => React and Components
import React, { useState } from 'react';

// Import => Components
import Loader from '../../Components/Loader/Loader';
import Container from '../../Components/Container/Container';
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
import Map from '../../Components/Map/Map'

// Import => Styles
import style from './advertPage.module.scss'

// Import => Axios Packages
import axios from 'axios';

// Import => Mui
import { Button } from '@mui/material';
import { useEffect } from 'react';

function AdvertPage() {
  const [htype_id, sethType] = useState('')//HouseType State
  const [sale_id, setsType] = useState('')// SaleType State
  const longitude = localStorage.getItem('longitude') !== undefined ? localStorage.getItem('longitude') : ''
  const latitude = localStorage.getItem('latitude') !== undefined ? localStorage.getItem('latitude') : ''
  const [price_som, setRrice_som] = useState('')//Price State //// tekshirish keree
  const [price_usd, setPrice_usd] = useState('')
  const [date, setDate] = useState('')//Building Year State
  const [room, setRoom] = useState('')//Room State
  const [repair_id, setRepair] = useState('')//Reapairs State
  const [documents, setDocs] = useState({})//Documents State
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
  const [images, setImages] = useState([])//ImageFile State  
  const [videos, setVideo] = useState([])//VideoFile State

  let token = localStorage.getItem('Token')
  //Dates for Send
  var headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`)
  var data = new FormData();
  data.append('htype_id', htype_id);
  data.append('sale_id', sale_id);
  data.append('longitude', longitude);
  data.append('latitude', latitude);
  data.append('price_som', price_som);
  data.append('price_usd', price_usd);
  data.append('date', date);
  data.append('room', room);
  data.append('repair_id', repair_id);
  data.append('documents', documents);
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
  data.append('images',images);
  data.append('videos', videos);
  var requestOptions = {
    method: 'POST',
    headers: headers,
    body: data,
    redirect: 'follow'
  };
  //Post Function
  function onSubmit() {
    fetch("http://ali98.uz/api/post", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  return (
    <>
      <Loader />
      <Header />
      <Container>
        <div className={style.container}>
          <section>
            <h1 className={style.pageName}>E'lon qo'shish</h1>
            <SaleType
              sale_id={sale_id} setsType={setsType} />
            <h2 className={style.htypeText}>Bino Turlari</h2>
            <HouseType
              htype_id={htype_id} sethType={sethType} />
            <h2 className={style.htypeText}>Ofis manzili</h2>
            <Map
              house={house} setHouse={setHouse}
              street={street} setStreet={setStreet}
              city_id={city_id} setCity={setCity}
              region_id={region_id} setRegionID={setRegionID} />
            <h2 className={style.htypeText}>Ofis Haqida</h2>
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
            <h2 className={style.htypeText}>Ofis Chizmasi va Hujjatlari: </h2>
            <Docs
              documents={documents} setDocs={setDocs} />
            <div className={style.DnD}>
              <ImageFile
                images={images} setImages={setImages} />
              <VideoFile
                video={videos} setVideo={setVideo} />
            </div>
            <h2
              className={style.htypeText}
              style={{ marginTop: '70px' }}>Ofis Haqida</h2>
            <HouseDescr
              description={description} sethDescr={sethDescr} />
            <h2 className={style.htypeText}>Ofis narxi: </h2>
            <HousePrice
              price_som={price_som} setPrice_som={setRrice_som}
              price_usd={price_usd} setPrice_usd={setPrice_usd} />
            <div className={style.BtnW}>
              <Button
                type='submit'
                className={style.onBtn}
                onClick={(e) => onSubmit(e)}>
                Elonni Yuklash
              </Button>
            </div>
          </section>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default AdvertPage