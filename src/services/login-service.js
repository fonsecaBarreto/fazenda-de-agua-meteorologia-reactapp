import { global } from '../global'
import { MakeApiSettings, errorHandler } from './helpers'

const loginApi = MakeApiSettings(`${global.base_url}/login`, errorHandler, global.user_storage_key)


export const loginServices = {

  signin:async (data) => {
    const result = await loginApi.send({ method: "post", url:"/signin", data }) 
    localStorage.setItem(global.user_storage_key, result.data['accessToken'])
  },
  
  auth:async () =>{
    const { data } = await loginApi.send({method: "post", url:"/auth"}) 
    return data
  }, 
  
  logout:() =>{
    localStorage.removeItem(global.user_storage_key)
    window.location.href="/login"
  } 
}