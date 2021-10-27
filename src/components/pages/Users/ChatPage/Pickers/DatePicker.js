import { formatDateToString } from '../../../../utils/filters/FormatDateToString'
import FormRow from '../../../../utils/FormRow'
var today = new Date();
var MAX_DATE = formatDateToString(today);

export const DatePickers = ({state}) =>{

     return (
          <section className="chart-picker-section">
               <FormRow label={"Defina o intervalo de tempo "}> 
                    <input type="date" value={state.timeInterval.get['start']}  max={MAX_DATE} 
                         onChange={(e)=>state.timeInterval.setStart(e.target.value)} ></input>
               </FormRow>
               <FormRow label={"Defina o intervalo de tempo "}> 
                    <input type="date" value={state.timeInterval.get['end']} max={MAX_DATE} 
                         onChange={(e)=>state.timeInterval.setEnd(e.target.value)} ></input>
               </FormRow>
          </section>
     )
}

export default DatePickers