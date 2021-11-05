
import './style.css'
import { useEffect } from 'react';
import CommonGrid from '../../../utils/Common/CommonGrid'
import LoadingComp from '../../../utils/LoadingComp';
import { MeasurementPicker, StationPicker, DatePickers, ChartTypesPickers } from './components/Pickers';
import { LoadAddressFromUser } from './domain/methods/LoadAddressFromUser';

/* states */
import ControlsState from './domain/states/ControlsState';
import ChartState from './domain/states/ChartState';
import ChartView from './components/ChartView'

const ChartPage = ({ history }) =>{
     
     const state = ControlsState();
     const { address } = LoadAddressFromUser({ history })
     const { chartData, submit } = ChartState()
     
     useEffect(()=>{
          if(state.fetchConfig.get['station'].value) return submit(state.fetchConfig.get);
     },[state.fetchConfig.get])

     const { chartConfig } = state

     return ( !address ? <LoadingComp></LoadingComp> : 
          <div className="user-chart-page app-container">
            
               <section className="app-chart-selection-section">
                    <StationPicker state={state} address={address} />
                    <DatePickers state={state} ></DatePickers> 
               </section>

               <section className="app-chart-container">
                   <ChartView type={chartConfig.get.type} data={chartData}/> 
               </section>

               <section className="app-chart-selection-section">
                    <ChartTypesPickers state={state}/>  
                    <MeasurementPicker state={state}/> 
               </section>

            
          </div>
     )
}

export default ChartPage

