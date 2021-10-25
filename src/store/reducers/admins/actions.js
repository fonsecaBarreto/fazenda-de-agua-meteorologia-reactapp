export const setAddresses = value => ({
     type: "SET_ADDRESSES",
     payload: value
})
 
export const spliceAddresses = value => ({
    type: "SPLICE_ADDRESSES",
    payload: value
})

export const sliceAddresses = address_id => ({
    type: "SLICE_ADDRESSES",
    payload: address_id
})

export const setUsers = value => ({
    type: "SET_USERS",
    payload: value
})

export const spliceUsers = value => ({
   type: "SPLICE_USERS",
   payload: value
})

export const sliceUsers = user_id => ({
   type: "SLICE_USERS",
   payload: user_id
})
