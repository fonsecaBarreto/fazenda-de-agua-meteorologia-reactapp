const INITIAL_STATE = {
     addresses: [],
}
   
export const adminsReducer = (state=INITIAL_STATE, action) => {
     switch(action.type){
          case "SET_ADDRESSES": return { ...state, addresses: action.payload};
          case "SPLICE_ADDRESSES": return { ...state, addresses: [  action.payload, ...state.addresses.filter(a=>(a.id !== action.payload.id))]};
          case "SLICE_ADDRESSES": return { ...state, addresses: [ ...state.addresses.filter(a=>(a.id !== action.payload.id))]};
          default: return state
     }
}