import './style.css'

import { CommonGrid, CommonToolBar, CommonForm, CommonPool } from '../../../../utils/Common'
import { Handler as notify } from '../../../../global/Notifications'
import React, { useEffect, useState } from 'react'
import LabelContent from '../../../../utils/LabelContent'
import LoadingComponenet from '../../../../utils/LoadingComp'
import { stationsService } from '../../../../../services/stations/stations-service'

import Pagination from './Pagination'
import queryString from 'query-string';


const INITIAL_STATION = {
     id:"", description:"", latitude:"", longitude:"", altitude:"", address:"", measurements:null
}

const useLoadContent = ({match, history, location}) =>{
     const [ loading, setLoading ] = useState(false);
     const [ station, setStation ] = useState({ ...INITIAL_STATION });
     
     const loadContent = () =>{
          const p = queryString.parse(location.search).p;
          setLoading(true)
           stationsService.find(match.params.id, p)
          .then( station => { 
               if(!station) throw new Error("Não encontrado.")
               setStation(station)
          })
          .catch(_=>{ notify.failure(()=>history.push("/admin/addresses") , "Estação nao encontrada ") }) 
          .finally(_=>setLoading(false)) 
     }
     useEffect(()=>{ loadContent() },[ location.pathname, location.search ]) // only when pathname changes

     return ( { station, loading }  )
}


const StationViewPage = ({ history, location, match }) =>{

     const { station, loading } = useLoadContent({match, history, location});

     const { id, description, latitude, longitude, altitude, address, measurements } = station 

     return (
          <div className="admin-station-view-page">
 
               { loading ? <LoadingComponenet></LoadingComponenet> :
               
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

                         <Pagination measurements={measurements}></Pagination>
               
                    </CommonGrid>
              }
          </div>
     )
}

export default StationViewPage