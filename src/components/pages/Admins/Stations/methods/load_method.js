import { useEffect, useState } from 'react'
import { stationsService } from '../../../../../services'
import { Handler as notify } from '../../../../global/Notifications'
import queryString from 'query-string';

export const LoadContent = ({location, history, match, force }) =>{

     const [ freeze, setFreeze ] = useState(true)
     const [ station, setStation ] = useState(null)

     useEffect(()=>{

          const { id } = match.params
          if(!id) return setFreeze(false)

          const p = queryString.parse(location.search).p || (force ? 0 : -1);

          stationsService.find(id, p)
          .then( station => { 
               if(!station) StationNotFoundError(id);
               setStation(station);
          })
          .catch(_=>{StationNotFoundError(id)})
          .finally(_=>{ setFreeze(false) })  

     },[ location.pathname, location.search ])

     const StationNotFoundError = (id) =>{
          notify.failure(()=> history.push("/admin/addresses"), "Não foi possível encontrar Estação", `Id: ${id}`)
     }

     return ({ station, freeze, setFreeze })
}

export default LoadContent