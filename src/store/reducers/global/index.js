const INITIAL_STATE = {
  user: null,
  loading: false
}

export const globalReducer = (state=INITIAL_STATE, action) => {
  switch(action.type){
    case "SET_USER": return { ...state, user: action.payload};
    case "SET_LOADING": return { ...state, loading: action.payload };
    default: return state
  }
}