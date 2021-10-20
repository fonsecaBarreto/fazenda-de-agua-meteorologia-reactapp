const INITIAL_STATE = {
     addresses: [],
}
   
export const adminsReducer = (state=INITIAL_STATE, action) => {
     switch(action.type){
          case "SET_ADDRESSES": return { ...state, addresses: action.payload};
          default: return state
     }
}