import React from 'react'
import './style.css'
const LabelContent = ({label, children}) =>{
     return (
          <div className="app-label-content">
               <span>{label}:</span> {children}
          </div>
     )
}

export default LabelContent