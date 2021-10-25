import { useEffect, useState } from 'react'
import { addressesServices } from '../../../../../services'
import { Handler as notify } from '../../../../global/Notifications'

export const LoadContent = ({location, history, match}) =>{

     const [ freeze, setFreeze ] = useState(true)
     const [ address, setAddress ] = useState(null)

     useEffect(()=>{
     
          const { id } = match.params
          if(!id) return setFreeze(false)

          addressesServices.find(id)
          .then( address => { 
               if(!address) AddressNotFoundError(id);
               setAddress(address);
          })
          .catch(_=>{AddressNotFoundError(id)})
          .finally(_=>{ setFreeze(false) })  

     },[ location.pathname, location.search ])

     const AddressNotFoundError = (id) =>{
          notify.failure(()=> history.push("/admin/addresses"), "Não foi possível encontrar Endereço", `Id: ${id}`)
     }

     return ({ address, freeze, setFreeze })
}

export default LoadContent