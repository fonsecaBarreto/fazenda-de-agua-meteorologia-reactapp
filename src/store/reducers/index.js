import { combineReducers } from 'redux'
import { globalReducer } from './global'
import { dialogsReducer } from './dialogs'

export const Reducers = combineReducers({ 
    global: globalReducer,
    dialogs: dialogsReducer
})