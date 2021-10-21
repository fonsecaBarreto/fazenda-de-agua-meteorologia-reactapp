export const setNotification = (messages=[], type = 0, onResult= null) => ({
    type: "SET_NOTIFICATION",
    payload:  { messages, type, onResult }
})

export const setOptions = (options=[]) => ({
    type: "SET_OPTIONS",
    payload:  options
})
