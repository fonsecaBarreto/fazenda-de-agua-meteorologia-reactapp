import React from 'react'
import './style.css'
import { CommonGrid, CommonPool } from '../../../utils/Common'
import Item from './Item'
import { MdLocationPin } from 'react-icons/md'
import { ImUsers, ImExit } from 'react-icons/im'
import { loginServices } from '../../../../services/login-service'
import { useSelector } from 'react-redux'
import LogoImage from '../../../../assets/images/heavy-rain.png'
import UserImage from '../../../../assets/images/user.png'
import LocationImage from '../../../../assets/images/pin.png'
import ExitImage from '../../../../assets/images/exit.png'

const AdminsDashBoard = () =>{

     const { user } = useSelector((state)=>state.global)
     return (
          <div id="admin-dash-board">
               
               <CommonGrid appContainer>

                    <section className="adb-section">

                         <header>
                              <img className="logo-image" src={LogoImage} alt="logo"/>
                              <h1> Meterelogia - Fazendas de Agua </h1>
                              <span> Bem Vindo, <b>{user?.name || ''}</b> ao setor Administrativo do projeto </span>
                         </header>
                         
                    </section>    
                    
                    <CommonPool>
                         <Item img={LocationImage} icon={<MdLocationPin/>} to="/admin/addresses"> Endereços </Item>
                         <Item img={UserImage} icon={<ImUsers/>}to="/admin/users"> Usuarios </Item>
                         <Item img={ExitImage} icon={<ImExit/>} onClick={loginServices.logout}> Sair </Item>
                    </CommonPool>
               

               </CommonGrid>
          </div>
     )
}

export default AdminsDashBoard