import { useEffect, useState } from 'react';
import { formatDateToString } from '../filters/FormatDateToString'
import FormRow from '../../../../utils/FormRow'

import { SCALES_INTERVALS_PRESETS } from '../domain/SCALES_INTERVALS'
var today = new Date(new Date);
var MAX_DATE = formatDateToString(today);

export const DatePickers = ({state}) =>{

     const handleDateInput = (e,) =>{
          state.fetchConfig.setStartDate(e.target.value)
     }

     const handleSoftInterval = (e) =>{
          let index = e.target.options.selectedIndex;
          state.fetchConfig.setScaleInterval(index);
     }

     return (
          <section className="chart-picker-section">
              
               <FormRow label={"Defina a data Inicial"}> 
                    <input type="date" value={state.fetchConfig.get['start_date']} max={MAX_DATE} 
                         onChange={handleDateInput} ></input>
               </FormRow> 


               <FormRow label={"Defina o intervalo de tempo "}> 

                    <select value={state.fetchConfig.scale_interval} onChange={handleSoftInterval}>
                        {  SCALES_INTERVALS_PRESETS.map( (sip, i) => ( <option key={i} value={i}>{sip.labels[0]}</option>) )}
                    </select>

               </FormRow>
          </section>
     )
}

export default DatePickers