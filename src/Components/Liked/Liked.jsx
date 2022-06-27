// Import => React and React-Router-Dom
import React from 'react'
import { NavLink } from 'react-router-dom'

// Import => Components
import Container from '../Container/Container'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Personal from '../Personal/Personal'
import CardImg1 from '../../Assets/Img/card_img1.jpg'
import style from '../../Pages/PersonalCabinet/Cabinet.module.scss'


function Liked() {
    const data = {
        houseType: 'Uy',
        housePrice: 1400,
        houseTitle: 'My house',
        houseAddress: 'Andijan',
        houseUrl: '/adverts',
        houseImg: CardImg1,
    };
    return (
        <>
            <Container>
                <Header />
                <div style={{ display: 'flex' }}>
                    <div style={{ flexDirection: 'column' }}>
                        <div className={style.btng}>
                            <NavLink to={"/posts"}>
                                <button > Elonlarim </button>
                            </NavLink>
                            <NavLink to={"/liked"} >
                                <button className={style.active}> Yoktirganlarim </button>
                            </NavLink>
                            <NavLink to={"/settings"} >
                                <button> Sozlamalar </button>
                            </NavLink>
                        </div>
                        <h1 style={{ color: '#0468ff', }}>El’onlarim</h1>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                            
                        </div>
                    </div>
                    <Personal />
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default Liked