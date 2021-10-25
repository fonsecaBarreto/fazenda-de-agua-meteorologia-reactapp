import { addressesServices } from '../../../../../services'
import { useDispatch } from 'react-redux'
import { sliceAddresses } from '../../../../../store/reducers/admins/actions'
import ConfirmationAdapter from '../../../../global/ActionConfirmationAdapter'

export const RemoveAddress = ({ onSuccess, onFailure, before, after }) =>{

     const dispatch = useDispatch();

     const execute = async (address) =>{
          try {
               before && before()
               await addressesServices.remove(address); 
               dispatch(sliceAddresses(address.id))
               onSuccess && onSuccess()
          } catch(err) { onFailure && onFailure(err); throw err
          } finally { after && after() } 
     }

     return ConfirmationAdapter({ 
          confirm: ()=> ["Tem Certeza que deseja continuar?", "Você esta prestes a Deletar um Endereço do sistema","Continue se tiver certeza do que esta fazendo."],
          succed: () => ["Endereço Removido com sucesso!"],
     }, execute )
}

export default RemoveAddress
