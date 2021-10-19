import React from 'react'
import { AiFillDashboard, AiOutlineUnorderedList } from 'react-icons/ai'
import { HiOutlineLocationMarker }from 'react-icons/hi'

import { FaTruck } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { CgProfile }from 'react-icons/cg'


import AdminsDashBoard from '../components/pages/AdminsDashBoard'
import ListAddresses from '../components/pages/Addresses/Lists'

const componenetTest =() =>{
     return (<div>
         Component Teste
     </div>)
 }
 
 const InicioComponent =() =>{
     return (<div>
         Inicio
     </div>)
 }
 

export const ROUTES = {

     home: {
         title: "Inicio", icon: <AiFillHome></AiFillHome>,
         componenet: InicioComponent, path: "/inicio",
     },
 
     /*  */
 
     panel: {
         title: "Painel Administrativo", icon: <AiFillDashboard></AiFillDashboard>,
         componenet: AdminsDashBoard, path: "/admin/panel",
     },
     
     address_list: {
         title: "Endereços Cadastrados", icon: <HiOutlineLocationMarker></HiOutlineLocationMarker>,
         componenet: ListAddresses, path: "/admin/addresses"
     }
 }