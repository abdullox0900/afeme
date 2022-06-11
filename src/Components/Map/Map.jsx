import React, { useState } from 'react'
import MapPicker from 'react-google-map-picker'
import style from './Map.module.scss'

const DefaultZomm = 5; 

function Map({ house, setHouse, street, setStreet, city_id, setCity, region_id, setRegionID }) {
	const [zoom, setZoom] = useState(DefaultZomm)


	function setLocation (lat, lng){
		localStorage.setItem('latitude', lat)
		localStorage.setItem('longitude', lng)
	}
	return (
		<div>
			<div className={style.InpG}>
				<input type="text" placeholder='Viloyat' onChange={(e) => setRegionID(e.target.value)} />
				<input type="text" placeholder='Shaxar' onChange={(e) => setCity(e.target.value)} />
				<input type="text" placeholder='Manzil' onChange={(e) => setStreet(e.target.value)} />
			</div>
			<MapPicker
				zoom={zoom}
				mapTypeId='roadmap'
				style={{weight: '660px', height: '300px' }}
				onChangeLocation={(lat, lng) => setLocation( lat,lng )}
				onChangeZoom={(newZoom) => setZoom(newZoom)}
				apiKey='AIzaSyB8NHCF-5fMix0w2363RhC3V4vcyw8SHSM' />
		</div> 
	)
}

export default Map