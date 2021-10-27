import './style.css'
import { useHistory } from 'react-router-dom'
import OptionButton, { Handler as OBHandler } from '../../../../../global/Options/presentation/OptionButton'
import { RemoveStation } from '../../../Stations/methods'
import ViewItem from '../../../../../ViewPages/ViewItem'
import StationImage from '../../../../../../assets/images/station.png'
export const StationItem = ({station, user}) =>{

     const history = useHistory();

     const { id, description, latitude, altitude, longitude, address_id } = station

     const removeStation = () => RemoveStation({
          onSuccess: () => history.push(`/admin/addresses/${address_id}?v=reload`),
     })(station)

     return (  <ViewItem img={ StationImage } list={[
                    {value: description, label: "Descrição"},
                    {value: `( ${latitude}, ${longitude}, ${altitude} )`, label: "Coordernadas"}]} >
                    <OptionButton options={
                       
                              user?.role == 1 ? 
                                   [ OBHandler.MakeOption('Abrir', () => history.push(`/admin/stations/${station.id}`) ),
                                   OBHandler.MakeOption('Editar', () => history.push(`/admin/stations/${station.id}/update`)),
                                   OBHandler.MakeOption('Deletar', removeStation)]
                              :
                                   [ OBHandler.MakeOption('Abrir', () => history.push(`/estacoes/${station.id}`))]

                    }></OptionButton>
               </ViewItem>
     )
}

export default StationItem

             