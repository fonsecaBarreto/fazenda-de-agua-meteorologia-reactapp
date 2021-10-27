import { useEffect, useState } from 'react'
import { addressesServices } from '../../../../../services'
import { Handler as notify } from '../../../../global/Notifications'
 
export const LoadContent = ({location, history, match}) =>{
     //Using by the form Page only 
     const [ freeze, setFreeze ] = useState(false)
     const [ address, setAddress ] = useState(null)

     const handler = (address_id) =>{
          setFreeze(true)
          addressesServices.find(address_id)
          .then( address => { 
               if(!address) AddressNotFoundError(address_id);
               setAddress(address);
          })
          .catch(_=>{AddressNotFoundError(address_id)})
          .finally(_=>{ setFreeze(false) })  
     }

     useEffect(()=>{ 
          const { id } = match.params
          if(id) return handler(id) 
     },[ location.pathname, location.search ])


     const AddressNotFoundError = (id) =>{
          notify.failure(()=> history.push("/admin/addresses"), "Não foi possível encontrar Endereço", `Id: ${id}`)
     }

     return ({ address, freeze, setFreeze })
}

export default LoadContent 