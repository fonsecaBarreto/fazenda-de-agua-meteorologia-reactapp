export const setNotification = (messages=[], type = 0, onResult= null) => ({
    type: "SET_NOTIFICATION",
    payload:  { messages, type, onResult }
})

export const setNotificationLoading = (value=false) => ({
    type: "SET_NOTIFICATION_LOADING",
    payload:  value 
})

export const setOptions = (options=[]) => ({
    type: "SET_OPTIONS",
    payload:  options
})

export const setGlobalDialog = (content=null, title="", props={}) => ({
    type: "SET_GLOBAL_DIALOG",
    payload:  { title, content, props }
})


