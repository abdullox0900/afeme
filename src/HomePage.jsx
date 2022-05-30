import React from 'react'
import Categories from './Components/Categories/Categories'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Nav from './Components/Nav/Nav'

function HomePage() {
    return (
        <div>
            <Header/>
            <Nav />
            <Hero />
            <Categories />
        </div>
    )
}

export default HomePage