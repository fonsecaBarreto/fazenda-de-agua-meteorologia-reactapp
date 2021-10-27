import React, { useEffect, useState } from 'react'
import './style.css'
import { CommonGrid, CommonToolBar, CommonForm } from '../../../../utils/Common'
import { StateAdapter, InputAdapter } from '../../../../utils/Adapters'
import { RemoveUser, SaveUser, LoadContent, LoadAddressesLabelView } from '../methods'

const INITIAL_DATA = {
     id: null, 
     name:"",
     username:"",
     password:"", 
     passwordConfirmation:"", 
     role: { value: "", label: "" },
     address: { value: "", label: "" }
}

const USERS_ROLES_LIST = [ {value: "0", label: "Básico"}, { value:"1", label: "Administrador" } ];

const UserFormPage = ({ history, location, match }) =>{

     const { user, freeze, setFreeze } = LoadContent({location, history, match})
     const { addresses } = LoadAddressesLabelView()
     const state = StateAdapter({...INITIAL_DATA})

     useEffect(()=>{
          if(user) return state.data.set(user)
     }, [ user ])

     const removeUser = RemoveUser({
          onSuccess: () =>  history.push("/admin/users"), 
          onFailure: (err) => { if(err.params) state.errors.set(err.params) },
          before: () => {  setFreeze(true); state.errors.clear(); },
          after: () => setFreeze(false) 
     }) 

     const saveUser = SaveUser({
          onSuccess: (data) => history.push(`/admin/users/${data.id}/update`),
          onFailure: (err) => { if(err.params) state.errors.set(err.params) },
          before: () => {  setFreeze(true); state.errors.clear(); },
          after: () => setFreeze(false) 
     }) 

     const { id, role } = state.data.get
     return (
          <CommonGrid appContainer >

               <CommonToolBar>
                    <button className="success" onClick={() => saveUser(state.data.get)}> { id ? 'Atualizar' : 'Salvar'} </button>
                    { id && <button className="warning" onClick={() => removeUser(state.data.get)}> { 'Remover' } </button>}
               </CommonToolBar>

               <CommonForm title={ id ? "Atualizar Usuário" : "Novo Usuário"} columns={[6,6,6,3,3,6]} freeze={freeze}>

                    <InputAdapter def={0} state={state} name={'role'} label="Tipo" list={USERS_ROLES_LIST} type={id ? "viewbox" : "selectView"}></InputAdapter>
                    <InputAdapter state={state} name={'name'} label="Nome"></InputAdapter>
                    <InputAdapter state={state} name={'username'} label="Nome de Usuário"></InputAdapter>
                    {  !id && <InputAdapter state={state} name={'password'} label="Senha" type="password"></InputAdapter>}
                    {  !id && <InputAdapter state={state} name={'passwordConfirmation'} label="Confirme a senha" type="password"></InputAdapter>}
                    {  ( role.value === USERS_ROLES_LIST[0].value ) && 
                         <InputAdapter placeholder="Nenhum Endereço Selecionado"
                         state={state} name={'address'} label="Endereço" type={id ? "viewbox" : "selectView" } list={addresses}></InputAdapter>
                    }
               </CommonForm>

          </CommonGrid>
     )
}

export default UserFormPage