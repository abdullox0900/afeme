import React, { useState } from 'react'
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';
import style from './advertPage.module.scss'
import { Button } from 'react-bootstrap';
import Container from '../../Components/Container/Container';
import Header from '../../Components/Header/Header';
import SaleType from '../../Components/SaleType/SaleType';
import HouseType from '../../Components/HouseType/HouseType';
import Home from '../../Components/Map/Home';
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


function AdvertPage() {
  const [sale_id, setsType] = useState('')
  const [htype_id, sethType] = useState('')
  const [image, setImage] = useState([])
  const [video, setVideo] = useState([])
  const [description, sethDescr] = useState('')
  const [hPrice, sethPrice] = useState('')
  const [date, setDate] = useState('')
  const [area, setArea] = useState('')
  const [room_id, setRoom] = useState('')
  const [floor, setFloor] = useState('')
  const [material_id, setMaterial] = useState('')
  const [repair_id, setRepair] = useState('')
  const [areatype, setAreaValue] = useState('');
  const [pricetype, setpriceType] = useState('');
  const [patype, setPAType] = useState('');
  const [flat, setFlat] = useState('');
  const [docs, setDocs] = useState({});
  const shaharName = localStorage.getItem('shahar') !==undefined ? localStorage.getItem('shahar') : ''
  const longName = localStorage.getItem('long') !==undefined ? localStorage.getItem('long') : ''
  const latName = localStorage.getItem('latit') !==undefined ? localStorage.getItem('latit') : ''



  let formData = new FormData()
  formData.append('image', image)
  formData.append('video', video)
  formData.append('patype', patype)
  formData.append('flat', flat)
  formData.append('pricetype', pricetype)
  formData.append('areatype', areatype)
  formData.append('repair_id', repair_id)
  formData.append('material_id', material_id)
  formData.append('floor', floor)
  formData.append('sale_id', sale_id)
  formData.append('room_id', room_id)
  formData.append('date', date)
  formData.append('area', area)
  formData.append('htype_id', htype_id)
  formData.append('description', description)
  formData.append('hPrice', hPrice)
  formData.append('docs', docs)
  formData.append('location_name', shaharName)
  formData.append('latitude', latName)
  formData.append('longitude', longName)

  function onSubmit(e) {
    e.preventDefault();
    console.log(formData);

    axios.post('http://127.0.0.1:8000/api/post', formData)
    .then((res) => console.log('asda', res))
  }

  return (
    <>
    <Loader />
    <Container>
      <Header />
      <div className={style.container}>
        <section>
          <h1 className={style.pageName}>E'lon qo'shish</h1>
          
            <SaleType sale_id={sale_id} setsType={setsType} />
            <h2 className={style.htypeText}>Bino Turlari</h2>
            <HouseType htype_id={htype_id} sethType={sethType} />
            <h2 className={style.htypeText}>Ofis manzili <span>Andijon sh. va Andijon vil.</span></h2>
            <Home />
            <h2 className={style.htypeText} style={{marginTop:'70px'}}>Ofis haqida</h2>
            <Date date={date} setDate={setDate} />
            <Room room_id={room_id} setRoom={setRoom} />
            <Area area={area} setArea={setArea} areatype={areatype} setAreaValue={setAreaValue} />
            <Repair repair_id={repair_id} setRepair={setRepair} />
            <Material material_id={material_id} setMaterial={setMaterial} />
            <Floor floor={floor} setFloor={setFloor} flat={flat} setFlat={setFlat} />
            <h2 className={style.htypeText}>Ofis Chizmasi va Hujjatlari: </h2>
            <Docs docs={docs} setDocs={setDocs}/>
            <ImageFile image={image} setImage={setImage} />
            <h2 className={style.htypeText}>Ofis hakida: </h2>
            <VideoFile video={video} setVideo={setVideo} />
            <HouseDescr description={description} sethDescr={sethDescr} />
            <h2 className={style.htypeText}>Ofis narxi: </h2>
            <HousePrice hPrice={hPrice} sethPrice={sethPrice} pricetype={pricetype} setpriceType={setpriceType} patype={patype} setPAtype={setPAType} /* savdo={savdo} setsavdo={setsavdo} */ />
            <Button
              type='submit'
              className={style.onBtn}
              onClick={(e) => onSubmit(e)}>
              Elonni Yuklash
            </Button>
        
        </section>
      </div>
    </Container>
    </>
  )
}

export default AdvertPage