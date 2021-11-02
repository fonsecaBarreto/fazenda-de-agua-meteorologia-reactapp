
import './style.css'
import CommonGrid from '../../../utils/Common/CommonGrid'
import { Bar, Radar, Line } from 'react-chartjs-2';
import { MeasurementPicker, StationPicker, DatePickers, ChartTypesPickers } from './Pickers/';
import ChartState from './GeneralState'

import { LoadContent } from './methods/LoadContent'
import LoadingComp from '../../../utils/LoadingComp';
 
import { stationsService } from '../../../../services/'
import { useEffect } from 'react';

const ChartPage = ({history}) =>{
     
     const { address } = LoadContent({history})
     const state = ChartState();

     const data = canvas => {

          return {
               labels: ["Dia 01", "Dia 02", "Dia 03", "Dia 04", "Dia 05"],
               datasets: [{
                    label: "[Decrição aqui ] ",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                         'rgba(22, 99, 256, 0.8)',
                    ],
                    borderWidth: 1
               }]
          };
     }
     
     const submit = async () =>{
          const { station, time_interval } = state.data.get
          console.log("about to load")
    
          const resultado = await stationsService.findWithTimeInterval(station.value, time_interval) 
          console.log(resultado)
     }

/*      useEffect(()=>{
          if(state.data.get['station'].value) return submit();
     },[state.data.get['time_interval'], state.data.get['station']]) */

     const { chartConfig } = state

     return ( !address ? <LoadingComp></LoadingComp> : 
          <div>
               <CommonGrid appContainer>

                    <section className="app-chart-selection-section">
                         <StationPicker state={state} address={address} />
                         <DatePickers state={state} ></DatePickers> 
                    </section>

                    <section className="app-chat-container">
                         {
                              (chartConfig.get.type == "bars") ?
                              <Bar data={data} width={100} height={50}/>
                              : chartConfig.get.type == "radar" ?
                              <Radar data={data} width={100} height={50}/>
                              :
                              <Line data={data} width={100} height={50}/>
                         }
                    </section>

                    <section className="app-chart-selection-section">
                         <ChartTypesPickers state={state}/>  
                         <MeasurementPicker state={state}/> 
                    </section>

                    {JSON.stringify(state.fetchConfig)}
 
               </CommonGrid>
          </div>
     )
}


export default ChartPage

