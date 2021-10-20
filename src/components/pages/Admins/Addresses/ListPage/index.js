import { useEffect } from 'react'
import './style.css'
import { useSelector } from 'react-redux'
import { addressesServices } from '../../../../../services/addresses/addresses-service'
import AddressItem from './Item'
import CommonPool from '../../../../utils/Common/CommonPool'

const ListAddresses = () =>{
     const { addresses } = useSelector(state => state.admins)
     useEffect(()=>{
          if(addresses.length == 0 ){
               addressesServices.list()
          }
     },[])
     return (
          <div>
               <CommonPool>
                    { addresses.map(a=>(
                         <AddressItem address={a}></AddressItem>
                    ))}
               </CommonPool>
          </div>
     )
}

export default ListAddresses