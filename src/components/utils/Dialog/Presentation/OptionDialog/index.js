

import React from 'react'
import './style.css'
import Dialog from '../../Dialog'

export const MakeOption = (label, action) =>{
    return (
        { label: label || "Sem Nome", action } 
    )
}

export function OptionDialog ({ options=[], onClose= null, show=false }){

    const submit = async (action) =>{
        action && await action()
        return onClose && onClose() 
    }

    return ( 
        <Dialog show={show} onClose={onClose} title={"Opções"}>
            <div className="options-dialog"> 
                {options.map((o,i)=>{
                    return ( <button onClick={()=>submit(o.action)} key={i}> {o.label} </button>)
                })}
            </div>
        </Dialog>
    )
}

export default OptionDialog