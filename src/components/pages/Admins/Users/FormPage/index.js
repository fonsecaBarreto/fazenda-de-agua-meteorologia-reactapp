import './style.css'
import { CommonGrid, CommonToolBar, CommonForm } from '../../../../utils/Common'
import { StateAdapter, InputAdapter } from '../../../../utils/Adapters'
import { addressesServices, stationsService, usersService} from '../../../../../services'
import { Handler as notify } from '../../../../global/Notifications'
import { useEffect, useState } from 'react'


import queryString from 'query-string';

const INITIAL_DATA = {
     id: null, 
     name:"",
     username:"",
     password:"", 
     passwordConfirmation:"", 
     role: "",  
     address: { value: "", label: "" }
}

const UserFormPage = ({ history, location }) =>{

     const [ freeze, setFreeze ] = useState(false)
     const [ addresses, setAddresses ] = useState([])
     const state = StateAdapter({...INITIAL_DATA})

     const show_failure = (id) =>{
          notify.failure(()=>{
               return history.push("/admin/users")
          }, "Não foi possível encontrar Usuário", `Id: ${id}`)
     }
     useEffect(()=>{
          if(addresses.length === 0)
               addressesServices.list("labelview") .then(setAddresses);
     
     },[addresses])

     useEffect(()=>{

          const id = queryString.parse(location.search).id
          if(!id) return

          setFreeze(true)
          usersService.find(id)
          .then( user => { 
               if(!user) show_failure(id);
               state.data.set(user)
          })
          .catch(_=>{show_failure(id)})
          .finally(_=>{ setFreeze(false) }) 
     

     },[ location.pathname, location.search ])

     const submit_save = async () =>{
          setFreeze(true)
          state.errors.clear()
          try {
              const returned = await usersService.save(state.data.get);
              notify.success(()=>{
                    history.push(`/admin/users/form?id=${returned.id}`)
              }, "Usuário salvo com sucesso!")
          } catch(err) {
               notify.failure(null, err.message)
               if(err.params) state.errors.set(err.params);
          } finally { setFreeze(false) }
     }

     const submit_remove = async () => {
          setFreeze(true)
          state.errors.clear()
          try{
               await usersService.remove(state.data.get);
               notify.success( ()=>{history.push("/admin/users")}, "Usuário Removido com sucesso!")
          } catch(err) {
               notify.failure(null, err.message)
               if(err.params) state.errors.set(err.params);
          } finally {  
               setFreeze(false) 
          }
     }

     return (
          <CommonGrid appContainer >

               <CommonToolBar>
                    <button className="success" onClick={submit_save}> { state.data.get.id ? 'Atualizar' : 'Salvar'} </button>
                    { state.data.get.id && <button className="warning" onClick={submit_remove}> { 'Remover' } </button>}
               </CommonToolBar>

               <CommonForm title={ state.data.get.id ? "Atualizar Usuário" : "Novo Usuário"} columns={[6,6,6,3,3,6]} freeze={freeze}>
                    <InputAdapter 
                    def={0}
                    state={state} name={'role'} label="Tipo" 
                    list={[{value: "0", label: "Básico"}, { value:"1", label: "Administrador" }]} type="select"></InputAdapter>
                    <InputAdapter state={state} name={'name'} label="Nome"></InputAdapter>
                    <InputAdapter state={state} name={'username'} label="Nome de Usuário"></InputAdapter>
                    <InputAdapter state={state} name={'password'} label="Senha" type="password"></InputAdapter>
                    <InputAdapter state={state} name={'passwordConfirmation'} label="Confirme a senha" type="password"></InputAdapter>
                    {  state.data.get['role'] === "0" && 
                         <InputAdapter placeholder="Nenhum Endereço Selecionado"
                         state={state} name={'address'} label="Endereço" type="selectView" list={addresses}></InputAdapter>
                    }
               </CommonForm>

               {JSON.stringify(state.data.get)}
     
          </CommonGrid>
     )
}

export default UserFormPage