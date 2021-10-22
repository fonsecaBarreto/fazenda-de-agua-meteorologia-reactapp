import './style.css'

import { CommonGrid, CommonToolBar, CommonForm, CommonPool } from '../../../../utils/Common'
import { Handler as notify } from '../../../../global/Notifications'
import { useEffect, useState } from 'react'

import LabelContent from '../../../../utils/LabelContent'
import LoadingComponenet from '../../../../utils/LoadingComp'
import MeasurementItem from './MeasurementItem'

import { stationsService } from '../../../../../services/stations/stations-service'

const StationViewPage = ({ history, location, match }) =>{

     const [ station, setStation ] = useState(null)

     const show_failure = (id) =>{
          notify.failure(()=>  history.push("/admin/addresses") , "Estação não encontrada.", !id ? "" : `Não encontramos estação para id: ${id}`)
     } 

     useEffect(()=>{
          const {id} = match.params;
          if(id){
               stationsService.find(id)
               .then( station => { 
                    if(!station) show_failure(id);
                    setStation(station)
               })
               .catch(_=>{show_failure()})
          }
     },[ location.pathname ]) 

     
     if( !station) return <LoadingComponenet></LoadingComponenet> 
     const { id, description, latitude, longitude, altitude, address, measurements  } = station

     return (
          <CommonGrid >

               <header className="station-view-page-header">
                    <LabelContent label={'Endereço'}> {description}.</LabelContent>
                    <LabelContent label={'Coordernadas'}> ( {latitude}, {longitude}, {altitude} )</LabelContent>
                    <LabelContent label={'Endereço'}> {address.label}</LabelContent>  
               </header>

               <CommonToolBar>
                    <button className="" onClick={()=>{}} > Upload via CSV </button> 
               </CommonToolBar> 


              
               <CommonPool lg={1}>
                         <MeasurementItem measurement={{
                              temperature:'Temperatura', airHumidity: "Humidade do Ar", rainVolume:"V. Chuva", windSpeed:"Vel. vento", windDirection: "Dir. vento", coordinates: "coordenadas", created_at: "Data"
                              }}></MeasurementItem>
                     { measurements.map((m, i)=>( <MeasurementItem measurement={m} key={i}></MeasurementItem> ))} 
               </CommonPool>


          </CommonGrid>
     )
}

export default StationViewPage