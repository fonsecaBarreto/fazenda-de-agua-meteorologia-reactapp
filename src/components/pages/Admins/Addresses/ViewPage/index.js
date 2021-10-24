import './style.css'
import LocationImage from '../../../../../assets/images/pin.png'
import { CommonGrid, CommonToolBar, CommonForm, CommonPool } from '../../../../utils/Common'
import { Handler as notify } from '../../../../global/Notifications'
import { useEffect, useState } from 'react'

import LabelContent from '../../../../utils/LabelContent'
import LoadingComponenet from '../../../../utils/LoadingComp'

import { addressesServices } from '../../../../../services/addresses/addresses-service'
import StationItem from './StationItem'

const AddressViewPage = ({ history, location, match }) =>{

     const [ address, setAddress ] = useState(null)

     const show_failure = () =>{
          notify.failure(()=>  history.push("/admin/addresses") , "Não foi possível encontrar Endereço")
     }

     useEffect(()=>{
          const {id} = match.params;
          if(id){
               addressesServices.find(id)
               .then( address => { 
                    if(!address) show_failure();
                    setAddress(address)
               })
               .catch(_=>{show_failure()})
          }
     },[ location.pathname ])

     
     if( !address) return <LoadingComponenet></LoadingComponenet> 
     const { id, street, region, uf, number, city, details, postalCode, stations  } = address
     return (
          <CommonGrid>

               <header className="address-view-page-header">
                    <img src={LocationImage}/>
                    <section>
                         <LabelContent label={'Endereço'}> {street}, {number}; {region}.</LabelContent>
                         { details && <LabelContent label={'Complementos'}> {details}</LabelContent>}
                         <LabelContent label={'Cidade'}> {city} - {uf}</LabelContent>
                         <LabelContent label={'CEP'}> {postalCode}</LabelContent>
                    </section>
               </header>

               <CommonToolBar>
                    <button className="" onClick={()=>history.push(`/admin/stations/form?address_id=${id}`)} > Adicionar Nova Estação </button>
               </CommonToolBar> 

               <CommonPool lg={1}>
                     { stations.map((s, i)=>( <StationItem station={s} key={i}></StationItem> ))} 
               </CommonPool>

          </CommonGrid>
     )
}

export default AddressViewPage