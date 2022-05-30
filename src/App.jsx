import React from 'react';
import './App.scss';
import AdvertPage from './Components/AdvertPage/advertPage';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from "../src/Pages/Home/Home";
// import Loader from './Components/Loader/Loader';
// import HomePage from './HomePage';



function App() {

    return (
        <>
            <Router>
                <Routes>

                    <Route exact path='/home' element={<Home/>}/>
                    <Route path='/advertPage' element={<AdvertPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;