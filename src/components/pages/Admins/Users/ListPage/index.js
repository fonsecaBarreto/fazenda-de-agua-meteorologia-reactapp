import { useEffect, useState } from 'react'
import './style.css'
import { usersService } from '../../../../../services/users/users-service'
import UserItem from './Item'
import CommonPool from '../../../../utils/Common/CommonPool'
import CommonToolBar from '../../../../utils/Common/CommonToolBar' 
import CommonGrid from '../../../../utils/Common/CommonGrid'
import LoadingComp from '../../../../utils/LoadingComp' 

const useLoadContent = () =>{
     const [ isLoading, setIsLoading ] = useState(false);
     const [ users, setUsers ] = useState([]);
     
     const loadContent = () =>{
          if(users.length > 0 ) return
          setIsLoading(true)
          usersService.list()
          .then( setUsers )
          .finally(_=>setIsLoading(false)) 
     }

     useEffect(()=>{ loadContent() }, [ users.length ]) // only when pathname changes

     return ( { users, isLoading }  )
}

const ListUsers = ({ match, history, location }) =>{

     const { users, isLoading } = useLoadContent()

     const goToFormPage = () =>{  history.push('/admin/users/form')  }

     return (
          <CommonGrid>

                <CommonToolBar>
                    <button onClick={goToFormPage}> Novo </button>
               </CommonToolBar>
               {
               isLoading === true ? <LoadingComp></LoadingComp>:
               <CommonPool>
                    { users.length > 0 && users.map((a, i)=>( <UserItem user={a} key={i}></UserItem> ))}
               </CommonPool> }

          </CommonGrid>
     )
}

export default ListUsers