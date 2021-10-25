import { useState, useEffect } from 'react'
import queryString from 'query-string';
import { Handler as notify } from '../../../../global/Notifications'
import { addressesServices } from '../../../../../services/addresses/addresses-service'

export const LoadAddressLabelView = ({history, location }) =>{

     const [ freeze, setFreeze ] = useState(false)
     const [ address, setAddress ] = useState(null)

     const addressNotFound = (address_id) =>{
          notify.failure(()=> history.push("/admin/addresses") ,"Não foi possível encontrar Endereço", `${address_id || "É Necessario informar para qual endereço deseja criar uma estação"}`)
     }

     useEffect(()=>{

          const address_id = queryString.parse(location.search).address_id
          setFreeze(true)
          if(address_id){ 
               addressesServices.find(address_id,'labelview')
               .then( address => { 
                    if(!address) return addressNotFound(address_id)
                    setAddress(address)
               })
               .catch(_=> addressNotFound(address_id))
               .finally(_=> setFreeze(false))
          }

     },[ location.search ]) 

     return { address, freeze }
}