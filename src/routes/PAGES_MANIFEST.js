import { ROUTES } from './ROUTES'
import { CgProfile }from 'react-icons/cg'
export const ROOT_STRUCT  = {
    title: "Fazenda de Agua",
    pages: [ ]
}

export const BASIC_PAGES = [
    ROUTES.home
]

export const ADMIN_PAGES= [

    ROUTES.panel,
    {
        title: "Endereços",
        icon: <CgProfile></CgProfile>,
        pages: [ ROUTES.address_list  ]
    }
]

