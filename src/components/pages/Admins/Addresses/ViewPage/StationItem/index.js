import './style.css'
import { RiBaseStationFill } from 'react-icons/ri'
import LabelContent from '../../../../../utils/LabelContent'
import { useHistory } from 'react-router-dom'
import OptionButton, { Handler as OBHandler } from '../../../../../global/Options/presentation/OptionButton'

export const StationItem = ({station}) =>{

     const history = useHistory();

     const { id, description, latitude, altitude, longitude } = station

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
                              OBHandler.MakeOption('Abrir', () => console.log("Salnado") ),
                              OBHandler.MakeOption('Editar', () => history.push(`/admin/stations/form?id=${station.id}`))
                         ]
                    }></OptionButton>
               </section>
          </div>
     )
}

export default StationItem

             