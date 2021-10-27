import { useEffect } from 'react'
import { InputAdapter } from '../../../../utils/Adapters/InputsAdapter'
import FormRow from '../../../../utils/FormRow'
const measurementsData = [
     {label: "Direção do Ventro", value: "windDirection"},
     {label: "Velocidade do Ventro", value: "windSpeed"},

     {label: "Voluma de Chuva", value: "rainVolumne"},

     {label: "Temperatura", value: "temperature"},
     {label: "Umidade do ar", value: "airHumidity"},
]

export const MeasurementPicker = ({state}) =>{

     useEffect(()=>{  state.data.setParam(measurementsData[0])},[]) 

     const handleInputs = (e) =>{
          state.data.setParam({ 
               value: measurementsData[e.target.options.selectedIndex].value,  
               label: measurementsData[e.target.options.selectedIndex].label 
          })
     }

     return (
          <section className="chart-picker-section">
               <FormRow label="Selecione a informação desejada">
                    <select value={state.data.get['param'].value} onChange={handleInputs}>
                         { measurementsData.map((m, i)=>(
                              <option value={m.value} key={i} >{m.label}</option>))}
                    </select> 
               </FormRow>
          </section>
     )
}

export default MeasurementPicker