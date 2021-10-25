import './style.css'

import { CommonGrid, CommonToolBar } from '../../../../utils/Common'
import React, { useEffect, useState } from 'react'
import LabelContent from '../../../../utils/LabelContent'
import LoadingComponenet from '../../../../utils/LoadingComp'
import { LoadContent } from '../methods'
import Pagination from './Pagination'

const INITIAL_STATION = {
     id:"", description:"", latitude:"", longitude:"", altitude:"", address:"", measurements:null
}
 
const StationViewPage = ({ history, location, match }) =>{

     const [ station, setStation ] = useState(INITIAL_STATION)

     const { station: entry , freeze  } = LoadContent({match, history, location, force: true})
     
     useEffect(()=>{
          if(entry) setStation(entry);
     },[entry])

     const { id, description, latitude, longitude, altitude, address, measurements } = station 

     return (
          <div className="admin-station-view-page">
 
               { freeze ? <LoadingComponenet></LoadingComponenet> :
               
                    <CommonGrid >

                         <header>
                              <h2> Sobre a Estação:</h2>
                              <LabelContent label={'Descrição'}> {description}.</LabelContent>
                              <LabelContent label={'Coordernadas'}> ( {latitude}, {longitude}, {altitude} )</LabelContent>
                              <LabelContent label={'Endereço'}> {address.label}</LabelContent>  
                         </header>

                         <CommonToolBar>
                              <button onClick={()=>history.push(`/admin/stations/${id}/upload`)}> Upload .Csv </button>
                         </CommonToolBar>

                         <Pagination measurements={measurements}></Pagination>
               
                    </CommonGrid>
               }
          </div>
     )
}

export default StationViewPage