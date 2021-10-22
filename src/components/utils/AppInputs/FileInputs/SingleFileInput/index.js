import React from 'react'
import './style.css'
import { useFileInput } from '../source/main'
import { FaTimes } from 'react-icons/fa'
const FileInput = ({ value, onFile }) => {

    const { Open } = useFileInput({ multiple:false },(file) =>{
        onFile(file)
    })

    return (
        <div className="app-file-input">
            <button onClick={Open}> selecionar </button>
            <span >  { value ? value.name : "Nenhum arquivo selecionado." } </span> 
            { value &&  <button className="app-file-input-close" onClick={()=>onFile(null)}> <FaTimes></FaTimes> </button>}
        </div>
        
    )
}


export default FileInput