export const setUser = value => ({
    type: "SET_USER",
    payload: value
})

export const setLoading = value => ({
    type: "SET_LOADING",
    payload: value || null
})

