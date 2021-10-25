import './style.css'
import { RiBaseStationFill } from 'react-icons/ri'
import LabelContent from '../../../../../utils/LabelContent'
import { useHistory } from 'react-router-dom'
import OptionButton, { Handler as OBHandler } from '../../../../../global/Options/presentation/OptionButton'
import { RemoveStation } from '../../../Stations/methods'

export const StationItem = ({station}) =>{

     const history = useHistory();

     const { id, description, latitude, altitude, longitude, address_id } = station

     const removeStation = () => RemoveStation({
          onSuccess: () => history.push(`/admin/addresses/${address_id}?v=reload`),
     })(station)

     return (
          <div className="admin-address-station-view">
               <section>
                    <RiBaseStationFill></RiBaseStationFill>
               </section>
               <section>
                    <span> {description} </span>
                    <LabelContent label="Coordenadas">
                         <span className="admin-address-station-view-coordinates"> 
                              <span>( la: {latitude},</span>
                              <span>lo: {longitude},</span>
                              <span>al: {altitude} )</span>
                         </span>
                    </LabelContent>
               </section>
               <section>
                    <OptionButton options={
                         [
                              OBHandler.MakeOption('Abrir', () => history.push(`/admin/stations/${station.id}`) ),
                              OBHandler.MakeOption('Editar', () => history.push(`/admin/stations/${station.id}/update`)),
                              OBHandler.MakeOption('Deletar', removeStation)
                         ]
                    }></OptionButton>
               </section>
          </div>
     )
}

export default StationItem

             