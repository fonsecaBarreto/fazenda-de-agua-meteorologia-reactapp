import { useEffect, useState } from 'react';
import './style.css'



const PButton = ({index, onClick, children, selected, disabled}) =>{
     return (
          <li onClick={()=>onClick(index)} className={`${ selected ? 'selected'  :''}`} > <button disabled={disabled}> {children} </button> </li>
     )
}
const PaginationButton  = ({ page_index, page_total, onClick}) =>{

     return (
          <nav  className="pagination-buttons" >
               <ul>
                    <PButton disabled={page_index == 0} onClick={() => onClick(page_index -1)}>{" < "}</PButton>
                    { [...Array(page_total)].map((m,i)=>(
                         <PButton key={i} index={i} selected={page_index === i} onClick={onClick}> {i} </PButton>
                    ))}
                    <PButton disabled={ page_total == 0 || page_index == (page_total -1 ) } onClick={() => onClick(page_index +1)}>{" > "}</PButton>
               </ul>
          </nav>)
}

export default PaginationButton