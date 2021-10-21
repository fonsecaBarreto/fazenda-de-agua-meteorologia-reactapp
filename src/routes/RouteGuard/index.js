import React, { useEffect, useState } from 'react'
import { Route } from "react-router-dom";
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { loginServices } from '../../services/login-service'
import { setUser, setLoading } from '../../store/reducers/global/actions'

const Guard = withRouter(({ history, access, location, component: Component, path, ...rest } ) => {
  const dispatch = useDispatch()
  var { user }  = useSelector(state=>state.global) 

  useEffect(()=>{
    login(access);
    window.scroll({ top: 0, left: 0, behavior: 'auto' });
  },[ path ]) 

  const subtmit_auth = async () => {
    dispatch(setLoading(true));
    try{
      const user = await loginServices.auth()
      dispatch(setUser(user));
      return user
    }catch(err){
      history.push(`/login?e=${err.message}`)
    }finally{
      dispatch(setLoading(false));
    }
  }

  const login = async (access) =>{
      if(!access) return 

      if(!user){ 
        user = await subtmit_auth()
        if(!user) return
      }
    
      switch(access){
        case "basic_only":

          if(user?.role !== 0) {
            return history.push(`/admin`);
          }
        break;

        case "admin_only":
          if(user?.role !== 1) {
            alert("Acesso Restrito a Usuarios Administradores")
            return history.push(`/`)
          };
        break;
   
        default: console.log("Bem vindo") ;break;
      } 

  }

  return (<Route path={path} location={location} {...rest}  ></Route>)
})


export default Guard