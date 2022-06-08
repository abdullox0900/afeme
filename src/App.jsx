import {React, ReactDOM} from 'react';
import './App.scss';
import Loader from "./Components/Loader/Loader";
import Home from "./Pages/Home/Home";
import SignUp from './Pages/SignUp/SignUp';
import { Routes, Route } from "react-router-dom";
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
import Page404 from './Pages/404/404';

function App() {

    document.addEventListener('readystatechange', function(event) {
        if (document.readyState === "loading") {
            window.scrollTo(0, 0);
            document.body.style.overflow = "hidden";
        }
        if (document.readyState === "complete"){
            const loader = document.querySelector('.loading');                             
            document.body.classList.add('loaded');
            setTimeout(() => {
                loader.style.display = 'none';
                loader.style.zIndex = '-999';
            }, 500);
        }
    });
    return (
        <>
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
                <Route path='/help' element={<Help/>} />
                <Route path='/chat' element={<Chat />} />
                <Route path="*" element={<Page404 />}/>
            </Routes>
        </>
    )
}
export default App;