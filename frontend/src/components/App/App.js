import React from "react";
import './App.css';
import Routers from "../../routers.js"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routers/>
    </BrowserRouter> 
  );
}

export default App;
