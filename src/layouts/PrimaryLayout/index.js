
import React, { useEffect, useState } from 'react'
import './style.css'
import PrimaryMenu from './PrimaryMenu'
import PrimaryHeader from './PrimaryHeader'

const MenuState = () =>{
    const [ show, setShow ] = useState(true)
    const toToggle = () => { setShow(!show)  }
    return { show, setShow, toToggle}
}
const PrimaryLayout = ({ children, currentPage }) =>{
    
    const menuState = MenuState()

    return (
        <div className="primary-layout">

            <PrimaryMenu menuState={menuState} > </PrimaryMenu>

            <PrimaryHeader menuState={menuState} currentPage={currentPage} ></PrimaryHeader> 

            <main>
                {children}
            </main>

        </div>
    )
}
export default PrimaryLayout

