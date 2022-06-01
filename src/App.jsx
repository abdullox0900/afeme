import React from 'react';
import './App.scss';
import Home from "./Pages/Home/Home";
import SignUp from './Pages/SignUp/SignUp';
import { Routes, Route } from "react-router-dom";
import AdvertPage from './Pages/AdventPage/advertPage';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Afeme' element={<Home/>}/>
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/advertPage' element={<AdvertPage />} />
            </Routes>
        </>
    )
}
export default App;