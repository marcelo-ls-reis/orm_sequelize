import React from "react";
import { useEffect, useState } from "react";
import './Categorias.css';


function Categorias() {
  const [categorias , setCategorias] = useState([])

  useEffect(() => {
    api.get('categorias')
    .then(response => setCategorias(response.data))
  },[]
  ) 
  return (
    <div id="idCategorias" className="Categorias">
      <legend> Registro de categorias cadastrado </legend>
    </div>
  );
}

export default Categorias;
