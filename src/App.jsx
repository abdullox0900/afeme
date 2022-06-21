// Import React and React Hooks
import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";

// Import Components
import './App.scss';
import Loader from "./Components/Loader/Loader";
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
import Page404 from './Pages/404/404';
import ReltorCob from './Pages/ReltorCobinet/Reltor';
import ScrollTop from './Utils/ScrollTop';
import UsProfil from './Pages/UserProfil/UsProfil';
import UserMessagePage from './Pages/UserMessage/UserMessagePage';
import UserAdsPage from "./Pages/UserAdsPage/UserAdsPage";

function App() {

    document.addEventListener('readystatechange', function (event) {
        if (document.readyState === "loading") {
            document.body.style.overflow = "hidden";
        }
        if (document.readyState === "complete") {
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

            <ScrollTop />
            <Suspense>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Afeme' element={<Home />} />
                    <Route path='/SignUp' element={<SignUp />} />
                    <Route path='/advertPage' element={<AdvertPage />} />
                    <Route path='/posts' element={<PersonalCabinet />} />
                    <Route path='/liked' element={<Liked />} />
                    <Route path='/posts' element={<Posts />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/adverts' element={<Adverts />} />
                    <Route path='/advert' element={<Advert />} />
                    <Route path='/catalogreltor' element={<CatalogRealtor />} />
                    <Route path='/reltorcob/:userId' element={<ReltorCob />} />
                    <Route path='/userprofil' element={<UsProfil />} />
                    <Route path='/userprofilmessage' element={<UserMessagePage/>} />
                    <Route path='/userads' element={<UserAdsPage/> } />
                    <Route path='/chat' element={<Chat />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Suspense>
        </>
    )
};
export default App;