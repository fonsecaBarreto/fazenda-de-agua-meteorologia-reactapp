import { useState } from "react"
import { useSelector } from "react-redux"
import { formatDateToString } from '../../../utils/filters/FormatDateToString'

let hoje = new Date();
var data_hoje_str= formatDateToString(hoje)

hoje.setDate(hoje.getDate() - 30)
var um_mes_str = formatDateToString(hoje)               

const INITIAL_TIME_INTERVAL={
     start: um_mes_str, 
     end: data_hoje_str
     //end como hoje e start como a 30 dias
}
const INITIAL_CHART_CONFIG={
     type:"bar"
}
const INITIAL_MEASUREMENTS_DATA= {
     param: { label: "", vale: "" },
     station: { label: "", vale: "" }
}

const ChartGeneralState = () =>{

     const [ timeInterval, setTimeInterval ] = useState({ ...INITIAL_TIME_INTERVAL})
     const [ chartConfig, setChartConfig ]= useState({...INITIAL_CHART_CONFIG})
     const [ data, setData ] = useState({...INITIAL_MEASUREMENTS_DATA})

     return ({ 
          timeInterval: { get: timeInterval, 
               setStart: (start) => setTimeInterval(prev=>({...prev, start})),
               setEnd: (end) => setTimeInterval(prev=>({...prev, end}))
          },

          chartConfig: { get: chartConfig, 
               setType: (type)=>setChartConfig((prev=>({...prev, type}))) },

          data: { 
               get: data, 
               setParam : (param) => setData(prev=>({...prev, param})),
               setStation : (station) => setData(prev=>({...prev, station})) 
          },
     })
}


export default ChartGeneralState