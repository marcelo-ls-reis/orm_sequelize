import React from "react";
import { Route, Routes } from 'react-router-dom';
import Geral from "./components/Geral/Geral.js";
import Categorias from "./components/Categorias/Categorias.js"

function Routers() {
    return (
        <Routes>
        <Route exact path = "/" element = {<Geral />} />
        <Route exact path = "/Categorias" element = {<Categorias />} />
        </Routes>
    )
}

export default Routers