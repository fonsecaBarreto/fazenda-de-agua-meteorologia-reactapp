import React from 'react';
import { Bar, Radar, Line } from 'react-chartjs-2';


export const ChartView = ({ data, type }) =>{
     return ( <React.Fragment>
          {
               (type === "bars") ?
               <Bar data={data} width={"100%"} height={50}/>
               :type === "radar" ?
               <Radar data={data} width={100} height={50}/>
               : 
               <Line data={data} width={100} height={50}/>
          }
     </React.Fragment>)
}

export default ChartView