import { useEffect } from 'react'
import FormRow from '../../../../utils/FormRow'
import { MEASUREMENTS_DATA } from '../domain/SCALES_INTERVALS'

export const MeasurementPicker = ({state}) =>{

     const handleInputs = (e) =>{
          state.fetchConfig.setParam(e.target.options.selectedIndex)
     }

     return (
          <section className="chart-picker-section">
               <FormRow label="Selecione a informação desejada">
                    <select value={state.fetchConfig.get['param'].value} onChange={handleInputs}>
                         { MEASUREMENTS_DATA.map((_,i)=>(
                              <option value={MEASUREMENTS_DATA[i].value} key={i} >{MEASUREMENTS_DATA[i].label}</option>))}
                    </select> 
               </FormRow>
          </section>
     )
}

export default MeasurementPicker