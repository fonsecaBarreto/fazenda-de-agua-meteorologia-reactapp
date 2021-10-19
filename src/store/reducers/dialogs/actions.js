
import { INITIAL_STATE } from './index'

export const closeDialog = () => ({
    type: "SET_DIALOG",
    payload:  { ...INITIAL_STATE.dialog }
})
export const setDialog = (content) => ({
    type: "SET_DIALOG",
    payload:  { ...INITIAL_STATE.dialog, content: content }
})
