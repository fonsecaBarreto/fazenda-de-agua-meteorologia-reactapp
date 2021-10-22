import './style.css'

import { CommonGrid, CommonToolBar, CommonForm, CommonPool } from '../../../../utils/Common'
import { Handler as notify } from '../../../../global/Notifications'
import { useEffect, useState } from 'react'
import LabelContent from '../../../../utils/LabelContent'
import LoadingComponenet from '../../../../utils/LoadingComp'
import MeasurementItem from './MeasurementItem'
import { stationsService } from '../../../../../services/stations/stations-service'
import Table from './MeasurementsTable'
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
          <div className="admin-station-view-page">


               <CommonGrid >
                    <header>
                         <div>
                              <h2> Sobre a Estação:</h2>
                              <LabelContent label={'Descrição'}> {description}.</LabelContent>
                              <LabelContent label={'Coordernadas'}> ( {latitude}, {longitude}, {altitude} )</LabelContent>
                              <LabelContent label={'Endereço'}> {address.label}</LabelContent>  
                         </div>
                    </header>

                    <CommonToolBar>
                         <button onClick={()=>history.push(`/admin/stations/${id}/upload`)}> Upload .Csv </button>
                    </CommonToolBar>

                    <Table measurements={measurements}/>
        
               </CommonGrid>
          </div>
     )
}

export default StationViewPage