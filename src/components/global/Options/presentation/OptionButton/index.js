
import { BiDotsVertical } from 'react-icons/bi'
import './style.css'
import { Handler } from '../../index'
export * from '../../index'

export const OptionButton = ({options}) =>{

     const submmit = () =>{
          Handler.DispatchOptions(options)  
     }

     return (
          <button className="option-button" onClick={submmit}>
               <BiDotsVertical></BiDotsVertical>
          </button>
     )
}


export default OptionButton


