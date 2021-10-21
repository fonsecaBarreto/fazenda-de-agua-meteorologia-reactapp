import React, { useState } from "react"

export const StateAdapter = (initial_data) =>{
 
    const [ data, setData ] = useState({ ...initial_data })
    const [ errors, setErrors ]= useState({})
    const [ loading, setLoading ] = useState(false)

    const handleInputs = (key,value, capital) => {
        if(capital){
            value = value.replace(/\b\w/g, c => c.toUpperCase());
        }
        setData(prev => ({  ...prev,  [key]:value  }))
    }

    return {
        data: {
            get: data, set: setData, handleInputs, 
            clear: () => setData({ ...initial_data })
        },
        errors: { 
            get: errors, set: setErrors , clear: () => {setErrors({ })},
        },
        loading: { 
            get:loading, set: setLoading 
        },
    }
 
}

export default StateAdapter