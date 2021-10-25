import { usersService} from '../../../../../services'
import { useDispatch } from 'react-redux'
import { spliceUsers } from '../../../../../store/reducers/admins/actions'
import ConfirmationAdapter from '../../../../global/ActionConfirmationAdapter'

export const SaveUser = ({ onSuccess, onFailure, before, after }) =>{

     const dispatch = useDispatch()
     const execute = async (user) => {
          try {
               
               before && before()
               const { address, role,  ...rest } = user
               const returned = await usersService.save({ ...rest, address_id: address.value, role:role.value });
               dispatch(spliceUsers(returned))
               onSuccess && onSuccess(returned)

          } catch(err) {  onFailure && onFailure(err); throw err 
          } finally { after && after() }
     }

     return ConfirmationAdapter({ 
          confirm: (user) => ["Confirme a ação antes de continuar!", `Você esta prestes a ${ !user.id ? "Inserir um novo usuário ao": "Atualizar um usuário do "} sistema`],
          succed: (user)=>  ["Usuário salvo com sucesso!"],
        }, execute)
}

export default SaveUser



