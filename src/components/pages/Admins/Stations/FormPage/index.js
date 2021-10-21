

import './style.css'
import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'

import { CommonGrid, CommonToolBar, CommonForm } from '../../../../utils/Common'
import { StateAdapter, InputAdapter } from '../../../../utils/Adapters'

import { Handler as notify } from '../../../../global/Notifications'
import queryString from 'query-string';

import { addressesServices } from '../../../../../services/addresses/addresses-service'
import { stationsService } from '../../../../../services/stations/stations-service'

const INITIAL_DATA = {
     id: null,
     description: "", 
     longitude: "",
     latitude: "",
     altitude: "",
     address: { value: "", label: ""}
}

const CreatePage = () =>{

     const history = useHistory()
     const location = useLocation()
     const [ freeze, setFreeze ] = useState(false)
     const state = StateAdapter({ ...INITIAL_DATA })

     const addressNotFound = (address_id) =>{
          notify.failure(()=> history.push("/admin/addresses") ,"Não foi possível encontrar Endereço", `${address_id || "É Necessario informar para qual endereço deseja criar uma estação"}`)
     }

     const stationNotFound = (id) =>{
          notify.failure(()=> history.push("/admin/addresses") ,"Estação não encontrada.", `${id}`)
     }

     useEffect(()=>{

          const address_id = queryString.parse(location.search).address_id
          const id = queryString.parse(location.search).id

          if(!id && !address_id) return addressNotFound()

          setFreeze(true)
          if(id){ 
               stationsService.find(id)
               .then( station => { 
                    if(!station) stationNotFound(id);
                    state.data.set({ ...station })
               })
               .catch(_=>{stationNotFound(id)})
               .finally(_=>{ setFreeze(false) })

          }else if(address_id){ 
               addressesServices.find(address_id,'labelview')
               .then( address => { 
                    if(!address) return addressNotFound(address_id)
                    state.data.handleInputs('address', address);
               })
               .catch(_=> addressNotFound(id))
               .finally(_=> setFreeze(false))
          }

     },[ location, location.search ]) 

     const submit_save = async () =>{
          setFreeze(true)
          state.errors.clear()
          try{
              const returned = await stationsService.save({ ...state.data.get, address_id: state.data.get['address'].value });
              notify.success(()=>{ history.push(`/admin/stations/form?id=${returned.id}`)
              }, "Estação salva com sucesso!")
          }catch(err){
               notify.failure(null, err.message)
               if(err.params) state.errors.set(err.params);
          }finally{ setFreeze(false) }
     }

     const submit_remove = async () => {
          setFreeze(true)
          state.errors.clear()
          try{
               await stationsService.remove(state.data.get);
               notify.success( ()=>{history.push(`/admin/addresses/view?id=${state.data.get.address_id}`)}, "Estação Removida com sucesso!")
          }catch(err){
               notify.failure(null, err.message)
               if(err.params) state.errors.set(err.params);
          }finally{ setFreeze(false)  }
     }

     return (
          <CommonGrid appContainer >

               <CommonToolBar>
                    <button className="success" onClick={submit_save}> { state.data.get.id ? 'Atualizar' : 'Salvar'} </button>
                    { state.data.get.id && <button className="warning" onClick={submit_remove}> { 'Deletar' } </button>}
               </CommonToolBar>

               <CommonForm title={ state.data.get.id ? "Atualizar Estação" : "Nova Estação"} columns={[6,2,2,2,6]} freeze={freeze}>
                    <InputAdapter state={state} name={'description'} label="Descrição" type="textarea"></InputAdapter>
                    <InputAdapter state={state} name={'longitude'} label="Longitude" type="number"></InputAdapter>
                    <InputAdapter state={state} name={'latitude'} label="Latitude" type="number"></InputAdapter>
                    <InputAdapter state={state} name={'altitude'} label="Altitude" type="number"></InputAdapter>
                    <InputAdapter state={state} name={'address'} label="Endereço" type="viewbox"></InputAdapter>
               </CommonForm>

          </CommonGrid>
     )
}

export default CreatePage