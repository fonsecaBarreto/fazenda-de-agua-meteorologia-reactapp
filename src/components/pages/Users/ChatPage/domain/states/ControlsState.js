import { useState } from "react"
import { formatDateToString } from '../utils/FormatDateToString'

let hoje = new Date();
hoje.setDate(hoje.getDate() - 30)
var um_mes_str = formatDateToString(hoje)     

const INITIAL_FETCH_CONFIG= {
     station: { label: "", value: "" },
     start_date: um_mes_str,
     scale_interval: 0,
     param: 0
}

const INITIAL_CHART_CONFIG={
     type:"bars",
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
               setScaleInterval: (scale_interval) => setFetchConfig(prev=> ({ ...prev, scale_interval })) ,
               setStartDate: (start_date) => setFetchConfig(prev=>({ ...prev, start_date })),
          },

     })
}


export default ChartGeneralState