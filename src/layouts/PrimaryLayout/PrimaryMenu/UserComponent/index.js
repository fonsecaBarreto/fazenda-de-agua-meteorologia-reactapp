import React from 'react'
import './style.css'
 import UserImage from '../../../../assets/images/user.webp' 
import { ImExit } from 'react-icons/im'
import { loginServices } from '../../../../services/login-service'
const UserRoles = {
    0: "Cliente",
    1: "Administrador"
}
const UserComponent = ({menuState, user}) =>{
    const handleClick = () =>{
        if(menuState.show == false ){
            menuState.setShow(true)
        }
    }
    return (
        <div className="common-menu-user-component" onClick={handleClick}>
            <img src={UserImage}/> 
            { (menuState.show == true &&  user )&& 
                <React.Fragment>
                    <span> {user.name || "Nome do Usuario"} </span>
                    <span> { UserRoles[user.role] || "Visitante"} </span>
                    <button onClick={loginServices.logout}> <ImExit></ImExit>  Sair </button>
                </React.Fragment>
            }
        </div>
    )
}

export default UserComponent;