export const INITIAL_STATE = {
  notification: {
    messages: [],
    type: null,
    onResult: null
  },
  options: []  //{label, actions}
}

export const dialogsReducer = (state=INITIAL_STATE, action) => {
  switch(action.type){
    case "SET_NOTIFICATION": return { ...state, notification: action.payload };
    case "SET_OPTIONS": return { ...state, options: action.payload };
    default: return state
  }
}