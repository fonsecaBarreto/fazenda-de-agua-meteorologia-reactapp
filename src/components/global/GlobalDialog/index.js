import Dialog from "../../utils/Dialog/Dialog"
import { useSelector, useDispatch } from 'react-redux'
import { setGlobalDialog } from "../../../store/reducers/dialogs/actions"
import Store from '../../../store'

export const Handler = {
     show:( content, title, props ={} ) =>{
          Store.dispatch(setGlobalDialog(content, title, props))
     },
     close:( ) =>{
          Store.dispatch(setGlobalDialog())
     }
}

export const GlobalDialog = () =>{
     const { globalDialog } = useSelector(state=> state.dialogs )
     const { content: Content, props: ContentProps, title } = globalDialog
     const dispatch = useDispatch()
     return (
          <Dialog show={Content ? true : false} title={title} onClose={()=>dispatch(setGlobalDialog())}>
               { Content && <Content {...ContentProps} ></Content> }
          </Dialog>
     )
}


export default GlobalDialog