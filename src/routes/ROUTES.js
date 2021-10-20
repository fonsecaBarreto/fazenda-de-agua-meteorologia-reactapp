import React from 'react'
import AdminsDashBoard from '../components/pages/Admins/DashBoard'
import ListAddresses from '../components/pages/Admins/Addresses/ListPage'
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
        { componenet: AdminsDashBoard, path: "/dashboard", title: "Painel Administrativo" },

        { componenet: ListAddresses, path: "/addresses", parent: "/dashboard", title:"Endereços" },
        { componenet: ListAddresses, path: "/addresses/create", parent: "/addresses", title: "Criar Endereços" },
        { componenet: ListAddresses, path: "/addresses/update", parent: "/addresses", title: "Atualizar Endereço" },

        { componenet: ListAddresses, path: "/users", parent: "/dashboard", title: "Usuarios" },
        { componenet: ListAddresses, path: "/users/create", parent: "/users", title: "Criar Usuario "},
        { componenet: ListAddresses, path: "/users/update", parent: "/users", title:"Atualizar Usuario" }
    ]
}

export const basic = {
    prefix: "",
    routes:[    
        { componenet: InicioComponent, path: "/inicio", title: "Inicio" },
        { componenet: Outro, path: "/outro", title: "Outro" },
    ]
}

export const getRoutesList = () =>{
   return [  
       ...admin.routes.map((r)=>({ ...r, access:"admin_only", path:`${admin.prefix}${r.path}`, parent: r.parent ? `${admin.prefix}${r.parent}` : null })),
       ...basic.routes.map((r)=>({ ...r, access:"basic_only",path:`${basic.prefix}${r.path}`, parent: r.parent ? `${basic.prefix}${r.parent}` : null }))
    ];
}

export const routes = [ admin, basic ]
