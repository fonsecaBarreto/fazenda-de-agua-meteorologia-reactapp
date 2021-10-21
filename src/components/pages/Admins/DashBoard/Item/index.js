
import './style.css'
import { useHistory } from 'react-router-dom'
export const DashItem = ({icon, children, to, onClick}) =>{
     const history = useHistory();
     const submit = () =>{
          onClick && onClick()
          to && history.push(to)
     }
     return (
          <div className="dash-item" onClick={submit}>
               <span> {icon && icon}  </span>
               <span>{children}</span>
          </div>
     )
}

export default DashItem