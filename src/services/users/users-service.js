import { global } from '../../global'
import { MakeApiSettings, errorHandler } from '../helpers'

const usersApi = MakeApiSettings(`${global.base_url}/users`, errorHandler, global.user_storage_key)

export const usersService = {

     list:async () => {
          const { data } = await usersApi.send({ method: "get", url:"/" }) 
          return data
     },
     
     find:async (id) => {
          const { data } = await usersApi.send({ method: "get", url: `/${id}`  }) 
          return data
     },

     save:async (inputs) =>{
          const { id, name, username, password, role, address_id} = inputs;
          const body = id ? {name, username, password, role, address_id } : { username, name }
          const METHOD = id ? 'PUT' : 'POST';
          const URL = id ? `/${id}` : '/'
          const { data } = await usersApi.send({method: METHOD, url:URL , data: body });
          return data
     }, 

     remove: async (user) =>{
          const { data } = await usersApi.send({method: "delete", url:`/${user.id}`});
          return data
     }
}