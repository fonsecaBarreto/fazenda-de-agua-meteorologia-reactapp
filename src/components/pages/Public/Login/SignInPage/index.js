import React, { useState, useEffect } from "react"
import './style.css'

import { useHistory } from 'react-router-dom'
import { AiFillWarning }from 'react-icons/ai'

import { loginServices } from '../../../../../services/login-service'
import LogoImage from '../../../../../assets/images/heavy-rain.png'
import FormRow from '../../../../utils/FormRow'
import LoginCustomButton from "../LoginCustomButton"

const INITIAL_DATA = {
     username: "",
     password: "",
 }

const InputsState = () =>{

     const [ inputs, setInputs ] = useState({...INITIAL_DATA});
     const [ errMessage, setErrMessage ] = useState("")
     const [ errors, setErrors ] = useState({});

     const handleInputs = (key,value, capital) => {
          if(capital)
              value = value.replace(/\b\w/g, c => c.toUpperCase());
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
     const history = useHistory()
     const { inputs, errors } = InputsState()

     useEffect(()=>{
          if(!history.location.search ) return;
          const err = history.location.search.split("?e=")[1]
          if(err) 
               errors.setErrMessage(err.replace(/%20/g, " "));
     },[history, history.location])
     
     const submit_signIn =() =>{
          errors.clear()
          return loginServices.signin(inputs.get)
          .then(()=>{ 
               return history.push("/")
          })
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
                         <h3 className="txt-center styled-header"> Meteorologia - Fazendas de água</h3>
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

                    <div className="login-quote">
                         <span>
                              Aplicação em estagio de <b>desenvolvimento. </b>
                              Deverá servir como interface visual para as variadas categorias de usuários. 
                              integrada ao Serviços do projeto: <br/> <b>Meteorologia - Fazendas de água</b>
                              <p>
                                   <a target="_blank" href="https://github.com/fonsecaBarreto/fazendas-de-agua-meteorologia-server"> Saiba Mais </a>
                              </p>
                           
                         </span>
                    </div>

               </div>
          </div>
     )
}

export default SignInPage;
