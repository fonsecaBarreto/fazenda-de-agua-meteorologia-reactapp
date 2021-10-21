import './style.css'

import { CommonGrid, CommonToolBar, CommonForm, CommonPool } from '../../../../utils/Common'
import { Handler as notify } from '../../../../global/Notifications'
import { useEffect, useState } from 'react'

import LoadingComponenet from '../../../../utils/LoadingComp'

import MeasurementItem from './MeasurementItem'

const StationViewPage = ({ history, location, match }) =>{

     const [ station, setStation ] = useState(null)

  /*    const show_failure = () =>{
          notify.failure(()=>  history.push("/admin/addresses") , "Não foi possível encontrar Endereço")
     } */
/* 
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
     },[ location.pathname ]) */

     
     if( !station) return <LoadingComponenet></LoadingComponenet> 
     const { id, description, latitude, measurements  } = station
     return (
          <CommonGrid >

               <header className="station-view-page-header">
                    aqui informalçẽos da estçaãop
                    {/* <LabelContent label={'Endereço'}> {street}, {number}; {region}.</LabelContent>
                    { details && <LabelContent label={'Complementos'}> {details}</LabelContent>}
                    <LabelContent label={'Cidade'}> {city} - {uf}</LabelContent>
                    <LabelContent label={'CEP'}> {postalCode}</LabelContent> */}
               </header>

               <CommonToolBar>
                   {/*  <button className="" onClick={()=>history.push(`/admin/stations/form?address_id=${id}`)} > Adicionar Nova Medição </button> */}
               </CommonToolBar> 

               <CommonPool lg={1}>
                     { measurements.map((m, i)=>( <MeasurementItem measurement={m} key={i}></MeasurementItem> ))} 
               </CommonPool>


          </CommonGrid>
     )
}

export default StationViewPage