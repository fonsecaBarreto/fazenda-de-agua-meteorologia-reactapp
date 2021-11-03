import { useEffect } from 'react'
import { InputAdapter } from '../../../../utils/Adapters/InputsAdapter'
import FormRow from '../../../../utils/FormRow'

const measurementsData = [
     {label: "Temperatura", value: "mTemperature"},
     {label: "Direção do Ventro", value: "mWindDirection"},
     {label: "Velocidade do Ventro", value: "mWindSpeed"},
     {label: "Direção do Ventro", value: "mdWindDirection"},
     {label: "Voluma de Chuva", value: "mRainVolume"},
     {label: "Voluma de Chuva Acumulada", value: "mAccRainVolume"},
     {label: "Umidade do ar", value: "mAirHumidity"},
]

export const MeasurementPicker = ({state}) =>{

     useEffect(()=>{ state.fetchConfig.setParam(measurementsData[0]) },[]) 

     const handleInputs = (e) =>{
          state.fetchConfig.setParam({ 
               value: measurementsData[e.target.options.selectedIndex].value,  
               label: measurementsData[e.target.options.selectedIndex].label 
          })
     }

     return (
          <section className="chart-picker-section">
               <FormRow label="Selecione a informação desejada">
                    <select value={state.fetchConfig.get['param'].value} onChange={handleInputs}>
                         { measurementsData.map((m, i)=>(
                              <option value={m.value} key={i} >{m.label}</option>))}
                    </select> 
               </FormRow>
          </section>
     )
}

export default MeasurementPicker