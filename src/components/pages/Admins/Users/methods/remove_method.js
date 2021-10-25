import { usersService} from '../../../../../services'
import { useDispatch } from 'react-redux'
import { sliceUsers } from '../../../../../store/reducers/admins/actions'
import ConfirmationAdapter from '../../../../global/ActionConfirmationAdapter'

export const RemoveUser = ({ onSuccess, onFailure, before, after }) =>{

     const dispatch = useDispatch()
     const execute = async (user) =>{
          try {
               before && before()
               await usersService.remove(user); 
               dispatch(sliceUsers(user.id))
               onSuccess && onSuccess()

          } catch(err) { onFailure && onFailure(err); throw err
          } finally { after && after() } 
     }

     return ConfirmationAdapter({ 
            confirm: ()=> ["Tem Certeza que deseja continuar?", "Você esta prestes a Deletar um usuário do sistema","Continue se tiver certeza do que esta fazendo."],
            succed: () => ["Usuário Removido com sucesso!"],
          }, execute )
}

export default RemoveUser
