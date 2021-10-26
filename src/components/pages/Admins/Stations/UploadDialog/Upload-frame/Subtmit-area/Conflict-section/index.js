import React from 'react'
import { SiMeteor } from 'react-icons/si'
import './style.css'
import { BsBackspace } from 'react-icons/bs'
import { AiFillWarning } from 'react-icons/ai'
const ConflictSection = ({errors, setErrors}) =>{

     const renderError = (content) =>{ 
          if(typeof content == "string") return content
          else if(typeof content == "object" ){

               return (
                    <ul>
                         { Object.keys(content).map((key,i) => ( <li> - {content[key]} </li> ) )}
                    </ul>
               )
          }
     }
     return (
          <div className="upload-conflcits-section">
        
               <h3> <button onClick={()=>setErrors({})}>  <BsBackspace/> </button> Foram encontrados erros nas sequintes linhas: </h3>

               <ul>
                    { Object.keys(errors).map(line=>{
                         return (<li className="u-c-s-line"> <span> Linha {line} : </span>  <span> {renderError(errors[line])} </span> </li>)
                    }) }
               </ul>
              
          </div>
     )
}

export default ConflictSection