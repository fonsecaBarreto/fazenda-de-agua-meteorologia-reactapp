import { useState } from "react"

import { formatDateToString } from '../../../utils/filters/FormatDateToString'

let hoje = new Date();
var data_hoje_str = formatDateToString(hoje)

hoje.setDate(hoje.getDate() - 30)
var um_mes_str = formatDateToString(hoje)     


const INITIAL_FETCH_CONFIG= {
     station: { label: "", value: "" },
     param: { label: "", value: "" },
     start_date: um_mes_str,
     intervals: 1,
     amplitude: 1,
}

const INITIAL_CHART_CONFIG={
     type:"bar",
}

const ChartGeneralState = () =>{

     const [ chartConfig, setChartConfig ]= useState({...INITIAL_CHART_CONFIG})
     const [ fetchConfig, setFetchConfig ] = useState({...INITIAL_FETCH_CONFIG})

     return ({ 
     
          chartConfig: { 
               get: chartConfig, 
               setType: (type)=>setChartConfig((prev=>({...prev, type}))) ,
          },

          fetchConfig: { 
               get: fetchConfig, 
               setStation : (station) => setFetchConfig(prev=> ({ ...prev, station })) ,
               setParam : (param) => setFetchConfig(prev=> ({ ...prev, param })) ,
               setIntervals: (intervals) => setFetchConfig(prev=> ({ ...prev, intervals })) ,
               setAmplitude: (amplitude) => setFetchConfig(prev=> ({ ...prev, amplitude })) ,
               setStartDate: (start_date) => setFetchConfig(prev=>({ ...prev, start_date })),
          },
     })
}


export default ChartGeneralState