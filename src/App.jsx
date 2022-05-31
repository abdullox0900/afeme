import React from 'react';
import './App.scss';
import Home from "./Pages/Home/Home";
import SignUp from './Pages/SignUp/SignUp';
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route exact path='/Afeme' element={<Home/>}/>
                <Route path='/SignUp' element={<SignUp />} />
            </Routes>
        </>
    )
}
export default App;