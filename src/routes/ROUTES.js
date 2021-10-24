import React from 'react'
import AdminsDashBoard from '../components/pages/Admins/DashBoard'

import ListAddresses from '../components/pages/Admins/Addresses/ListPage'
import AdddressFormPage from '../components/pages/Admins/Addresses/FormPage'
import AdddressViewPage from '../components/pages/Admins/Addresses/ViewPage'
/* Stations */
import StationFormPage from '../components/pages/Admins/Stations/FormPage'
import StationViewPage from '../components/pages/Admins/Stations/ViewPage'
import StationUploadPage from '../components/pages/Admins/Stations/UploadPage'
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

        { component: ListAddresses, path: "/addresses", parent: "/dashboard", title:"Endereços" },
        { component: AdddressFormPage, path: "/addresses/form", parent: "/addresses", title: "Formulário de Endereço" },
        { component: AdddressViewPage, path: "/addresses/:id", parent: "/addresses", title: "Visualizar Endereço" },

        { component: StationFormPage, path: "/stations/form", parent: "/addresses/:id", title: "Formulário de Estação" },
        { component: StationViewPage, path: "/stations/:id", parent: "/addresses/:id", title: "Visualizar Estação" },
        { component: StationUploadPage, path: "/stations/:id/upload", parent: "/stations/:id", title: "Upload para Estação" },

        { component: ListUsers, path: "/users", parent: "/dashboard", title: "Usuarios" },
        { component: UsersFormPage, path: "/users/form", parent: "/users", title: " Formulario de Usuário "},
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
