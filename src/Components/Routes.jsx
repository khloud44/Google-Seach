import React from 'react'
import {  Route, Routes, useNavigate } from 'react-router-dom';
import { NotFound } from './NotFound';
import { Results } from './Results';

const RoutesApp = () => {

    const navigate= useNavigate();

    return (
        <div className='p-4'>
            <Routes>
                <Route path='/'>
                    <Route index element={<Results/>}/>
                    <Route path="/search" element={<Results/>}/>
                    <Route path="/image" element={<Results/>}/>
                    <Route path="/video" element={<Results/>}/>
                    <Route path="/news" element={<Results/>}/>
                </Route>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    )
}

export  default RoutesApp;