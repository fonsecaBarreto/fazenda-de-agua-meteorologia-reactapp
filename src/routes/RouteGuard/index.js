import React, { useEffect, useState } from 'react'
import { Route } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { loginServices } from '../../services/login-service'
import { setUser, setLoading } from '../../store/reducers/global/actions'
import RouteTracker from './routeTracker'

const RouteState = () =>{
  const [ redirect, SetRedirect ] = useState("");
  const dispatch = useDispatch()
  var { user }  = useSelector(state=>state.global) 

  const subtmit_auth = async () => {
    dispatch(setLoading(true));
    try{
      const user = await loginServices.auth()
      dispatch(setUser(user));
      return user
    }catch(err){
      SetRedirect(`/login?e=${err.message}`)
    }finally{
      dispatch(setLoading(false));
    }
  } 

  const login = async (access) =>{
  
    if(![0,1].includes(access)) return SetRedirect("");

    if(!user){ 
      user = await subtmit_auth()
      if(!user) return
    }

    if( access !== user.role) {
      if(user.role == 1) return SetRedirect('/admin')
      return SetRedirect('/login')
    }
  }

  return { redirect, login }

}

const Guard = ({ access, component: Component, path, location, ...rest } ) => {

  const { use } = RouteTracker()
  const {redirect, login  } = RouteState()

  useEffect(()=>{ routine(access); }, [ location ]) 

  const routine = async (access) => {
    use({ ...rest, location }); // Track the current page
    login(access); // Authenticate Access
    window.scroll({ top: 0, left: 0, behavior: 'auto' }); // Scroll page to the top
  } 

  return ( 
    <React.Fragment>
      { redirect ? <Redirect to={redirect} ></Redirect> :
      <Route path={path} location={location} {...rest} render={ (props) => <Component {...props}  /> }  />}
    </React.Fragment>
  )

}


export default Guard