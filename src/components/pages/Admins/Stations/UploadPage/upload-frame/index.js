import './style.css'
import DropAreaFileInput from '../../../../../utils/AppInputs/FileInputs/DropAreaFileInput'
import SingleFileInput from '../../../../../utils/AppInputs/FileInputs/SingleFileInput'
import React, { useEffect, useState } from 'react'
import { stationsService } from '../../../../../../services/stations/stations-service'
import { Handler as Notify } from '../../../../../global/Notifications'
const UploadFrame = ({station_id}) =>{
     const [ errors, setErrors ] = useState({})
     const [ file, setFile] = useState(null)
     const [ freeze, setFreeze ] = useState(false)

     const submit = () =>{
          setErrors({})
          setFreeze(true)
          stationsService.saveMeasurements(station_id, file)
          .then(()=>{
               Notify.success(null,"Medições Salvas com sucesso");
               setFile(null)
              
          })
          .catch(err=>{
               if(err.params) {
                    if(err.params['csv_entry']){
                         Notify.failure(null,err.params['csv_entry'].message)
                    }else{
                         Notify.failure(null,err.message)
                         setErrors(err.params)
                    }
               }
          })
          .finally(_=>setFreeze(false))
     }

     useEffect(()=>{
          if(file != null) return submit()
     },[file])
     return (
          <div className={`upload-frame ${freeze ? 'freeze' : ''}`}>

               <SingleFileInput value={file} onFile={setFile}></SingleFileInput>
               <DropAreaFileInput onFile={setFile}></DropAreaFileInput> 

               {
                    Object.keys(errors).length > 0 && 

                    <React.Fragment>
                         <span> Foram encontrados erros nas sequintes linhas: </span>

                         { Object.keys(errors).map(line=>{
                              return (<span> Linha: {line}: {JSON.stringify(errors[line])} </span>)
                         }) }
                    </React.Fragment>
               }
     
         
          </div>
     )
}

export default UploadFrame