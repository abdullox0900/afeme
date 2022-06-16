import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MapPicker from 'react-google-map-picker'
import style from './Map.module.scss'

const DefaultZomm = 5;

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
				<FormControl sx={{ width: "320px", height: "50px", mb: 3 }}>
					<InputLabel id="viloyat">Viloyat</InputLabel>
					<Select
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
				<FormControl sx={{ ml: 2, width: "320px", height: "50px", mb: 3 }}>
					<InputLabel id="Shaxar">Shaxar</InputLabel>
					<Select
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
				<input type="text" placeholder='Manzil' onChange={(e) => setStreet(e.target.value)} />
			</div>
			<MapPicker
				zoom={zoom}
				mapTypeId='roadmap'
				style={{ weight: '660px', height: '300px' }}
				onChangeLocation={(lat, lng) => setLocation(lat, lng)}
				onChangeZoom={(newZoom) => setZoom(newZoom)}
				apiKey='AIzaSyB8NHCF-5fMix0w2363RhC3V4vcyw8SHSM' />
		</div>
	)
}

export default Map