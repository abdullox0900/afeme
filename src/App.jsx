// Import React and React Hooks
import React, { useEffect, Suspense } from 'react';
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
import SearchMap from './Pages/SearchMap/SearchMap';
import Test from './Pages/Test/Test';
import UserPostEditPage from './Pages/UserPostEditPage/UserPostEditPage';
import Email from './Components/Forgot/Email/Email';
import NewPassword from './Components/Forgot/newPassword/NewPassword';

function App() {

    useEffect(() => {
        if (!document.querySelector('.page404')) {
            window.replainSettings = { id: "c2f4a578-9a1f-49ac-9214-44448b236714" };
            (function (u) {
                var s = document.createElement("script");
                s.async = true;
                s.src = u;
                var x = document.getElementsByTagName("script")[0];
                x.parentNode.insertBefore(s, x);
                x.style.zIndex = "1";
            })("https://widget.replain.cc/dist/client.js");
        }

        setTimeout(() => {
            const loader = document.querySelectorAll('.loading');
            if (loader.length > 0) {
                for (let i = 0; i < loader.length; i++) {
                    loader[i].remove();
                }
            }
        }, 30000);
    }, [])

    document.addEventListener('readystatechange', function (event) {
        if (document.readyState === "complete") {
            
            const loader = document.querySelectorAll('.loading');
            document.body.style.overflow = 'auto';
            document.body.classList.add('loaded');
            setTimeout(() => {
                for (let i = 0; i < loader.length; i++) {
                    loader[i].remove();
                }
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
                    <Route path='/adverts' element={<Adverts />} />
                    <Route path='/advert/:postID' element={<Advert />} />
                    <Route path='/catalogreltor' element={<CatalogRealtor />} />
                    <Route path='/reltorcob/:userId' element={<ReltorCob />} />
                    <Route path='/userprofil' element={<UsProfil />} />
                    <Route path='/userprofilmessage' element={<UserMessagePage />} />
                    <Route path='/userads' element={<UserAdsPage />} />
                    <Route path='/userfavorites' element={<UserFavoritesPage />} />
                    <Route path='/usernews' element={<UserNewsPage />} />
                    <Route path='/userpostedit/:postID' element={<UserPostEditPage/>} />
                    <Route path='/chat' element={<Chat />} />
                    <Route path='/help' element={<Help />} />
                    <Route path='/map' element={<SearchMap />} />
                    <Route path='/test' element={<Test />} />
                    <Route path='/forgot' element={<Email />} />
                    <Route path='/newPassword' element={<NewPassword />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Suspense>
        </>
    )
};
export default App;