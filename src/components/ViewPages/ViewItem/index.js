import React from 'react'
import './style.css'
import ViewContent from '../ViewContent'

const ViewItem = ({list, img, children}) =>{
     return (
          <div className="app-view-item">
               <ViewContent img={ img } list={list}  >
                    {children}
               </ViewContent>
          </div>
     )
}
export default ViewItem