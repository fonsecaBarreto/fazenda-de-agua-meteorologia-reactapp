export const INITIAL_STATE = {
  messages: [],
  type: null,
  onResult: null
}

export const dialogsReducer = (state=INITIAL_STATE, action) => {
  switch(action.type){
    case "SET_DIALOG": return { ...state, ...action.payload };
    default: return state
  }
}