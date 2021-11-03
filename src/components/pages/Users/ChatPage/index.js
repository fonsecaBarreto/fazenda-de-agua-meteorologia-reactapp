
import './style.css'
import { useEffect } from 'react';

import CommonGrid from '../../../utils/Common/CommonGrid'
import { Bar, Radar, Line } from 'react-chartjs-2';
import { MeasurementPicker, StationPicker, DatePickers, ChartTypesPickers } from './Pickers/';

import { LoadContent } from './domain/LoadAddressFromUser'
import LoadingComp from '../../../utils/LoadingComp';
 
import ChartState from './states/ControlState'
import StationState from './states/StationState'

const ChartPage = ({ history }) =>{
     
     const state = ChartState();
     const { address } = LoadContent({ history })
     const { chartData, submit } = StationState()
     
     useEffect(()=>{
          if(state.fetchConfig.get['station'].value) return submit(state.fetchConfig.get);
     },[state.fetchConfig.get])

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
                              (chartConfig.get.type === "bars") ?
                              <Bar data={chartData} width={100} height={50}/>
                              : chartConfig.get.type == "radar" ?
                              <Radar data={chartData} width={100} height={50}/>
                              :
                              <Line data={chartData} width={100} height={50}/>
                         }
                    </section>

                    <section className="app-chart-selection-section">
                         <ChartTypesPickers state={state}/>  
                         <MeasurementPicker state={state}/> 
                    </section>
                    {JSON.stringify(state)}
                    {JSON.stringify(chartData)}
 
               </CommonGrid>
          </div>
     )
}


export default ChartPage

