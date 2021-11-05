import { formatDateToString } from '../../domain/utils/FormatDateToString'
import FormRow from '../../../../../utils/FormRow'
import { SCALES_INTERVALS_PRESETS } from '../../domain/MODELS'

var today = new Date(); today.setHours(0,0,0,0);
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
              
               <FormRow label={"Data Inicial"}> 
                    <input type="date" value={state.fetchConfig.get['start_date']} max={MAX_DATE} 
                         onChange={handleDateInput} ></input>
               </FormRow> 


               <FormRow label={"Escala"}> 
                    <select value={state.fetchConfig.scale_interval} onChange={handleSoftInterval}>
                        {  SCALES_INTERVALS_PRESETS.map( (sip, i) => ( <option key={i} value={i}>{sip.labels[0]}</option>) )}
                    </select>
               </FormRow>
          </section>
     )
}

export default DatePickers