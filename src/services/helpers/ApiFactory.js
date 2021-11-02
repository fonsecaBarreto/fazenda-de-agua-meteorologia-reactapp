import axios from 'axios'

export function MakeApiSettings(base_url, errorHelper, storage_key){
  const axiosApi = axios.create({  baseURL: base_url })
  return ({
    send: async ({ method, url, data, headers }) => {

      if(storage_key){
        const token = localStorage.getItem(storage_key)
        axiosApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
/* 
      await new Promise(resolve =>{
        setTimeout(()=>resolve(true),3000)
      })  */ 
       
      try{ 
        const result = await axiosApi({ method,url: `${base_url}${url}`, data, headers })
        return result
      } catch(err){ throw errorHelper(err) } 

    }
  })
}



