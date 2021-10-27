import { useEffect, useState } from 'react'
import './style.css'
import { stationsService } from '../../../../../../../services/stations/stations-service'
import { Handler as Notify } from '../../../../../../global/Notifications'
import ConflictSection from './Conflict-section'
import CsvImage from '../../../../../../../assets/images/files-formats/csv-file.png'
import UnknownFileImage from '../../../../../../../assets/images/files-formats/delete-file.png'

const SubmitArea = ({station_id, file, setFile, setFreeze }) =>{

     const [ toForce, setToForce] = useState(false)
     const [ errors, setErrors ] = useState({})

     const submit = () =>{
          setFreeze(true)
          stationsService.saveMeasurements(station_id, file, toForce ? 1 : 0)
          .then(()=>{
               Notify.success(null,"Medições Salvas com sucesso");
               setFile(null)
          })
          .catch(err=>{
               if(err.message) Notify.failure(null,err.message)
               if(err.params) {
                    if(err.params['csv_entry']){
                         Notify.failure(null,err.params['csv_entry'].message)
                    }else{
                         setErrors(err.params)
                    }
               }
          }).finally(()=>{setFreeze(false)})
   
     }

     const isCsv = () =>{
          if(file.type == "text/csv") return true
          return false
     }
     return (
          <div className="upload-frame-submit-area">
              { Object.keys(errors).length > 0 ? <ConflictSection errors={errors} setErrors={setErrors}></ConflictSection>: 
               <div className="file-selected">
                    <img src={isCsv()? CsvImage : UnknownFileImage} alt="Arquivo" />
                    <span className="file-properties"> <span> Nome do Arquivo: </span> {file.name} </span>
                    <span className="txt-muted">{ !isCsv() ? " - Tipo de Arquivo não suportado - ": ( `Formato: ${file.type}` ) }</span>
                    
                   {isCsv() &&  <div>
                         <input type="checkbox" onChange={()=>setToForce(!toForce)}   defaultChecked={toForce}/>
                         <label for="horns">Forçar Entradas em caso de duplicidade</label> 
                    </div>}
                    <section className="file-selected-action-btns">
                         { isCsv() && <button onClick={submit}> Enviar </button> } 
                         <button onClick={()=>setFile(null)}> {!isCsv() ? "Ok" : "Cancelar"} </button>
                    </section>
                                
                    
               </div>
               }
          </div>
     )

}

export default SubmitArea 

