import { useEffect, useState } from 'react'
import './style.css'
import { useSelector } from 'react-redux'
import { addressesServices } from '../../../../../services/addresses/addresses-service'
import AddressItem from './Item'
import CommonPool from '../../../../utils/Common/CommonPool'
import CommonToolBar from '../../../../utils/Common/CommonToolBar'
import CommonGrid from '../../../../utils/Common/CommonGrid'
import { useHistory } from 'react-router-dom' 
import LoadingComp from '../../../../utils/LoadingComp'

const useLoadContent = () =>{

     const [ isLoading, setIsLoading ] = useState(false);
     const { addresses } = useSelector(state => state.admins)

     const loadContent = () =>{
          if(addresses.length > 0 ) return
          setIsLoading(true)
          addressesServices.list().finally(_=>setIsLoading(false)) 
     }

     useEffect(()=>{ loadContent() }, [ addresses.length ]) // only when pathname changes

     return ( { addresses, isLoading }  )
}

const ListAddresses = () =>{

     const history = useHistory()
  
     const { isLoading, addresses } = useLoadContent()

     const goTo = () =>{  history.push('/admin/addresses/form')  }

     return (
          <CommonGrid>

               <CommonToolBar>
                    <button onClick={goTo}> Novo </button>
               </CommonToolBar>

               {
                   isLoading ? <LoadingComp></LoadingComp>:
                    <CommonPool>
                         { addresses.map((a, i)=>( <AddressItem address={a} key={i}></AddressItem> ))}
                    </CommonPool>
               }

          </CommonGrid>
     )
}

export default ListAddresses