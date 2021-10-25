import { stationsService } from '../../../../../services'

import ConfirmationAdapter from '../../../../global/ActionConfirmationAdapter'

export const SaveStation = ({ onSuccess, onFailure, before, after }) =>{

     const execute = async (station) => {
          try {
     
               before && before()
               const returned = await stationsService.save( { ...station, address_id: station['address'].value });
               onSuccess && onSuccess(returned)

          } catch(err) {  onFailure && onFailure(err); throw err 
          } finally { after && after() }
     }

     return ConfirmationAdapter({ 
          confirm: (station) => ["Confirme a ação antes de continuar!", `Você esta prestes a ${ !station.id ? "Inserir uma nova Estação ao": "Atualizar um Estação do "} sistema`],
          succed: ()=>  ["Estação salva com sucesso!"],
     }, execute)
}

export default SaveStation



