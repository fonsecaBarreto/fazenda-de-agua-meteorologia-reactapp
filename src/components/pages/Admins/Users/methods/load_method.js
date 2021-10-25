import { useEffect, useState } from 'react'
import { usersService } from '../../../../../services'
import { Handler as notify } from '../../../../global/Notifications'

const USERS_ROLES_LIST = [ {value: "0", label: "Básico"}, { value:"1", label: "Administrador" } ];

export const LoadContent = ({location, history, match}) =>{

     const [ freeze, setFreeze ] = useState(true)
     const [ user, setUser ] = useState(null)

     useEffect(()=>{
     
          const { id } = match.params
          if(!id) return setFreeze(false)

          usersService.find(id)
          .then( user => { 

               if(!user) UserNotFoundError(id);
               const role = USERS_ROLES_LIST[user.role]
               const address = user.address ||  { value: "", label: "" }
               setUser({ ...user, role, address });
          })
          .catch(_=>{UserNotFoundError(id)})
          .finally(_=>{ setFreeze(false) })  

     },[ location.pathname, location.search ])

     const UserNotFoundError = (id) =>{
          notify.failure(()=> history.push("/admin/users"), "Não foi possível encontrar Usuário", `Id: ${id}`)
     }

     return ({ user, freeze, setFreeze })
}

export default LoadContent 