import { addressesServices } from '../../../../../services'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAddresses } from '../../../../../store/reducers/admins/actions'

export const InitAddresses = () =>{
     
     const dispatch = useDispatch()
     const [ isLoading, setIsLoading ] = useState(false);
     const { addresses } = useSelector(state => state.admins)
     
     const loadContent = () =>{
          if(addresses.length > 0 ) return
          setIsLoading(true)
          addressesServices.list()
          .then(a=>dispatch(setAddresses(a)))
          .finally(_=>setIsLoading(false)) 
     }

     useEffect(()=>{ loadContent() }, [ addresses.length ]) 
     return ( { addresses, isLoading } )

}

export default InitAddresses