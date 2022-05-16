import React, { Component } from 'react'
import Cian from '../../Assets/img/cian.svg'
import Google from '../../Assets/img/googleplay.svg'
import AppStore from '../../Assets/img/appstore.svg'
import AppGalery from '../../Assets/img/appgallery.svg'
import './Footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <div className='wrapper_footer'>
                <div className="first_floor">
                    <div className='about_footer'>
                        <div className="about_logo">
                            <img src={Cian} width="150" height="70" />
                        </div>
                        <div className="about_text">
                            <p className='footer_text'>Лидер онлайн-недвижимости России*
                                *по количеству посещений сайта <a href="#">Afeme.uz </a> 
                                 пользователями сети Интернет по данным
                                LiveInternet в разделе «Недвижимость» по
                                состоянию на 12 марта 2020 г.</p>
                        </div>
                    </div>
                    <div className="apps_footer">
                        <p>Мобильное приложение ЦИАН:</p>
                        <div className="icons">
                            <img src={Google} width="100" height="70" />
                            <img src={AppGalery} width="100" height="70" />
                            <img src={AppStore} width="100" height="70" />
                        </div>
                    </div>
                </div>
                <div className="second_floor">
                    <div className="links_footer">
                        <div className="links_items">
                            <p><a href="#">Afeme.uz</a> — достоверная база данных о продаже и аренде жилой, загородной и коммерческой недвижимости</p>
                        </div>
                        <div className="links_items">
                            <p><a href="#">Boshpana.uz</a> — сайт недвижимости Санкт-Петербурга</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
