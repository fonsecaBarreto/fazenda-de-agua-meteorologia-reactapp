import { AiFillDashboard} from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'
import { ImUsers } from 'react-icons/im'
const MakeTR = ( label, to, icon = null, childs=[]) =>{
     return ( { icon, to, label, childs } )
}

export const AdminsMenuTree = [
     MakeTR("Painel", "/admin/dashboard", <AiFillDashboard/>),
     MakeTR("Endereços", "/admin/addresses",<MdLocationPin/>),
     MakeTR("Usuarios", "/admin/users", <ImUsers></ImUsers>),
]