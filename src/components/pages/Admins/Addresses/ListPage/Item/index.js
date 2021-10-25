import React from 'react'
import './style.css'
import LabelContent from '../../../../../utils/LabelContent'
import LocationImage from '../../../../../../assets/images/pin.png'
import { useHistory } from 'react-router-dom'
import OptionButton, { Handler as OBHandler }  from '../../../../../global/Options/presentation/OptionButton'
import { RemoveAddress } from '../../methods'

import ViewItem from '../../../../../ViewPages/ViewItem'

const AddressItem = ({address}) =>{
     const history = useHistory();
     const { id, street, region, uf, number, city, details, postalCode  } = address

     const removeAddress = RemoveAddress({}) 
     
     return (
          <ViewItem img={LocationImage} list={[
               {label: "Endereço", value: ` ${street} ${number} ${region}`},
               {label: "Detalhes", value: ` ${details}`},
               {label: "Cidade", value: ` ${city} ${uf}`},
               {label: "CEP", value: ` ${postalCode}`}]}>
                 <OptionButton options={
                    [
                         OBHandler.MakeOption('Abrir', () =>history.push(`/admin/addresses/${id}`)),
                         OBHandler.MakeOption('Editar', () =>history.push(`/admin/addresses/${id}/update`)),
                         OBHandler.MakeOption('Deletar', () =>removeAddress(address)),
                    ]}>
               </OptionButton>
          </ViewItem>
     )
}
export default AddressItem