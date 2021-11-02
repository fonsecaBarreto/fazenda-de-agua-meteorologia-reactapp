import { useEffect, useState } from 'react';
import { formatDateToString } from '../../../../utils/filters/FormatDateToString'
import FormRow from '../../../../utils/FormRow'

var today = new Date();
var MAX_DATE = formatDateToString(today);

const SCALES_INTERVALS_PRESETS = [
     { intervals: 24, amplitude: 60, label: "Dia"},
     { intervals: 7, amplitude: 60 * 24, label: "Semana"},
     { intervals: 15, amplitude: 60 * 24, label: "Quinzena"},
     { intervals: 15, amplitude: 60 * 48, label: "Mensal"},
]

export const DatePickers = ({state}) =>{

     const [ sipIndex, setSipIndex ] = useState(0)
 
     const handleDataInput = (e,) =>{
          state.fetchConfig.setStartDate(e.target.value)
     }

     const handleSoftInterval = (e) =>{
          let index = e.target.options.selectedIndex;
          setSipIndex(index);
     }

     useEffect(()=>{
          state.fetchConfig.setIntervals(SCALES_INTERVALS_PRESETS[sipIndex].intervals)
          state.fetchConfig.setAmplitude(SCALES_INTERVALS_PRESETS[sipIndex].amplitude) 
     },[ sipIndex ]) 

     return (
          <section className="chart-picker-section">
              
               <FormRow label={"Defina a data Inicial"}> 
                    <input type="date" value={state.fetchConfig.get['start_date']} max={MAX_DATE} 
                         onChange={handleDataInput} ></input>
               </FormRow> 


               <FormRow label={"Defina o intervalo de tempo "}> 

                    <select value={sipIndex} onChange={handleSoftInterval}>
                        {  SCALES_INTERVALS_PRESETS.map( (sip, i) => ( <option key={i} value={i}>{sip.label}</option>) )}
                    </select>

               </FormRow>
          </section>
     )
}

export default DatePickers