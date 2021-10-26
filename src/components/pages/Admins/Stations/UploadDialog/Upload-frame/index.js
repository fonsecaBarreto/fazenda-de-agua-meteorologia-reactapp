import './style.css'
import DropAreaFileInput from '../../../../../utils/AppInputs/FileInputs/DropAreaFileInput'
import SingleFileInput from '../../../../../utils/AppInputs/FileInputs/SingleFileInput'
import React, { useEffect, useState } from 'react'

import SubmitArea from './Subtmit-area'
const UploadFrame = ({station_id}) =>{

     const [ freeze, setFreeze ] = useState(false)
     const [ file, setFile] = useState(null)

     return (
          <div className={`upload-frame ${freeze ? 'freeze' : ''}`}>
               <section className="upload-frame-body">
                    { !file ? 

                         <React.Fragment>
                              <SingleFileInput value={file} onFile={setFile} ></SingleFileInput>
                              <DropAreaFileInput onFile={setFile} ></DropAreaFileInput>
                          </React.Fragment> 

                    :  <SubmitArea station_id={station_id} file={file} setFile={setFile} setFreeze={setFreeze}/> }
               
               </section>
          </div>
     )
}

export default UploadFrame