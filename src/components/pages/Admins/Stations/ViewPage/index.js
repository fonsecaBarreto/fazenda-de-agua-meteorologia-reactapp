import './style.css'

import { CommonGrid, CommonToolBar } from '../../../../utils/Common'
import React, { useEffect, useState } from 'react'
import LoadingComponenet from '../../../../utils/LoadingComp'
import { LoadContent } from '../methods'
import Pagination from './Pagination'

import ViewContent from '../../../../ViewPages/ViewContent'
import StationImage from '../../../../../assets/images/station.png'

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
                     
                         <header className="admin-station-view-page-header">
                              <ViewContent img={ StationImage } list={[
                              {value: description, label: "Descrição"},
                              {value: `( ${latitude}, ${longitude}, ${altitude} )`, label: "Coordernadas"},
                              {value: address.label, label: "Endereço"}]} />
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