import './style.css'
import LocationImage from '../../../../../assets/images/pin.png'
import { CommonGrid, CommonToolBar, CommonPool } from '../../../../utils/Common'
import LoadingComponenet from '../../../../utils/LoadingComp'
import StationItem from './StationItem'

import { addressesServices } from '../../../../../services'

import ViewContent from '../../../../ViewPages/ViewContent'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Handler as notify } from '../../../../global/Notifications'
 

const IsAddressAvailableFromBasicUser = ({ location, match, history }) =>{

     const { user } = useSelector(state => state.global)
     const [ freeze, setFreeze ] = useState(false)
     const [ address, setAddress ] = useState(null)

     useEffect(()=>{
          const { id: address_id } = match.params
          if(address_id) return handler(address_id) ;
     },[location.pathname, location.search])


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

const AddressViewPage = ({ history, location, match }) =>{

     const { address, freeze, user } = IsAddressAvailableFromBasicUser({ location, match, history })

     if( freeze || !address || !user ) return <LoadingComponenet></LoadingComponenet> 
     
     const { id, street, region, uf, number, city, details, postalCode, stations  } = address 

     const goToCreateNewStation = () => history.push(`/admin/stations/create?address_id=${id}`)
     return (
          <CommonGrid>

               <header className="admin-address-view-page-header">
                    <ViewContent img={LocationImage} list={[
                         {label: "Endereço", value: ` ${street} ${number} ${region}`},
                         {label: "Detalhes", value: ` ${details}`},
                         {label: "Cidade", value: ` ${city} ${uf}`},
                         {label: "CEP", value: ` ${postalCode}`}]}/>
               </header>

               { user?.role ==1 && <CommonToolBar>
                    <button className="" onClick={goToCreateNewStation} > Adicionar Nova Estação </button>
               </CommonToolBar> }

               <CommonPool lg={1}>
                     { stations.map((s, i)=>( <StationItem station={s} key={i} user={user}></StationItem> ))} 
               </CommonPool> 

          </CommonGrid>
     )
}

export default AddressViewPage