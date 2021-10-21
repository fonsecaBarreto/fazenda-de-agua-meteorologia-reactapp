import React from 'react'
import { CommonGrid, CommonPool } from '../../../utils/Common'
import Item from './Item'
import { MdLocationPin } from 'react-icons/md'
import { ImUsers } from 'react-icons/im'


const AdminsDashBoard = () =>{
     return (
          <CommonGrid appContainer>
               
               <CommonPool>
                    <Item icon={<MdLocationPin/>} to="/admin/addresses"> Endereços </Item>
                    <Item icon={<ImUsers/>}to="/admin/users"> Usuarios </Item>
               </CommonPool>
          

          </CommonGrid>
     )
}

export default AdminsDashBoard