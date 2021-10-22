import './style.css'
import { useHistory } from 'react-router-dom'

export const MeasurementItem = ({measurement}) =>{


     const { id, temperature, airHumidity, rainVolume, windSpeed, windDirection, coordinates, created_at } = measurement
 
     return (
          <div className="admin-station-measurement-view">

               <span> {temperature} </span>
               <span> {airHumidity} </span>
               <span> {rainVolume} </span>
               <span> {windSpeed} </span>
               <span> {windDirection} </span>
               <span> {JSON.stringify(coordinates)} </span>
               <span> {created_at} </span>
           
          </div>
     )
}

export default MeasurementItem

             