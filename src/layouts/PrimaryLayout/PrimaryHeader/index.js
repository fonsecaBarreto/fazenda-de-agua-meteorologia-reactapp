import React from 'react'
//dependencies
import './style.css'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
//componentss
import ToggleButton from '../Common/ToggleButton'
//icones
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function PrimaryHeader ({menuState, currentPage}){

    const history = useHistory();
    
    const resolveBread = () =>{
        const {breadCrumbs} = currentPage
        return (
            <React.Fragment>
                {  breadCrumbs.map((b,i)=> ( <Link key={i} to={b.value.to}>
                        <IoIosArrowForward></IoIosArrowForward>  {b.label}
                </Link> ))}
            </React.Fragment>
        )
    } 


    const goBack = () =>{

        var path = "/"
        if(currentPage && currentPage.breadCrumbs && currentPage.breadCrumbs.length > 0 ){
            path = currentPage.breadCrumbs[currentPage.breadCrumbs.length - 2]
        }
        return history.push(path.value.to) 
    } 

    return (
        <header className="primary-header">
            <div className="primary-header-content">
              
               <section>

                    <ToggleButton onClick={menuState.toToggle}></ToggleButton>
        
                   { currentPage && 
                        <React.Fragment>
                            { currentPage.breadCrumbs.length > 1 && <button className="primary-header-back-btn desktop-only" onClick={goBack}> 
                                <IoIosArrowBack></IoIosArrowBack>
                              
                            </button>}

                            <div className="primary-header-title">
                                { currentPage.title && <span className="primary-header-title-label"> { currentPage.title } </span>} 
                              { currentPage.breadCrumbs && <span className="primary-header-title-bread-crumbs desktop-only">{resolveBread()}</span>} 
                            </div>
                        </React.Fragment>
                    } 
                </section> 
            </div>
        </header>
    )
}

export default PrimaryHeader