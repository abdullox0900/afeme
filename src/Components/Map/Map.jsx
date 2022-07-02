// Import => React and Hooks
import React, { useEffect, useState } from 'react';
//Import MUI
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
//HTTP Request
import axios from 'axios';
//Import Package
import MapPicker from 'react-google-map-picker';

// Import Components
import style from './Map.module.scss';

const DefaultZomm = 1;

function Map({ street, setStreet, city_id, setCity, region_id, setRegionID }) {
	const [zoom, setZoom] = useState(DefaultZomm)
	const [regions, setRegions] = useState([])
	const [cities, setCities] = useState([])




	function setLocation(lat, lng) {
		localStorage.setItem('latitude', lat)
		localStorage.setItem('longitude', lng)
	}
	useEffect(() => {
		const regions1 = async () => {
			try {
				const res = await axios.get('https://ali98.uz/api/regions');
				if (res) {
					let data = res.data.data
					setRegions(data)
				} else {
					alert('xato')
				}
			} catch (error) {
				console.log(error);
			}
		}
		regions1();
	}, [])

	const Selector = (id) => {
		setRegionID(id)
		let filtered = regions.filter((item) => {
			if (item.id === id) {
				return item
			}
		})
		setCities(filtered[0].citys);
	}




	return (
		<div>
			<div className={style.InpG}>
				<FormControl className={style.select}>
					<InputLabel id="viloyat">Viloyat</InputLabel>
					<Select
						className={style.select}
						labelId="viloyat"
						id={region_id}
						label="Viloyat"
						onChange={(e) => Selector(e.target.value)}
					>
						{regions.map((region) => (
							<MenuItem
								name={region.id}
								key={region.id}
								value={region.id}
							>
								{region.name_uz}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<FormControl className={style.select}>
					<InputLabel id="Shaxar">Shaxar</InputLabel>
					<Select
						className={style.select}
						labelId="Shaxar"
						id={city_id}
						label="Shaxar"
						onChange={(e) => setCity(e.target.value)}
					>
						{cities?.map((city) => (
							<MenuItem
								key={city.id}
								value={city.id}
							>
								{city.name_uz}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<input className={style.input} type="text" placeholder='Manzil' onChange={(e) => setStreet(e.target.value)} />
			</div> 
			<MapPicker
				zoom={zoom}
				mapTypeId='roadmap'
				style={{ weight: '660px', height: '400px' }}
				onChangeLocation={(lat, lng) => setLocation(lat, lng)}
				onChangeZoom={(newZoom) => setZoom(newZoom)}
				apiKey='AIzaSyB8NHCF-5fMix0w2363RhC3V4vcyw8SHSM' />
		</div>
	)
}

export default Map