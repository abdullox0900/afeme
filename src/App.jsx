import React from 'react';
import './App.scss';
import AdvertPage from './Components/Pages/AdvertPage/advertPage';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './HomePage';

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route exact path='/homepage' element={<HomePage />}/>
                    <Route path='/advertPage' element={<AdvertPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;
