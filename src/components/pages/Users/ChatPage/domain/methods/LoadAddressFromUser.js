import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
/* extern */
import { Handler as notify } from '../../../../../global/Notifications'
import { addressesServices } from '../../../../../../services'

export const LoadAddressFromUser = ({ history }) =>{

     const { user } = useSelector(state => state.global)
     const [ freeze, setFreeze ] = useState(false)
     const [ address, setAddress ] = useState(null)

     useEffect(()=>{
          if(user?.role === 0 && user.address?.id)
               return handler(user.address.id);
     }, [user])

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

     const AddressNotFoundError = (id) =>{
          notify.failure(()=> history.push("/"), "Não foi possível encontrar Endereço")
     }

     return ({ address, freeze, setFreeze, user })
}

export default LoadAddressFromUser