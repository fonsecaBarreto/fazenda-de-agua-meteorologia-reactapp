
import React from 'react'
import NotifyDialog, { MakeFailure, MakeSuccess, MakeInfo  } from '../utils/Dialog/Presentation/NotifyDialog'
import { useSelector, useDispatch} from 'react-redux'
import { setDialog } from '../../store/reducers/dialogs/actions'
import Store from '../../store'

export const Handler = {
     info:(onResult, ...messages) =>{
          Store.dispatch(setDialog(messages, 2, onResult))
     },
     success:(onResult, ...messages) =>{
          Store.dispatch(setDialog(messages, 1, onResult))
     },
     failure:(onResult, ...messages) =>{
          Store.dispatch(setDialog(messages, 0, onResult))
     }
}

const NotificationComponent = () =>{
     const dispatch = useDispatch()
     const { messages, type, onResult } = useSelector((state)=> state.dialogs)
     return (
          <React.Fragment>
              {<NotifyDialog 
                    show={ messages.length > 0 } 
                    onClose={()=>dispatch(setDialog())} 
                    onResult={onResult}
                    content={
                         type === 0 ? MakeFailure(messages) :
                         type === 1 ? MakeSuccess(messages) :
                         MakeInfo(messages) }
               ></NotifyDialog>} 
          </React.Fragment>
     )
}    

export default NotificationComponent