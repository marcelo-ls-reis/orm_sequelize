import React from "react";
import { useEffect, useState } from "react";
import './Categorias.css';
import api from "../../services/api.js"
import Tabelas from "../Tabelas/CategoriasTabelas";

function Categorias() {
  const [categorias , setCategorias] = useState([])

  useEffect(() => {
    api.get('categorias')
    .then(response => setCategorias(response.data))
  },[]
  ) 
  return (
    <div id="idCategorias" className="Categorias">
      <div id="corpo_rel" className="tableParams"> 
      <Tabelas
         dados = {categorias}
         registros = {categorias.length}
         /> 
      </div>
    </div>
  );
}

export default Categorias;
