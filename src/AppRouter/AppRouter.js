import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "../Modules/Hero/Hero";
function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Hero />} path={"/"}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter