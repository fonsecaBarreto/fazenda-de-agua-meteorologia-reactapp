export const INITIAL_CURRENT_PAGE = {
  title: "",
  breadCrumbs: [  ],
  icon: null
}

const INITIAL_STATE = {
  user: null,
  loading: false,
  currentPage:  { ...INITIAL_CURRENT_PAGE }
}

export const globalReducer = (state=INITIAL_STATE, action) => {
  switch(action.type){
    case "SET_USER": return { ...state, user: action.payload};
    case "SET_LOADING": return { ...state, loading: action.payload };
    case "SET_CURRENT_PAGE": return { ...state, currentPage: action.payload };
    default: return state
  }
}