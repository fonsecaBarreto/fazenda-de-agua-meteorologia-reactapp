import { useEffect, useState } from 'react'
import FormRow from '../../../../utils/FormRow'

export const StationPicker = ({ state, address }) => {

     const [ stations, setStations ] = useState([]);

     useEffect(()=>{
          if(!address) return 
          if(address?.stations.length > 0){
               setStations([...address.stations.map(s=>({ value: s.id, label: s.description }))])
          }
     },[address])
     
     useEffect(()=>{
          if(!stations || stations.length === 0 ) return
          state.fetchConfig.setStation(stations[0])
     },[ stations ])

     const handleInputs = (e) =>{
          const index= e.target.options.selectedIndex

          state.fetchConfig.setStation({ 
               value: stations[index].value,  
               label: stations[index].label 
          })
     } 

     return (
          <section className="chart-picker-section">
               <FormRow label={"Defina a Estação"}>
                     <select value={state.fetchConfig.get['station'].value} onChange={handleInputs}>
                         { stations.map((m, i)=>(
                              <option value={m.value} key={i} >{m.label}</option>)
                         )}
                    </select>  
               </FormRow>
          </section>
     )
}

export default StationPicker