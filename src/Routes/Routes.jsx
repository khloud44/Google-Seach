import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import { NotFound } from '../Pages/NotFound';
import { WelcomPage } from '../Pages/WelcomPage';
import { Results } from '../Components/Results';

const RoutesApp = () => {


    return (
        <div className='p-4'>
            <Routes>
                <Route path='/'>
                    <Route index element={<WelcomPage/>}/>
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