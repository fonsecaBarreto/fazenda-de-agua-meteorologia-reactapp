import { global } from '../../global'
import { MakeApiSettings, errorHandler } from '../helpers'
import store from '../../store/index'
import { setAddresses } from '../../store/reducers/admins/actions'

const addressesApi = MakeApiSettings(`${global.base_url}/addresses`, errorHandler, global.user_storage_key)

export const addressesServices = {

     list:async () => {
          const { data } = await addressesApi.send({ method: "get", url:"/" }) 
          store.dispatch(setAddresses(data))
     },
     
     find:async (id) => {
          const { data } = await addressesApi.send({ method: "get", url:`/${id}` }) 
          return data
     },
 /*  create:async () =>{
    const { data } = await loginApi.send({method: "post", url:"/auth"}) 
    return data
  }, 
  
  remove:() =>{
    localStorage.removeItem(global.user_storage_key)
    window.location.href="/login"
  }  */
}