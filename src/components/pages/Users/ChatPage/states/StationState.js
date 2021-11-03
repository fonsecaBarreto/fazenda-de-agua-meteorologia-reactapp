import { useEffect, useState } from "react"
import { stationsService } from '../../../../../services/stations/stations-service'
import { SCALES_INTERVALS_PRESETS, MEASUREMENTS_DATA } from "../domain/SCALES_INTERVALS";
import { getDateHourToString, getMonthToString, getWeekDayToString, getDateToString } from '../filters/FormatDateToString'

const INITIAL_DATASET_STYLE = {
     backgroundColor: [  'rgba(22, 99, 256, 0.8)',  ],
     borderWidth: 4
}

const INITIAL_CHART_DATA= {

     labels: [],
     datasets: [{
          label: "",
          data: [],
          ...INITIAL_DATASET_STYLE
     }]
}

const StationState = () =>{

     const [ chartData, setChartData ] = useState({...INITIAL_CHART_DATA})

     const submit = async (config) =>{
          const { station, start_date, scale_interval, param } = config
          const ic_preset = SCALES_INTERVALS_PRESETS[scale_interval]
          const resultado = await stationsService.findStationMetrics(station.value, { start_date, intervals:ic_preset.intervals, amplitude:ic_preset.amplitude } ) ;
          handleEntry(resultado, param, ic_preset )
     }

     const handleEntry = (station, param, preset) => {

          const { measurements } = station
          const { intervals, data: returnedData } = measurements ;

          var labels = MakeLabels(intervals, preset, returnedData)
          var dataSet= MakeDataSet(returnedData, param, preset);
       
          setChartData((prev)=>({ ...prev, 
               labels: labels,
               datasets: [dataSet]
           
          }))  
     }

     const MakeLabels = (intervals, preset, data) =>{

          var data_method;
          switch(preset.key){
               case "WEEK_DAYS":
                    data_method = getWeekDayToString;
               break; 
               case "DAY_HOURS":
                    data_method = getDateHourToString;
               break;
               case "YEAR_MONTHS":
                    data_method = getMonthToString;
               break;
               default: 
                    data_method= getDateToString;
               break;
          }

          return ( [...new Array(intervals)].map((j,i)=>{
               return `${ 
          
                    data_method(data[i].start_limit)
                }`
          }) )
     }

     const MakeDataSet = (measurements_data, param_index, preset) =>{

          const param = MEASUREMENTS_DATA[param_index]
          let data = measurements_data.map(m=>(m[param.key]))
        
          const dataset = {
               ...INITIAL_DATASET_STYLE,
               label: `${param.label} ${param.unidade || ''}`,
               data,
          } ;

          return dataset
     }

     return ({ 
          chartData,
          submit
     })
}


export default StationState