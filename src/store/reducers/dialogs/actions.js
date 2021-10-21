export const setDialog = (messages=[], type = 0, onResult= null) => ({
    type: "SET_DIALOG",
    payload:  { messages, type, onResult }
})
