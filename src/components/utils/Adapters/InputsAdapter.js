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

const SelectInput = ({s, n, p, list}) => {
     if(!list) throw new Error("Nehuma Lista foi fornecida para coluna: "+n);
     return (<select value={s.data.get[n]} onChange={e=> s.data.handleInputs(n,e.target.value)} placeholder={p}>
          {list.map((u,i)=><option value={u.value} key={i}>{u.label}</option>)}
     </select>)
}

const ViewBox = ({s, n }) => {
     return (<input disabled={true} type={'text'} value={s.data.get[n].label} ></input>)
}

export const InputAdapter = ({state, name, label, type = "text", placeholder, list}) =>{
     if(!state || !name) throw new Error("001")

     return(
          <FormRow label={label || name} error={state.errors.get[name]}>
               {
                    ['text','number'].includes(type) ? 
                         <GeneralInput s={state} n={name} t={type} p={placeholder} > </GeneralInput>
                    : type === "textarea" ?
                         <TextAreaInput s={state} n={name} p={placeholder}></TextAreaInput>
                    : type === "select" ?
                         <SelectInput s={state} n={name} p={placeholder} list={list}></SelectInput>
                    :  type === "viewbox" ?
                         <ViewBox s={state} n={name}></ViewBox>
                    :  <span> - </span>
               }
          </FormRow>
          )
}

export default InputAdapter