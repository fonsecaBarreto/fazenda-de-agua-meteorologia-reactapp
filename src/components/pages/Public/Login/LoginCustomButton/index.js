import './style.css'
import LoadingImage from '../../../../../assets/images/loading.svg'
import { useState } from 'react'
const LoginCustomButton = ({children, width="100%", onClick}) =>{
     const [ loading, setLoading ] = useState(false)
     const handleOnClick = () =>{
          if(loading == true) return;
          setLoading(true);
          onClick().finally(_=>setLoading(false))
     }
     return (
          <button className="login-custom-button" style={{width: width}} onClick={handleOnClick}> 
               <span> {loading ? "Enviando...": children} </span>
               { loading && <img className="loading-spin" src={LoadingImage} alt="loading"></img>}
           </button>
     )
}


export default LoginCustomButton