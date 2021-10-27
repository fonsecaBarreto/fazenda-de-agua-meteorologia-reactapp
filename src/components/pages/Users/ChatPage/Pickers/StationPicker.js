import { useEffect } from 'react'
import FormRow from '../../../../utils/FormRow'
const stations = [
     {label: "Estação 01", value: "id_daestacao_01"},
     {label: "Estação 02", value: "id_daestacao_02"},
]
export const StationPicker = ({state}) => {

     useEffect(()=>{ state.data.setStation(stations[0])},[]) 

     const handleInputs = (e) =>{
          state.data.setParam({ 
               value: stations[e.target.options.selectedIndex].value,  
               label: stations[e.target.options.selectedIndex].label 
          })
     }

     return (
          <section className="chart-picker-section">
               <FormRow label={"Defina a Estação"}>
                    <select value={state.data.get['param'].value} onChange={handleInputs}>
                         { stations.map((m, i)=>(
                         <option value={m.value} key={i} >{m.label}</option>))}
                    </select> 
               </FormRow>
          </section>
     )
}

export default StationPicker