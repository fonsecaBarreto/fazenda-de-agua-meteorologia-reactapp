import './style.css'

import { CommonGrid } from '../../../../utils/Common'
/* import { Handler as notify } from '../../../../global/Notifications'
import { useEffect, useState } from 'react' */
import { Handler as DialogHandler } from '../../../../global/GlobalDialog'
import UploadFrame from './Upload-frame'
import { useState } from 'react'
import Specifications from './Specifications'
const StationViewPage = ({station_id}) =>{
    
     return (
          <div className="admin-measurements-dialog">
               <section>
                    <h2> Upload arquivo .CSV com medições para a estação </h2>
                    <Specifications></Specifications> 
               </section>
                <section>
                    <UploadFrame station_id={station_id}></UploadFrame> 
               </section> 
          </div>
     )
}


const openDialog = (station_id) =>  DialogHandler.show( StationViewPage, "Upload Medições", { station_id })

export default openDialog