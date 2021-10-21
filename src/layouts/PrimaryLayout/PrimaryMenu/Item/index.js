import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom'
import { useWindowSize } from '../../../../components/utils/useWindowSize'

const MenuItem = ({ config, selected, menuState }) =>{

    const screenSize = useWindowSize()
    const history = useHistory()
    const [ isExpanded, setIsExpanded ] = useState(false)
    const { label, icon, to, childs } = config 
 
    useEffect(()=>{
        if(menuState.show === false){ setIsExpanded(false) }
    },[menuState.show]) 

    const handleClick = (to, childs) =>{
        to && history.push(to)
        if(childs?.length > 1){
            if(menuState.show === false){ menuState.setShow(true) }
            setIsExpanded(!isExpanded)
        }
        else{
            if (screenSize.width < 756) {
               menuState.setShow(false)
            }
        }
    }

    return (
    <li className={`common-menu-item ${selected ? 'selected' : ''}`} > 
    
        <span  className="common-menu-item-row" onClick={() => handleClick(to, childs)} >
            <span className="common-menu-ico"> {icon && icon}  </span>
            <span> {label} </span>
        </span>

    </li>)
}

export default MenuItem