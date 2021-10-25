import { global } from '../../global'
import { MakeApiSettings, errorHandler } from '../helpers'
import store from '../../store/index'
import { setAddresses, spliceAddresses, sliceAddresses } from '../../store/reducers/admins/actions'

const addressesApi = MakeApiSettings(`${global.base_url}/addresses`, errorHandler, global.user_storage_key)

export const addressesServices = {

     list:async (view = null) => {
          const url = view === "labelview" ? `/?v=labelview` : '/'
          const { data } = await addressesApi.send({ method: "get", url }) 
          if(!view) store.dispatch(setAddresses(data));
          return data
     },
     
     find:async (id, view=null) => {
          const url = view === "labelview" ? `/${id}?v=labelview` : `/${id}` 
          const { data } = await addressesApi.send({ method: "get", url }) 
          return data
     },

     save:async (inputs) =>{
          const { id, street, region, number, uf, city, details, postalCode } = inputs;
          const body = { street, region, number, uf, city, details, postalCode }

          const METHOD = id ? 'PUT' : 'POST';
          const URL = id ? `/${id}` : '/'
          const { data } = await addressesApi.send({method: METHOD, url:URL , data: body });
          store.dispatch(spliceAddresses(data))
          return data
     }, 

     remove: async (address) =>{
          await addressesApi.send({method: "delete", url:`/${address.id}`});
          store.dispatch(sliceAddresses(address))
          return 
     }
}