import React from 'react'
import './style.css'
import LabelContent from '../../../../../utils/LabelContent'
import LocationImage from '../../../../../../assets/images/pin.png'
import { useHistory } from 'react-router-dom'
import OptionButton, { Handler as OBHandler }  from '../../../../../global/Options/presentation/OptionButton'

import { RemoveAddress } from '../../methods'

const AddressItem = ({address}) =>{
     const history = useHistory();
     const { id, street, region, uf, number, city, details, postalCode  } = address

     const removeAddress = RemoveAddress({}) 
     
     return (
          <div className="admins-address-item">
               <img alt="ilustrativa do endereço" src={LocationImage}></img>
               <section>
                    <LabelContent label={'Endereço'}> {street}, {number}; {region}.</LabelContent>
                    { details && <LabelContent label={'Complementos'}> {details}</LabelContent>}
                    <LabelContent label={'Cidade'}> {city} - {uf}</LabelContent>
                    <LabelContent label={'CEP'}> {postalCode}</LabelContent>
               </section>
               <section>

                    <OptionButton options={
                         [
                              OBHandler.MakeOption('Abrir', () =>history.push(`/admin/addresses/${id}`)),
                              OBHandler.MakeOption('Editar', () =>history.push(`/admin/addresses/${id}/update`)),
                              OBHandler.MakeOption('Deletar', () =>removeAddress(address)),
                         ]}
                    ></OptionButton>

               </section>
          </div>
     )
}
export default AddressItem