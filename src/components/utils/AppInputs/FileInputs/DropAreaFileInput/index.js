import React from 'react'
import './style.css'

import { useFileInput } from '../source/main'
export const DropAreaFileInput = ({ multiple=false, onFile }) =>{

    const { Open } = useFileInput({ multiple },(files) =>{
        onFile(files)
    })

    const getFileFromDrop = (ev) =>{
        ev.preventDefault()
        onFile( multiple === true ? ev.dataTransfer.files : ev.dataTransfer.files[0])
    }
      
    const preventOver = (ev)=>{ ev.preventDefault() }

    return (
        <div className="drop-area-file-input">
            
            <div className={`drop-area-container`} onClick={Open} onDrop={getFileFromDrop} onDragOver={preventOver}>

            </div>

        </div>
    )
}


export default DropAreaFileInput 