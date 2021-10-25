

import './style.css'
import { useEffect, useState } from 'react'
import { CommonGrid, CommonToolBar, CommonForm } from '../../../../utils/Common'
import { StateAdapter, InputAdapter } from '../../../../utils/Adapters'
import { Handler as notify } from '../../../../global/Notifications'
import { stationsService } from '../../../../../services/stations/stations-service'
import { LoadContent, SaveStation, RemoveStation } from '../methods'
import { LoadAddressLabelView } from '../methods/load_address'

const INITIAL_DATA = {
     id: null,
     description: "", 
     longitude: "",
     latitude: "",
     altitude: "",
     address: { value: "", label: ""}
}
const CreatePage = ({ history, location, match }) =>{

     const { address } = LoadAddressLabelView({ history, location })
     const { station, freeze, setFreeze } = LoadContent({history, location, match})
     const state = StateAdapter({ ...INITIAL_DATA })

     useEffect(()=>{
          if(address) state.data.handleInputs('address', { ...address })
     },[address])

     useEffect(()=>{
          if(station) return state.data.set({ ...station });
     },[station])

     /* Methods */
     const saveStation = () => SaveStation({
          onSuccess: (station) => history.push(`/admin/stations/${station.id}/update`),
          onFailure: (err) => { if(err.params) state.errors.set(err.params) },
          before: () => { setFreeze(true); state.errors.clear(); },
          after: () => setFreeze(false) 
     })(state.data.get)

     const removeStation = () => RemoveStation({
          onSuccess: () => history.push(`/admin/addresses/${state.data.get.address_id}`),
          onFailure: (err) => { if(err.params) state.errors.set(err.params) },
          before: () => { setFreeze(true); state.errors.clear(); },
          after: () => setFreeze(false) 
     })(state.data.get)

     const { id } = state.data.get

     return (
          <CommonGrid appContainer >

               <CommonToolBar>
                    <button className="success" onClick={ saveStation }> { id ? 'Atualizar' : 'Salvar'} </button>
                    { id && <button className="warning" onClick={ removeStation }> { 'Deletar' } </button>}
               </CommonToolBar>

               <CommonForm title={ id ? "Atualizar Estação" : "Nova Estação"} columns={[6,2,2,2,6]} freeze={freeze}>
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