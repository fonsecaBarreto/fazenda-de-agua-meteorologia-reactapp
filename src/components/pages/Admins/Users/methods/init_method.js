import { usersService} from '../../../../../services'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUsers } from '../../../../../store/reducers/admins/actions'

export const InitUsers = () =>{
     
     const dispatch = useDispatch()
     const [ isLoading, setIsLoading ] = useState(false);
     const { users } = useSelector(state => state.admins)
     
     const loadContent = () =>{
          console.log(users.length)
          if(users.length > 0 ) return
          setIsLoading(true)
          usersService.list()
          .then(u=>dispatch(setUsers(u)))
          .finally(_=>setIsLoading(false)) 
     }

     useEffect(()=>{ loadContent() }, [ users.length ]) // only when pathname changes

     return ( { users, isLoading } )

}

export default InitUsers