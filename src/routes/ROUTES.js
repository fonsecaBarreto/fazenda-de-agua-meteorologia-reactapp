import React from 'react'
import AdminsDashBoard from '../components/pages/Admins/DashBoard'

import ListAddresses from '../components/pages/Admins/Addresses/ListPage'
import AdddressFormPage from '../components/pages/Admins/Addresses/FormPage'
import AdddressViewPage from '../components/pages/Admins/Addresses/ViewPage'

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
        { component: AdddressViewPage, path: "/addresses/view", parent: "/addresses", title: "Visualizar Endereço" },

        { component: ListAddresses, path: "/users", parent: "/dashboard", title: "Usuarios" },
        { component: ListAddresses, path: "/users/create", parent: "/users", title: "Criar Usuario "},
        { component: ListAddresses, path: "/users/update", parent: "/users", title:"Atualizar Usuario" }
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
       ...admin.routes.map((r)=>({ ...r, access:"admin_only", path:`${admin.prefix}${r.path}`, parent: r.parent ? `${admin.prefix}${r.parent}` : null })),
       ...basic.routes.map((r)=>({ ...r, access:"basic_only",path:`${basic.prefix}${r.path}`, parent: r.parent ? `${basic.prefix}${r.parent}` : null }))
    ];
}

export const routes = [ admin, basic ]
