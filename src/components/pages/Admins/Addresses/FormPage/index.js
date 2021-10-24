import './style.css'
import { CommonGrid, CommonToolBar, CommonForm } from '../../../../utils/Common'
import { StateAdapter, InputAdapter } from '../../../../utils/Adapters'
import { addressesServices } from '../../../../../services/addresses/addresses-service'
import { UFS } from '../UFS.json'
import { Handler as notify } from '../../../../global/Notifications'
import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import queryString from 'query-string';

const INITIAL_DATA = {
     id: null,
     street:"",
     region:"",
     uf: "",
     number:"",
     city: "",
     details: "",
     postalCode: "",
}

const CreatePage = () =>{

     const history = useHistory()
     const location = useLocation()
     const [ freeze, setFreeze ] = useState(false)
     const state = StateAdapter({...INITIAL_DATA})

     const show_failure = (id) =>{
          notify.failure(()=>{
               return history.push("/admin/addresses")
          }, "Não foi possível encontrar Endereço", `Id: ${id}`)
     }

     useEffect(()=>{

          const id = queryString.parse(location.search).id
          
          if(id){
               setFreeze(true)
               addressesServices.find(id)
               .then( address => { 
                    if(!address) show_failure(id);
                    state.data.set(address)
               })
               .catch(_=>{show_failure(id)})
               .finally(_=>{ setFreeze(false) }) 
          }

     },[ location, location.search ])

     const submit_save = async () =>{
          setFreeze(true)
          state.errors.clear()
          try{
              const returned = await addressesServices.save(state.data.get);
              notify.success(()=>{
                    history.push(`/admin/addresses/form?id=${returned.id}`)
              }, "Endereço salvo com sucesso!")
          }catch(err){
               notify.failure(null, err.message)
               if(err.params) state.errors.set(err.params);
          }finally{
               setFreeze(false)
          }
     }

     const submit_remove = async () => {
          setFreeze(true)
          state.errors.clear()
          try{
               await addressesServices.remove(state.data.get);
               notify.success( ()=>{history.push("/admin/addresses")}, "Endereço Removido com sucesso!")
          }catch(err){
               notify.failure(null, err.message)
               if(err.params) state.errors.set(err.params);
          }finally{
               setFreeze(false)
          }
     }

     return (
          <CommonGrid appContainer >

               <CommonToolBar>
                    <button className="success" onClick={submit_save}> { state.data.get.id ? 'Atualizar' : 'Salvar'} </button>
                    { state.data.get.id && <button className="warning" onClick={submit_remove}> { 'Remover' } </button>}
               </CommonToolBar>

               <CommonForm title={ state.data.get.id ? "Atualizar Endereço" : "Novo Endereço"} columns={[4,2,6,2,4,6,6,6]} freeze={freeze}>
                    <InputAdapter state={state} name={'street'} label="Logradouro"></InputAdapter>
                    <InputAdapter state={state} name={'number'} label="Numero"></InputAdapter>
                    <InputAdapter state={state} name={'region'} label="Bairro"></InputAdapter>
                    <InputAdapter state={state} name={'uf'} label="UF" type="select" list={UFS}></InputAdapter>
                    <InputAdapter state={state} name={'city'} label="Cidade"></InputAdapter>
                    <InputAdapter state={state} name={'details'} label="Complementos" type="textarea" ></InputAdapter>
                    <InputAdapter state={state} name={'postalCode'} label="CEP"></InputAdapter>
               </CommonForm>
     
          </CommonGrid>
     )
}

export default CreatePage