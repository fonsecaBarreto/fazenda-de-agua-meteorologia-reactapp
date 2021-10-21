
import './style.css'
import { useHistory } from 'react-router-dom'
export const DashItem = ({icon, children, to}) =>{

     const history = useHistory();
     return (
          <div className="dash-item" onClick={()=>history.push(to)}>
               <span> {icon && icon} {children} </span>
          </div>
     )
}

export default DashItem