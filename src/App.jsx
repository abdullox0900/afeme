// Import React and React Hooks
import React from 'react';
import { Routes, Route } from "react-router-dom";

// Import Components
import './App.scss';
import Home from "./Pages/Home/Home";
import SignUp from './Pages/SignUp/SignUp';
import AdvertPage from './Pages/AdventPage/advertPage';
import PersonalCabinet from './Pages/PersonalCabinet/PersonalCabinet';
import Posts from './Components/Posts/Posts';
import Liked from './Components/Liked/Liked';
import Settings from './Components/Settings/Settings';
import Adverts from './Pages/Adverts/Adverts'
import Advert from './Pages/Advert/Advert';
import CatalogRealtor from './Pages/CatalogOfRealtors/CatalogRealtors';
import Chat from './Pages/ChatPage/ChatPage'
import Help from './Pages/Help/Help';
import ScrollTop from './Utils/ScrollTop';

function App() {

    return (
        <>
            <ScrollTop />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Afeme' element={<Home />} />
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/advertPage' element={<AdvertPage />} />
                <Route path='/cabinet' element={<PersonalCabinet />} />
                <Route path='/liked' element={<Liked />} />
                <Route path='/posts' element={<Posts />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/adverts' element={<Adverts />} />
                <Route path='/advert' element={<Advert />} />
                <Route path='/catalogreltor' element={<CatalogRealtor />} />
                <Route path='/help' element={<Help />} />
                <Route path='/chat' element={<Chat />} />
            </Routes>
        </>
    )
};

export default App;