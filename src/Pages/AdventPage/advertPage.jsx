// Import React and Components
import React, { useState } from 'react'
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

// Import Styles
import style from './advertPage.module.scss'

// Import Packages
import axios from 'axios';
import { Button } from '@mui/material';

function AdvertPage() {
  const [sale_id, setsType] = useState('')// SaleType State
  const [htype_id, sethType] = useState('')//HouseType State
  const [image, setImage] = useState([])//ImageFile State
  const [video, setVideo] = useState([])//VideoFile State
  const [description, sethDescr] = useState('')//House Description State
  const [hPrice, sethPrice] = useState('')//Price State
  const [date, setDate] = useState('')//Building Year State
  const [area, setArea] = useState('')// Area State
  const [area_type, setAreaValue] = useState('')//AreaType State
  const [room, setRoom] = useState('')//Room State 
  const [floor, setFloor] = useState('')//Floor and Flat States
  const [flat, setFlat] = useState('')//
  const [material_id, setMaterial] = useState('')// Materials State
  const [repair_id, setRepair] = useState('')//Reapairs State
  const [pricetype, setpriceType] = useState('')
  const [documents, setDocs] = useState({})//Documents State
  const shaharName = localStorage.getItem('shahar') !== undefined ? localStorage.getItem('shahar') : ''
  const longName = localStorage.getItem('long') !== undefined ? localStorage.getItem('long') : ''
  const latName = localStorage.getItem('latit') !== undefined ? localStorage.getItem('latit') : ''


  //Dates for Send
  let formData = new FormData()
  formData.append('image', image)
  formData.append('video', video)
  formData.append('htype_id', htype_id)
  formData.append('sale_id', sale_id)
  formData.append('longitude', longName)
  formData.append('latitude', latName)
  formData.append('location_name', shaharName)
  formData.append('area', area)
  formData.append('area_type', area_type)
  formData.append('date', date)
  formData.append('room', room)
  formData.append('repair_id', repair_id)
  formData.append('description', description)
  formData.append('documents', documents)
  formData.append('material_id', material_id)
  formData.append('floor', floor)
  formData.append('flat', flat)
  formData.append('hPrice', hPrice)
  formData.append('pricetype', pricetype)

  //Post Function
  function onSubmit(e) {
    e.preventDefault();
    axios.post('http://ali98.uz/api/post', formData)
      .then((res) => console.log('asda', res))
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
              sale_id={sale_id}

              setsType={setsType} />
            <h2 className={style.htypeText}>Bino Turlari</h2>
            <HouseType
              htype_id={htype_id}
              sethType={sethType} />
            <h2 className={style.htypeText}>Ofis manzili</h2>
            <Map />
            <h2 className={style.htypeText}>Ofis Haqida</h2>
            <Date
              date={date}
              setDate={setDate} />
            <Room
              room={room}
              setRoom={setRoom} />
            <Area
              area={area}
              setArea={setArea}
              area_type={area_type}
              setAreaValue={setAreaValue} />
            <Floor
              floor={floor}
              setFloor={setFloor}
              flat={flat}
              setFlat={setFlat} />
            <Repair
              repair_id={repair_id}
              setRepair={setRepair} />
            <Material
              material_id={material_id}
              setMaterial={setMaterial} />
            <h2 className={style.htypeText}>Ofis Chizmasi va Hujjatlari: </h2>
            <Docs
              documents={documents}
              setDocs={setDocs} />
            <div className={style.DnD}>
              <ImageFile
                image={image}
                setImage={setImage} />
              <VideoFile
                video={video}
                setVideo={setVideo} />
            </div>
            <h2
              className={style.htypeText}
              style={{ marginTop: '70px' }}>Ofis Haqida</h2>
            <HouseDescr
              description={description}
              sethDescr={sethDescr} />
            <h2 className={style.htypeText}>Ofis narxi: </h2>
            <HousePrice
              hPrice={hPrice}
              sethPrice={sethPrice}
              pricetype={pricetype}
              setpriceType={setpriceType} />
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