import { INITIAL_CURRENT_PAGE } from './index'

export const setUser = (value = null) => ({
    type: "SET_USER",
    payload: value
})

export const setLoading = (value = false) => ({
    type: "SET_LOADING",
    payload: value 
})

export const setCurrentPage = (payload ) => {
    
    const title = payload.title || INITIAL_CURRENT_PAGE.title
    const breadCrumbs = payload.breadCrumbs || INITIAL_CURRENT_PAGE.breadCrumbs
    const icon = payload.icon || INITIAL_CURRENT_PAGE.icon

    return({
    type: "SET_CURRENT_PAGE",
    payload: {  title, breadCrumbs, icon  } 
})}

