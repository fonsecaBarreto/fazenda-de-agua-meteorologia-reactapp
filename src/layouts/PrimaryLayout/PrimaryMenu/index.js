import React, { useEffect, useState } from 'react'
import './style.css'
import ToggleButton from '../Common/ToggleButton'
 import MenuItem from './Item' 

 /*
import UserComponent from './UserComponent' */

const PrimaryMenu = ({ menuState, struct, currentPage }) =>{
 
   /*  const isSelected = (page) => {
        if( page?.to === currentPage ) return true
        if( page?.subs ){
            const subsToList =page.subs.map(p=>(p.to))
            if(subsToList.includes(currentPage)) return true
        }
    } */

    return (
    
        <aside className={`primary-menu ${menuState.show ? 'show' : ''}`}>
            <section className="primary-menu-header">
                <ToggleButton onClick={menuState.toToggle} desktop></ToggleButton>
            </section>

            <section>
                <ul> {              
                    struct.pages.map((p,i) => {
                        if(!p.hide) 
                        {  return ( <MenuItem config={p} key={i} menuState={menuState}> </MenuItem>);}
                    }) 
                } </ul>
            </section>
            
        {/*     <section>
                <UserComponent menuState={{ show, toggle, setShow} }></UserComponent>
            </section>  */}

        </aside>)
}

export default PrimaryMenu