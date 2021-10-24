import { useEffect, useState } from "react"
import FormRow from "../FormRow"

const GeneralInput = ({s, n, t, p}) =>{
     return ( 
     <input 
          type={t} placeholder={p || ''}
          value={s.data.get[n]}  
          onInput={e=>  s.data.handleInputs(n, e.target.value) } >
     </input>)
}

const TextAreaInput = ({s, n, p, rows=3}) =>{
     return ( 
     <textarea 
          rows={rows}
          placeholder={p || ''}
          value={s.data.get[n]}  
          onInput={e=>  s.data.handleInputs(n, e.target.value) } >
     </textarea>)
}

const SelectInput = ({s, n, list, p, label, d }) => {
     // d expects a default index (optional)
     if(!list) throw new Error("Nehuma Lista foi fornecida para coluna: "+n);
     const [ workList, setWorkList] = useState([])
     useEffect(()=>{
          if(d != null){
               setWorkList([ ...list])
               if(list.length > 0)
                    s.data.handleInputs(n, label ? { value: list[d].value, label: list[d].label } : list[d].value);
          }else{
               setWorkList([ {value: "", label: p || "Nenhum Item Selecionado "}, ...list])
          }
     },[ list.length ])

     const handleInput = (e) =>{
          s.data.handleInputs(n, label ? { value: e.target.value, label: workList[e.target.options.selectedIndex].label } : e.target.value) 
     }
     return (<select 
               disabled={list.length === 0} 
               value={ label ?  s.data.get[n].value :  s.data.get[n]} 
               onChange={handleInput}>
          {workList.map((u,i)=><option value={u.value} key={i}>{u.label}</option>)}
     </select>)
}

const ViewBox = ({s, n }) => {
     return (<input disabled={true} type={'text'} value={s.data.get[n].label} ></input>)
}

export const InputAdapter = ({state, name, label, type = "text", placeholder, list, def }) =>{
     if(!state || !name) throw new Error("001")

     return(
          <FormRow label={label || name} error={state.errors.get[name]}>
               {
                    ['text','number','password'].includes(type) ? 
                         <GeneralInput s={state} n={name} t={type} p={placeholder} > </GeneralInput>
                    : type === "textarea" ?
                         <TextAreaInput s={state} n={name} p={placeholder}></TextAreaInput>
                    : type === "select" ?
                         <SelectInput s={state} p={placeholder} n={name} list={list} d={def}></SelectInput>
                    : type === "selectView" ?
                         <SelectInput s={state} p={placeholder} n={name} list={list} label d={def} ></SelectInput>
                    :  type === "viewbox" ?
                         <ViewBox s={state} n={name}></ViewBox>
                    :  <span> - </span>
               }
          </FormRow>
          )
}

export default InputAdapter