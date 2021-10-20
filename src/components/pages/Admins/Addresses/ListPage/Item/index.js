import React from 'react'
import './style.css'
import LabelContent from '../../../../../utils/LabelContent'
import LocationImage from '../../../../../../assets/images/addresses/location.svg'
const AddressItem = ({address}) =>{
     if(!address) return
     const { street, region, uf, number, city, details, postalCode  } = address
     return (
          <div className="admins-address-item">
               <img alt="Image ilustrativa do endereço" src={LocationImage}></img>
               <div>
                    <LabelContent label={'Endereço'}> {street}, {number}; {region}.</LabelContent>
                    { details && <LabelContent label={'Complementos'}> {details}</LabelContent>}
                    <LabelContent label={'Cidade'}> {city}</LabelContent>
                    <LabelContent label={'Estado'}> {uf}</LabelContent>
                    <LabelContent label={'CEP'}> {postalCode}</LabelContent>
               </div>
          </div>
     )
}
export default AddressItem