// import React from "react";
// import Categorias from "../Categorias/Categorias";

// export default function Tabela(props)  {


//     function getLinhas() {
//         const arrayDados = props.dados;
//         console.log(arrayDados)

//         return arrayDados.map((itens, i) => {
//             <tr>
//                 <td>{ClipboardItem.id}</td>
//                 <td>{ClipboardItem.cat_descrição}</td>
//                 <td id="editar"><a className="btn btn-block"></a>Editar</td>

//             </tr>
//         })

//         return (
//             <div className="tabela">
//                 <table id="tabela" className="table table-hover">
//                     <thead id="cabecalho_rel">
//                         <tr style={{ textAling: 'left' }}></tr>
//                         <th scope="col">"Código"</th>
//                         <th scope="col">Descrição</th>
//                     </thead>
//                     <tbody>
//                         {getLinhas}
//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// }


import React from "react";

export default function tabela (props){
        function getLinhas(){
            const arrayDados  = props.dados
        console.log(arrayDados)
            return arrayDados.map((item , i)=>{
                <tr>
                    <td>{item.id}</td>
                    <td>{item.cat_descricao}</td>
                    <td> <button className="btnEditar"></button></td>
                    <td> <button className="btnEditar"></button></td>
                </tr>

            })
        }
            return (
                <div className="Tabela">
                    <table id="tabela" className="table table-houver">
                        <thead id="cabecalho_rel">
                            <tr style={{textAling: 'left' }}> </tr>
                            <th scope="col">"Codigo"</th>
                            <th scope="col">"Descrição"</th>
                        </thead>
                        <tbody>
                            {getLinhas}
                        </tbody>
                    </table>
                </div>
            )
        
    }
