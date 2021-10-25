import './style.css'
import { CommonGrid, CommonToolBar, CommonForm } from '../../../../utils/Common'
import { StateAdapter, InputAdapter } from '../../../../utils/Adapters'
import { UFS } from '../UFS.json'
import { useEffect } from 'react'
import { RemoveAddress, SaveAddress } from '../methods'
import LoadContent from '../methods/load_method'

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

const AddressFormPage = ({ location, history, match }) =>{

     const state = StateAdapter({...INITIAL_DATA})
     const { address, freeze, setFreeze } = LoadContent({ location, history, match })

     useEffect(()=>{
          if(!address) return
          state.data.set(address)
     },[address])

     const removeAddress = RemoveAddress({
          onSuccess: () =>  history.push("/admin/addresses"), 
          onFailure: (err) => { if(err.params) state.errors.set(err.params) },
          before: () => {  setFreeze(true); state.errors.clear(); },
          after: () => setFreeze(false) 
     }) 

     const saveAddress = SaveAddress({
          onSuccess: (address) => history.push(`/admin/addresses/form?id=${address.id}`),
          onFailure: (err) => { if(err.params) state.errors.set(err.params) },
          before: () => { setFreeze(true); state.errors.clear(); },
          after: () => setFreeze(false) 
     }) 

     return (
          <CommonGrid appContainer >

               <CommonToolBar>
                    <button className="success" onClick={() => saveAddress(state.data.get) }> { state.data.get.id ? 'Atualizar' : 'Salvar'} </button>
                    { state.data.get.id && <button className="warning" onClick={()=>removeAddress(state.data.get)}> { 'Remover' } </button>}
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

export default AddressFormPage