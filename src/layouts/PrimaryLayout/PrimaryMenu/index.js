import React, { useEffect, useState } from 'react'
import './style.css'
import ToggleButton from '../Common/ToggleButton'
import MenuItem from './Item' 
import UserComponent from './UserComponent' 
import { useSelector } from 'react-redux'
import { AdminsMenuTree }   from './struct'

const PrimaryMenu = ({ menuState, currentPage }) =>{
    
    const { user } = useSelector((state)=> state.global)
    const [ tree, setTree ] = useState([])

    useEffect(()=>{
        if(!user) return
        if(user.role === 1) setTree(AdminsMenuTree);
    },[user])

    return (
    
        <aside className={`primary-menu ${menuState.show ? 'show' : ''}`}>
            <section className="primary-menu-header">
                <ToggleButton onClick={menuState.toToggle} desktop></ToggleButton>
            </section>

            <section>
                <ul> {      
                    tree.map((p,i) => {
                        return ( <MenuItem config={p} key={i} menuState={menuState}> </MenuItem>);
                    }) 
                } </ul>
            </section>
            
            <section>
                <UserComponent menuState={menuState} user={user}></UserComponent>
            </section> 

        </aside>)
}

export default PrimaryMenu