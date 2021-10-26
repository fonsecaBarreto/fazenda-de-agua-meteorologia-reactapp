import React from 'react'
import AdminsDashBoard from '../components/pages/Admins/DashBoard'

import ListAddresses from '../components/pages/Admins/Addresses/ListPage'
import AdddressFormPage from '../components/pages/Admins/Addresses/FormPage'
import AdddressViewPage from '../components/pages/Admins/Addresses/ViewPage'
/* Stations */
import StationFormPage from '../components/pages/Admins/Stations/FormPage'
import StationViewPage from '../components/pages/Admins/Stations/ViewPage'
/* Uses */
import ListUsers from '../components/pages/Admins/Users/ListPage'
import UsersFormPage from '../components/pages/Admins/Users/FormPage'
import { Link } from 'react-router-dom'

const InicioComponent =() =>{
     return (<div>
         Inicio Aqui
         <Link to="/outro"> Outro</Link>
     </div>)
}
 
const Outro =() =>{
    return (<div>
        Outro Aqui
        <Link to="/inicio"> Inico</Link>
    </div>)
}
export const admin = {
    prefix: "/admin",
    routes:[
        { component: AdminsDashBoard, path: "/dashboard", title: "Painel Administrativo" },
        /* ADRESSES */
        { component: ListAddresses,    path: "/addresses", parent: "/dashboard", title:"Endereços" },
        { component: AdddressFormPage, path: "/addresses/create", parent: "/addresses", title: "Criar Endereço" },
        { component: AdddressFormPage, path: "/addresses/:id/update", parent: "/addresses", title: "Atualizar Endereço" },
        { component: AdddressViewPage, path: "/addresses/:id", parent: "/addresses", title: "Visualizar Endereço" },
        /* STATIONS */
        { component: StationFormPage,   path: "/stations/create", parent: "/addresses/:id", title: "Criar Estação Meteorologia" },
        { component: StationFormPage,   path: "/stations/:id/update", parent: "/addresses/:id", title: "Atualizar Estação" },
        { component: StationViewPage,   path: "/stations/:id", parent: "/addresses/:id", title: "Visualizar Estação" },
        /* USERS */
        { component: ListUsers, path: "/users", parent: "/dashboard", title: "Usuarios" },
        { component: UsersFormPage, path: "/users/create", parent: "/users", title: " Criar Usuário "},
        { component: UsersFormPage, path: "/users/:id/update", parent: "/users", title: " Atualizar Usuário "},
        /*
        { component: ListAddresses, path: "/users/update", parent: "/users", title:"Atualizar Usuario" } */
    ]
}

export const basic = {
    prefix: "",
    routes:[    
        { component: InicioComponent, path: "/inicio", title: "Inicio" },
        { component: Outro, path: "/outro", title: "Outro" },
    ]
}

export const getRoutesList = () =>{
   return [  
       ...admin.routes.map((r)=>({ ...r, access: 1, path:`${admin.prefix}${r.path}`, parent: r.parent ? `${admin.prefix}${r.parent}` : null })),
       ...basic.routes.map((r)=>({ ...r, access: 0, path:`${basic.prefix}${r.path}`, parent: r.parent ? `${basic.prefix}${r.parent}` : null }))
    ];
}

export const routes = [ admin, basic ]
