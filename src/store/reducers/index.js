import { combineReducers } from 'redux'
import { globalReducer } from './global'
import { dialogsReducer } from './dialogs'
import { adminsReducer } from './admins'

export const Reducers = combineReducers({ 
    global: globalReducer,
    dialogs: dialogsReducer,
    admins: adminsReducer
})