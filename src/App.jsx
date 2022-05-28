import React from 'react';
import './App.scss';
import { Routes, Route, Navlink, } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SignUp from './Pages/SignUp/SignUp';

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<SignUp />} />
            </Routes>
        </>
    )
}

export default App;
