import React from 'react'
import style from './Map.module.scss'

function Map() {
	return (
		<div>
			<div className={style.InpG}>
				<input type="text" placeholder='Viloyat' />
				<input type="text" placeholder='Shaxar' />
				<input type="text" placeholder='Manzil' />
				<input type="text" placeholder='Möljal' />
			</div>
			<div >
				<iframe className={style.map} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6131044.441927201!2d64.57358194999999!3d41.38116605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1654415906259!5m2!1suz!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</div>
	)
}

export default Map