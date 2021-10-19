import { global } from '../global'
import { MakeApiSettings } from './helpers/ApiFactory'
import { errorHandler } from './helpers/ErrorHandler'

const loginApi = MakeApiSettings(`${global.base_url}/login`, errorHandler, global.user_storage_key)


export const loginServices = {

  signin:async (data) => {
    const result = await loginApi.send({ method: "post", url:"/signin", data }) 
    localStorage.setItem(global.storage_key_admin, result.data['accessToken'])
  },
  
  auth:async () =>{
    const { data } = await loginApi.send({method: "post", url:"/auth"}) 
    return data
  }, 
  
  logout:() =>{
    localStorage.removeItem(global.storage_key_admin)
    window.location.href="/admins/login"
  } 
}