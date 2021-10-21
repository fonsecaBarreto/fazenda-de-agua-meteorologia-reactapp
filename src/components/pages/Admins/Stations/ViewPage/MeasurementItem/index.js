import './style.css'
import { useHistory } from 'react-router-dom'

export const MeasurementItem = ({measurement}) =>{

     const history = useHistory();

     const { } = measurement

     return (
          <div className="admin-station-measurement-view">

               Medições aqui
             {/*   <section>
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
               </section> */}
          </div>
     )
}

export default MeasurementItem

             