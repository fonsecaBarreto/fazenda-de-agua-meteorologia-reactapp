import React from 'react'
import './style.css'

export const CommonToolBar = ({children}) =>{
     return (
          <div className="common-tool-bar">
               {children}
          </div>
     )
}

export default CommonToolBar