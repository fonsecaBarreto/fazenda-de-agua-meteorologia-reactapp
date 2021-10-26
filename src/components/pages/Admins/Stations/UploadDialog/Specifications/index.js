import React, { useState } from 'react'
import './style.css'
const Specification = () =>{
     const [ showSpecs, setShowSpecs ] = useState(false)

     return (
          <div className="admin-measurements-specification">
               <button onClick={()=>setShowSpecs(!showSpecs)}> Ver especificações </button>
               { showSpecs &&
                    <ol >
                         <li>Data <span>  - ( dd/mm/yyyy ) </span></li>
                         <li>Hora  <span> - ( 00:00:00 )</span> </li>
                         <li>Temperatura  <span> -  ( n ) C°</span></li>
                         <li>Umidade do Ar <span > - ( n )</span></li>
                         <li>Dir. Vento   <span> - ('N', 'S', 'L', 'W') </span></li>
                         <li>Vel. Vento <span>  - ( n ) </span></li>
                         <li>Vol. Chuva (n) <span> - ( n )  m³ </span></li>
                         <li>Vol. Acc. Chuva <span>-  ( n ) m³</span> </li>
                         <hr></hr>
                    </ol>
               }
          </div>
     )
}

export default Specification