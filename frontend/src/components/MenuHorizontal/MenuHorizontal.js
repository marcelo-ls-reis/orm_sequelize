import React from "react";
import './MenuHorizontal.css';
import { Link, link } from "react-router-dom"


function MenuHorizontal() {
  return (
    <div className="MenuHorizontal">
      <nav className="navMenu">
        <ul>
          <li> <Link to="/"> Inicio </Link> </li>
          <li> <Link to="/Categorias"> Categorias </Link> </li>
          <li> <Link to="/Departamentos"> Departamentos </Link> </li>
        </ul>

      </nav>
    </div>
  );
}

export default MenuHorizontal;
