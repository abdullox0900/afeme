import React from 'react';
import './App.scss';
import Home from "./Pages/Home/Home";
import SignUp from './Pages/SignUp/SignUp';
import { Routes, Route } from "react-router-dom";
import AdvertPage from './Pages/AdventPage/advertPage';
import PersonalCabinet from './Pages/PersonalCabinet/PersonalCabinet';
import Posts from './Components/Posts/Posts';
import Liked from './Components/Liked/Liked';
import Settings from './Components/Settings/Settings';


function App() {
    return (
        <>
            <Routes>
                <Route path='/Afeme' element={<Home />} />
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/advertPage' element={<AdvertPage />} />
                <Route path='/cabinet' element={<PersonalCabinet />} />
                <Route path='/liked' element={<Liked />} />
                <Route path='/posts' element={<Posts />} />
                <Route path='/settings' element={<Settings />} />
            </Routes>
        </>
    )
}
export default App;