import { useState, useEffect } from 'react'
import { addressesServices } from '../../../../../services/addresses/addresses-service'

export const LoadAddressesLabelView = () =>{

     const [ addresses, setAddresses ] = useState([])

     useEffect(()=>{
          if(addresses.length === 0)
               addressesServices.list("labelview").then(setAddresses);
     },[addresses.length])
     
     return { addresses }
}