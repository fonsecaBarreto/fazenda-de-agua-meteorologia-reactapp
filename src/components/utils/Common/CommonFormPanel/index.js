import React from "react";
import './style.css'
import { SiPlatformdotsh } from 'react-icons/si'
export function CommonForm({ title, children, columns = [], freeze}){

    const classNames = [ "one","two","three","four","five","six" ]
    return (
  
        <div className={`common-form ${freeze ? 'freeze' : ''}`}>

            <section>
                { title && 
                    <React.Fragment>
                        <SiPlatformdotsh/>
                        <span className="cf-title">  {title || ""}</span>
                    </React.Fragment>
                    
                }
            </section>

            <section className="common-form-content">
                <div className="common-form-grid">
                    { React.Children.map(children, (x,i) =>(<div className={`grid-row ${classNames[columns[i]-1]}`}> {x} </div> ))}
                </div>
            </section>
        </div>
  
    )
}

export default CommonForm