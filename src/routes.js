import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Repositories from './pages/Repositories';
import Home from './pages/Home';

export default function routes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='repositorios' element={<Repositories />} />
            </Routes>
        </BrowserRouter>
    );
}
