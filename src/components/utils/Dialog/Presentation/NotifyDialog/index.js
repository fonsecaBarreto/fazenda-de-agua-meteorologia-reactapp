import React from 'react'
import './style.css'
import Dialog from '../../Dialog'
import SuccessImage from './success.webp'
import { FiAlertCircle, FiUserCheck } from 'react-icons/fi'
import { GrStatusGood } from 'react-icons/gr'

export const MakeFailure = (messages, title="Atenção!") =>({
    title: title, 
    icon: <FiAlertCircle></FiAlertCircle>,
    messages: messages || ["Não foi possivel realizar essa ação."]
})

export const MakeSuccess = (messages, title="Sucesso!") => ({ 
    title: title, 
    icon: <GrStatusGood>,</GrStatusGood>,
    messages: messages || ["Operação Relizada com sucesso"]
})

export const MakeInfo = (messages, title="") => ({
    title: title, 
    icon: <FiUserCheck></FiUserCheck>,
    messages: messages || ["..."]
})

export default function NotifyDialog ({ content={}, onClose= null, onResult=null, show=false }){

    const { title="", icon=null, messages=[] } = content

    const submit = async () =>{
        onResult && await onResult()
        return onClose && onClose()
    }

    return ( 
        <Dialog show={show} onClose={onClose} title={title || "..."}>
            <div className="notify-dialog"> 

                { icon && <span className="notify-d-icon"> {icon} </span>}

                <section className="notify-d-content-body">
                    { messages.length > 0 && messages.map((m, i)=>(<span key={i}>{m}</span>)) }
                </section>

                <section className="notify-d-btns">
                    <button onClick={submit}> Ok </button>
                </section>

            </div>
        </Dialog>
    )
}