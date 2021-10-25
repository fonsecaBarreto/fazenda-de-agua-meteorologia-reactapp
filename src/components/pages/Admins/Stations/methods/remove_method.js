import { stationsService } from '../../../../../services'
import ConfirmationAdapter from '../../../../global/ActionConfirmationAdapter'

export const RemoveStation = ({ onSuccess, onFailure, before, after }) =>{

     const execute = async (station) =>{
          try {
               before && before()
               await stationsService.remove(station); 
               onSuccess && onSuccess()
          } catch(err) { onFailure && onFailure(err); throw err
          } finally { after && after() } 
     }

     return ConfirmationAdapter({ 
          confirm: ()=> ["Tem Certeza que deseja continuar?", "Você esta prestes a Deletar uma Estação Meteorologica do sistema","Continue se tiver certeza do que esta fazendo."],
          succed: () => ["Estação Removida com sucesso!"],
     }, execute )
}

export default RemoveStation
