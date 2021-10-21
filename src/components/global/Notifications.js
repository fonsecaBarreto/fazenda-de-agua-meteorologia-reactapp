
import React from 'react'
import NotifyDialog, { MakeFailure, MakeSuccess, MakeInfo } from '../utils/Dialog/Presentation/NotifyDialog'
import { useSelector, useDispatch} from 'react-redux'
import { setNotification } from '../../store/reducers/dialogs/actions'
import Store from '../../store'

export const Handler = {
     info:(onResult, ...messages) =>{
          Store.dispatch(setNotification(messages, 2, onResult))
     },
     success:(onResult, ...messages) =>{
          Store.dispatch(setNotification(messages, 1, onResult))
     },
     failure:(onResult, ...messages) =>{
          Store.dispatch(setNotification(messages, 0, onResult))
     }
}

const NotificationComponent = () =>{
     const dispatch = useDispatch()
     const { messages, type, onResult } = useSelector((state)=> state.dialogs.notification)
     return (
          <React.Fragment>
              {<NotifyDialog 
                    show={ messages.length > 0 } 
                    onClose={()=>dispatch(setNotification())} 
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