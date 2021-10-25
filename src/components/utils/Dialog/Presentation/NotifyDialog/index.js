import React from 'react'
import './style.css'
import Dialog from '../../Dialog'
import { FiAlertCircle, FiUserCheck } from 'react-icons/fi'
import { GrStatusGood } from 'react-icons/gr'
import { BsQuestionOctagon } from 'react-icons/bs'

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

export const MakeConfirmation = (messages, title="Atenção!") => ({
    title: title, 
    icon: <BsQuestionOctagon></BsQuestionOctagon>,
    messages: messages || ["..."],
    buttons: [ "Continuar", "Cancelar" ]
})


export default function NotifyDialog ({ content={}, onClose= null, onResult=null, show=false, freeze=false }){

    const { title="", icon=null, messages=[], buttons=["Ok"] } = content

    const submit = async (index) =>{
        var preventToclose = false
        if(onResult) { preventToclose = await onResult(index); }
        if( preventToclose !== true ) return onClose()
    }

    return ( 
        <Dialog show={show} onClose={onClose} title={title || "..."} loading={freeze}>
            <div className="notify-dialog"> 

                { icon && <span className="notify-d-icon"> {icon} </span>}

                <section className="notify-d-content-body">
                    { messages.length > 0 && messages.map((m, i)=>(<span key={i}>{m}</span>)) }
                </section>

                <section className="notify-d-btns">
                    { buttons.map((b,i)=>( <button onClick={()=>submit(i)} key={i}> {b} </button>)) }
                </section>

            </div>
        </Dialog>
    )
}

