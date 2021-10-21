import React from "react"
import './style.css'

export const CommonGrid = ({ children, appContainer }) =>{
     return (
          <div className={`common-layout ${appContainer? 'app-container': ''}`}>
               { children }
          </div>
     )
}

export default CommonGrid