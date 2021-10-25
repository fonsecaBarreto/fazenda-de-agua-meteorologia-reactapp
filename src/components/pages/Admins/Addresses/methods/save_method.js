import { addressesServices } from '../../../../../services'
import { useDispatch } from 'react-redux'
import { spliceAddresses } from '../../../../../store/reducers/admins/actions'
import ConfirmationAdapter from '../../../../global/ActionConfirmationAdapter'

export const SaveAddress = ({ onSuccess, onFailure, before, after }) =>{

     const dispatch = useDispatch()
     const execute = async (address) => {
          try {
     
               before && before()
               const returned = await addressesServices.save(address);
               dispatch(spliceAddresses(returned))
               onSuccess && onSuccess(returned)

          } catch(err) {  onFailure && onFailure(err); throw err 
          } finally { after && after() }
     }

     return ConfirmationAdapter({ 
          confirm: (address) => ["Confirme a ação antes de continuar!", `Você esta prestes a ${ !address.id ? "Inserir um novo Endereço ao": "Atualizar um Endereço do "} sistema`],
          succed: ()=>  ["Endereço salvo com sucesso!"],
     }, execute)
}

export default SaveAddress



