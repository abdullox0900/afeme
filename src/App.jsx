// Import React and React Hooks
import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";

// Import Components
import './App.scss';
import Home from "./Pages/Home/Home";
import SignUp from './Pages/SignUp/SignUp';
import AdvertPage from './Pages/AdventPage/advertPage';
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
import UserFavoritesPage from './Pages/UserFavoritesPage/UserFavoritesPage';
import UserNewsPage from './Pages/UserNewsPage/UserNewsPage';
import Help from './Pages/Help/Help';
import Test from './Pages/Test/Test';




function App() {

    document.addEventListener('readystatechange', function (event) {
        if (document.readyState === "complete") {
            
            const loader = document.querySelectorAll('.loading');
            document.body.style.overflow = 'auto';
            document.body.classList.add('loaded');
            setTimeout(() => {
                for (let i = 0; i < loader.length; i++) {
                    loader[i].style.display = 'none';
                    loader[i].style.zIndex = '-999';
                }
            }, 500);
        }
    });
    

    // function test() {
    //     setTimeout(() => {
            
    //     }, 500)
    // }

    // test()

    return (
        <>
            <ScrollTop />
            <Suspense>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Afeme' element={<Home />} />
                    <Route path='/SignUp' element={<SignUp />} />
                    <Route path='/advertPage' element={<AdvertPage />} />
                    <Route path='/adverts' element={<Adverts />} />
                    <Route path='/advert/:postID' element={<Advert />} />
                    <Route path='/catalogreltor' element={<CatalogRealtor />} />
                    <Route path='/reltorcob/:userId' element={<ReltorCob />} />
                    <Route path='/userprofil' element={<UsProfil />} />
                    <Route path='/userprofilmessage' element={<UserMessagePage />} />
                    <Route path='/userads' element={<UserAdsPage />} />
                    <Route path='/userfavorites' element={<UserFavoritesPage />} />
                    <Route path='/usernews' element={<UserNewsPage />} />
                    <Route path='/chat' element={<Chat />} />
                    <Route path='/help' element={<Help />} />
                    <Route path='/test' element={<Test />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Suspense>
        </>
    )
};
export default App;