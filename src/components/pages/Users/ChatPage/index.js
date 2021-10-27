
import './style.css'
import CommonGrid from '../../../utils/Common/CommonGrid'

import { Bar, Radar, Line } from 'react-chartjs-2';
import { MeasurementPicker, StationPicker, DatePickers, ChartTypesPickers } from './Pickers/';
import ChartState from './GeneralState'

const ChartPage = () =>{
     
     const state = ChartState()
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

      const { chartConfig } = state
     return (
          <div>
               <CommonGrid appContainer>

                    <section className="app-chart-selection-section">
                         <StationPicker state={state}/>
                         <DatePickers state={state}></DatePickers>
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

 
               </CommonGrid>
          </div>
     )
}


export default ChartPage

