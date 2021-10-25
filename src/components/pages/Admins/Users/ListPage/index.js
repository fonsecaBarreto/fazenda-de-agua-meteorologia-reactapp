import './style.css'
import UserItem from './Item'
import CommonPool from '../../../../utils/Common/CommonPool'
import CommonToolBar from '../../../../utils/Common/CommonToolBar' 
import CommonGrid from '../../../../utils/Common/CommonGrid'
import LoadingComp from '../../../../utils/LoadingComp' 

import { InitUsers } from '../methods/init_method'

const ListUsers = ({ history }) =>{

     const { users, isLoading } = InitUsers()

     const goToFormPage = () =>{  history.push('/admin/users/create')  }

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