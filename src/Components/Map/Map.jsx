// Import => React and Hooks
import React, { useEffect, useState, useContext } from 'react';
//Import MUI
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
//HTTP Request
import axios from 'axios';
//Import Package
import MapPicker from 'react-google-map-picker';

import { Context } from '../../Context/LangContext';
import content from '../../Localization/Content';

// Import Components
import style from './Map.module.scss';

const DefaultZomm = 1;

let url = process.env.REACT_APP_URL;

function Map({ street, setStreet, city_id, setCity, region_id, setRegionID, house, setHouse }) {

	const [zoom, setZoom] = useState(DefaultZomm)
	const [regions, setRegions] = useState([])
	const [cities, setCities] = useState([])
	const { lang, setLang } = useContext(Context);

	function setLocation(lat, lng) {
		localStorage.setItem('latitude', lat)
		localStorage.setItem('longitude', lng)
	}

	useEffect(() => {
		const regions1 = async () => {
			try {
				const res = await axios.get(`${url}regions`);
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
					<InputLabel id="viloyat">{content[lang].form_select_vil}</InputLabel>
					<Select
						className={style.select}
						labelId={content[lang].form_select_vil}
						id={region_id}
						label={content[lang].form_select_vil}
						onChange={(e) => Selector(e.target.value)}
					>
						{regions.map((region) => (
							<MenuItem
								name={region.id}
								key={region.id}
								value={region.id}
							>
								{lang === "uz"
									? region.name_uz
									: lang === "ru"
										? region.name_ru
										: region.name_en}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<FormControl className={style.select}>
					<InputLabel id="Shaxar">{content[lang].adverd_adres_city}</InputLabel>
					<Select
						className={style.select}
						labelId={content[lang].adverd_adres_city}
						id={city_id}
						label={content[lang].adverd_adres_city}
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
				<input className={style.input} type="text" placeholder={content[lang].adverd_office} onChange={(e) => setStreet(e.target.value)} />
				<input className={style.input} type="text" placeholder={content[lang].adverd_house_num} onChange={(e) => setHouse(e.target.value)} />
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