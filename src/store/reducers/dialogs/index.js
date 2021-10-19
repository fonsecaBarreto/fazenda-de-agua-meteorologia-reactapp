export const INITIAL_STATE = {
  dialog:{
    show: false,
    content: null
  }
}

export const dialogsReducer = (state=INITIAL_STATE, action) => {
  switch(action.type){
    case "SET_DIALOG": return { ...state, dialog: { ...action.payload } };
    default: return state
  }
}