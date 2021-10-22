import { global } from '../../global'
import { MakeApiSettings, errorHandler } from '../helpers'

const stationsApi = MakeApiSettings(`${global.base_url}/stations`, errorHandler, global.user_storage_key)

export const stationsService = {

     find:async (id) => {
          const { data } = await stationsApi.send({ method: "get", url:`/${id}` }) 
          return data
     },

     save:async (inputs) =>{
          const { id, description, longitude, latitude, altitude, address_id } = inputs;
          const METHOD = id ? 'PUT' : 'POST';
          const URL = id ? `/${id}` : '/'
          const body = id ? { description, longitude, latitude, altitude } 
          : { description, longitude, latitude, altitude, address_id }
          const { data } = await stationsApi.send({method: METHOD, url:URL , data: body });
          return data
     }, 

     remove: async (station) =>{
          await stationsApi.send({method: "delete", url:`/${station.id}`});
     }
}