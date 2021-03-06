import { global } from '../../global'
import { MakeApiSettings, errorHandler } from '../helpers'

const stationsApi = MakeApiSettings(`${global.base_url}/stations`, errorHandler, global.user_storage_key)

export const stationsService = {

     find:async (id, p) => {
          const { data } = await stationsApi.send({ method: "get", url:`/${id}?p=${p}` }) 
          return data
     },

     findStationMetrics:async (id, params) => {
          const { start_date: start_date_str, intervals, amplitude } = params

          var state_date = new Date(start_date_str)
          state_date.setHours(0, 0, 0, 0);

          const s = state_date.getTime();
          const { data } = await stationsApi.send({ method: "get", url:`/${id}/metrics?s=${s}&intervals=${intervals}&amplitude=${amplitude}` }) 
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
     },

     saveMeasurements: async (station_id, csvFile, force = 0) => {
          const formData = new FormData();
          formData.append('csv_entry', csvFile)
          await stationsApi.send({method: "post", url:`/${station_id}/measurements/multiples?f=${force}`, data: formData });
          return
     }
}