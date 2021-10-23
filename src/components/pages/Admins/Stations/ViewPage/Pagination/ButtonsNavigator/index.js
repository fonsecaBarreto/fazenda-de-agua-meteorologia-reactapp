import { useEffect, useState } from 'react';
import './style.css'

const PaginationButton  = ({ page_index, page_total, onClick}) =>{

     return (
          <nav  className="pagination-buttons" >
               <ul>
                    { [...Array(page_total)].map((m,i)=>(
                         <li onClick={()=>onClick(i)} key={i} className={`${page_index === i ? 'selected'  :''}`} > <button> {i+1} </button> </li>
                    ))}
               </ul>
          </nav>)
}

export default PaginationButton