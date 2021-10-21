import React from 'react'
import './style.css'
import LabelContent from '../../../../../utils/LabelContent'
import LocationImage from '../../../../../../assets/images/addresses/location.svg'
import { useHistory } from 'react-router-dom'
const AddressItem = ({address}) =>{
     const history = useHistory();
     const { id, street, region, uf, number, city, details, postalCode  } = address
     return (
          <div className="admins-address-item">
               <img alt="ilustrativa do endereço" src={LocationImage}></img>
               <div>
                    <LabelContent label={'Endereço'}> {street}, {number}; {region}.</LabelContent>
                    { details && <LabelContent label={'Complementos'}> {details}</LabelContent>}
                    <LabelContent label={'Cidade'}> {city} - {uf}</LabelContent>
                    <LabelContent label={'CEP'}> {postalCode}</LabelContent>
               </div>
               <div>
                    <button onClick={()=>history.push(`/admin/addresses/form?id=${id}`)}> Editar </button>
                    <button onClick={()=>history.push(`/admin/addresses/view?id=${id}`)}> Visualizar Estações </button>
               </div>
          </div>
     )
}
export default AddressItem