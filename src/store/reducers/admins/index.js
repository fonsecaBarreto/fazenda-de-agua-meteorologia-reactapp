const INITIAL_STATE = {
     addresses: [],
     users: []
}
   
export const adminsReducer = (state=INITIAL_STATE, action) => {
     switch(action.type){
          case "SET_ADDRESSES": return { ...state, addresses: action.payload };
          case "SPLICE_ADDRESSES": return { ...state, addresses: [  action.payload, ...state.addresses.filter(a=>(a.id !== action.payload.id))]};
          case "SLICE_ADDRESSES": return { ...state, addresses: [ ...state.addresses.filter(a=>(a.id !== action.payload))]};

          case "SET_USERS": return { ...state, users: action.payload };
          case "SPLICE_USERS": return { ...state, users: [  action.payload, ...state.users.filter(u=>(u.id !== action.payload.id))]};
          case "SLICE_USERS": return { ...state, users: [ ...state.users.filter(u=>(u.id !== action.payload))]};
          default: return state
     }
}