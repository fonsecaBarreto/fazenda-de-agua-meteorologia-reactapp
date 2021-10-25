import { ClientSideError } from '../helpers/ClientError'
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
          
          const { id, name, username, password, passwordConfirmation, role, address_id } = inputs;

          if (!id) { // Caso seja uma criação, haverá breve validação no lado do cliente

               if(role == "0" && !address_id) throw new ClientSideError("Defina para qual localidade esse usuario pertence!",{
                    address: "Escolha um endereço."
               });
               
               if(password !== passwordConfirmation) throw new ClientSideError("",{
                    passwordConfirmation: "Senha e Confirmação devem ser iguais."
               });
          }
          
          const body = id ? { username, name } : {name, username, password, role, address_id }
          const METHOD = id ? 'PUT' : 'POST';
          const URL = id ? `/${id}` : '/'

          const { data } = await usersApi.send({method: METHOD, url:URL , data: body });
          return data
     }, 

     remove: async (user) =>{
          await usersApi.send({method: "delete", url:`/${user.id}`});
          return 
     }
}