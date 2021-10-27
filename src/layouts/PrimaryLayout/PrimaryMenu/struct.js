import { AiFillDashboard} from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'
import { ImUsers } from 'react-icons/im'
import { BiStation } from 'react-icons/bi'



const MakeTR = ( label, to, icon = null, childs=[]) =>{
     return ( { icon, to, label, childs } )
}

export const AdminsMenuTree = [
     MakeTR("Painel", "/admin/dashboard", <AiFillDashboard/>),
     MakeTR("Endereços", "/admin/addresses",<MdLocationPin/>),
     MakeTR("Usuarios", "/admin/users", <ImUsers></ImUsers>),
]

export const UsersMenuTree = [
     MakeTR("Painel", "/inicio", <AiFillDashboard/>),
     MakeTR("Estações", "/estacoes",<BiStation/>)
]