// Import => React
import React from 'react'
import { NavLink } from 'react-router-dom'

// Import => Components
import Container from '../Container/Container'
import Header from '../Header/Header'
import style from '../../Pages/PersonalCabinet/Cabinet.module.scss'
import style2 from './Settings.module.scss'
import UserPhoto from '../../Assets/Img/UserPhoto.png'
import { ReactComponent as Edit } from '../../Assets/Img/Icon/edit.svg'
import Footer from '../Footer/Footer'

function Settings() {
  return (
    <div>
      <Header />
      <Container>
        <div className={style.btng}>
          <NavLink to={"/posts"}>
            <button> Elonlarim </button>
          </NavLink>
          <NavLink to={"/liked"} >
            <button> Yoktirganlarim </button>
          </NavLink>
          <NavLink to={"/settings"} >
            <button className={style.active}> Sozlamalar </button>
          </NavLink>
        </div>
        <h1 style={{ color: '#0468ff' }}>Sozlamalar</h1>
        <div className={style2.wrapper}>
          <div className={style2.img}>
            <img src={UserPhoto} alt="photo"  />
            <div className={style2.badge}>
              <Edit />
            </div>
          </div>
          <div className={style2.InpG}>
            <p>Hisob Turi:</p>
            <div className={style2.btns}>
              <button>Mijoz</button>
              <button>Rieltor</button>
              <button>Companiya</button>
              <button>Quruvchi</button>
            </div>
          </div>
          <div className={style2.Inp}>
            <label htmlFor="ism">Ism va Familiya:</label>
            <input required id='ism' type="text" defaultValue={'Saydullaev Hamidullo'} />
          </div>
          <div className={style2.Inp}>
            <label htmlFor="email">Email:</label>
            <input required id='email' type="text" defaultValue={'afeme@gmail.com'} />
          </div>
          <div className={style2.Inp}>
            <label htmlFor="number">Telefon Raqami:</label>
            <input required id='number' type="text" defaultValue={'+998 99 111 22 33'} />
          </div>
          <div className={style2.Inp}>
            <label htmlFor="address">Manzil:</label>
            <input required id='address' type="text" defaultValue={'Andijon vil. Andijon sh.'} />
          </div>
          <div className={style2.map}>
            <label htmlFor="map">Manzilni Haritadan Tanlang:</label>
            <iframe id='map' style={{ width: '410px', height: '300px' }} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6131044.441927201!2d64.57358194999999!3d41.38116605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1654415906259!5m2!1suz!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className={style2.btn}>
            <button>So'zlamalarni Saqlash</button>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default Settings