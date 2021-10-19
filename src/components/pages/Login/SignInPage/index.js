import React, { useState } from "react"
import FormRow from '../../../utils/FormRow'
import './style.css'
import LogoImage from '../../../../assets/images/heavy-rain.png'
import { loginServices } from '../../../../services/login-service'
import LoginCustomButton from "../LoginCustomButton"
import { AiFillWarning }from 'react-icons/ai'
const INITIAL_DATA = {
     username: "",
     password: "",
 }

const InputsState = () =>{

     const [ inputs, setInputs ] = useState({...INITIAL_DATA});
     const [ errMessage, setErrMessage ] = useState("")
     const [ errors, setErrors ] = useState({});

     const handleInputs = (key,value, capital) => {
          if(capital){
              value = value.replace(/\b\w/g, c => c.toUpperCase());
          }
          setInputs(prev => ({  ...prev,  [key]:value  }))
      }

      return { 

          inputs: {
               get: inputs, 
               set: setInputs,
               handleInputs,
               clear: () => setInputs({ ...INITIAL_DATA })
          },
          errors: { 
               get: errors, set: setErrors , clear: () => {setErrors({ }); setErrMessage("")},
               errMessage, setErrMessage
          }
     }

}

const SignInPage = () =>{

     const { inputs, errors } = InputsState()
     
     const submit_signIn =() =>{
          errors.clear()
          return loginServices.signin(inputs.get)
          .then(()=>{ alert("Bem vindo") })
          .catch(err=>{
               errors.setErrMessage(err.message)
               if(err.params)errors.set(err.params);
          })
     }
     return (
          <div id="login-screen" className="app-container"> 
               <div className="login-box">   

                    <header>
                         <img className="logo-image" src={LogoImage} alt="logo"/>
                         <h3 className="txt-center"> Fazenda de Agua Metereologia</h3>
                    </header>

                    <section>
                         <FormRow>
                              <input type={'text'} placeholder={'Nome de Usuario'}
                                   value={inputs.get.username}  
                                   onInput={e=>  inputs.handleInputs('username',e.target.value) } >
                              </input>
                         </FormRow>

                         <FormRow>
                              <input type={'password'} placeholder={'Senha'}
                                   value={inputs.get.password}  
                                   onInput={e=>  inputs.handleInputs('password',e.target.value) } >
                              </input>
                         </FormRow> 
                    </section>

                    <LoginCustomButton onClick={submit_signIn}>Entrar</LoginCustomButton>

                    { errors.errMessage &&
                         <span className="login-err-message">
                              <AiFillWarning></AiFillWarning>
                              {errors.errMessage} 
                         </span>}

               </div>
          </div>
     )
}

export default SignInPage;
