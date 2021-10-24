import React from 'react'
import './style.css'
import LabelContent from '../../../../../utils/LabelContent'
import { useHistory } from 'react-router-dom'
import OptionButton, { Handler as OBHandler }  from '../../../../../global/Options/presentation/OptionButton'
import UserImage from '../../../../../../assets/images/user.png'
import ShieldImage from '../../../../../../assets/images/shield.png'

const UserRole = {
     0: "basic",
     1: "admin"
}

const USER_FORM_ROUTE = (id) => `/admin/users/form?id=${id}`;

const UserItem = ({user}) =>{
     const history = useHistory();
     const { id, name, username, role } = user
     return (
          <div className="admins-users-item">
              <img alt="ilustração para Usuario" src={ role === 1 ? ShieldImage : UserImage}></img> 

               <section>
                    <LabelContent label={'Nome'}> {name}.</LabelContent>
                    <LabelContent label={'Nome de Usuario'}> {username}</LabelContent>
                
               </section>

               <section>
                    <OptionButton options={
                         [
                              OBHandler.MakeOption('Editar', () =>history.push(USER_FORM_ROUTE(id))),
                         ]}
                    ></OptionButton>
               </section>
          </div>
     )
}
export default UserItem