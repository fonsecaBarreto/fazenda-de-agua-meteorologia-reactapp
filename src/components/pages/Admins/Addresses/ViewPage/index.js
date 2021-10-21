import './style.css'
import { CommonGrid, CommonToolBar, CommonForm, CommonPool } from '../../../../utils/Common'
import { StateAdapter, InputAdapter } from '../../../../utils/Adapters'
import { addressesServices } from '../../../../../services/addresses/addresses-service'
import { UFS } from '../UFS.json'
import { Handler as notify } from '../../../../global/Notifications'
import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import queryString from 'query-string';
import LabelContent from '../../../../utils/LabelContent'
import LoadingComponenet from '../../../../utils/LoadingComp'


const CreatePage = () =>{

     const history = useHistory()
     const location = useLocation()
     const [ address, setAddress ] = useState(null)


     const show_failure = (id) =>{
          notify.failure(()=>{
               return history.push("/admin/addresses")
          }, "Não foi possível encontrar Endereço", `Id: ${id}`)
     }

     useEffect(()=>{

          const id = queryString.parse(location.search).id
          if(id){
               addressesServices.find(id)
               .then( address => { 
                    if(!address) show_failure(id);
                    setAddress(address)
               })
               .catch(_=>{show_failure(id)})
          }

     },[ location, location.search ])

     
     if( !address) return <LoadingComponenet></LoadingComponenet> 
     const { id, street, region, uf, number, city, details, postalCode  } = address
     return (
          <CommonGrid >

               <CommonToolBar>
                    <button className="" > Nova Estação </button>
                    <button className="" onClick={()=>history.push(`/admin/addresses/form?id=${id}`)} > Editar </button>
               </CommonToolBar> 

               <div>
                    <LabelContent label={'Endereço'}> {street}, {number}; {region}.</LabelContent>
                    { details && <LabelContent label={'Complementos'}> {details}</LabelContent>}
                    <LabelContent label={'Cidade'}> {city} - {uf}</LabelContent>
                    <LabelContent label={'CEP'}> {postalCode}</LabelContent>
               </div>

               <CommonPool>
                    Aqui tera todas as estações moro
                   {/*  { addresses.map((a, i)=>( <AddressItem address={a} key={i}></AddressItem> ))} */}
               </CommonPool>

      
      
     
          </CommonGrid>
     )
}

export default CreatePage