
import React from 'react'
import NotifyDialog, { MakeFailure, MakeSuccess, MakeInfo, MakeConfirmation } from '../utils/Dialog/Presentation/NotifyDialog'
import { useSelector, useDispatch} from 'react-redux'
import { setNotification, setNotificationLoading  } from '../../store/reducers/dialogs/actions'
import Store from '../../store'

export const Handler = {
     confirm:( onResult, ...messages) =>{
          Store.dispatch(setNotification(messages, 3, onResult))
     },
     info:(onResult, ...messages) =>{
          Store.dispatch(setNotification(messages, 2, onResult))
     },
     success:(onResult, ...messages) =>{
          Store.dispatch(setNotification(messages, 1, onResult))
     },
     failure:(onResult, ...messages) =>{
          Store.dispatch(setNotification(messages, 0, onResult))
     },
     setLoading:(value) =>{
          Store.dispatch(setNotificationLoading(value))
     }, 
}

const NotificationComponent = () =>{
     const dispatch = useDispatch()
     const { messages, type, onResult, isLoading } = useSelector((state)=> state.dialogs.notification)
     return (
          <React.Fragment>
     
              {<NotifyDialog 
                    freeze={isLoading}
                    show={ messages.length > 0 } 
                    onClose={()=>dispatch(setNotification())} 
                    onResult={onResult}
                    content={
                         type === 0 ? MakeFailure(messages) :
                         type === 1 ? MakeSuccess(messages) :
                         type === 2 ? MakeInfo(messages) :
                         MakeConfirmation(messages) }
               ></NotifyDialog>} 
          </React.Fragment>
     )
}    

export default NotificationComponent