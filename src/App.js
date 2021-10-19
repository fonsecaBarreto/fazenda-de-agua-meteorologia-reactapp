import React, { useEffect } from 'react';
import './assets/styles/root.css'
import './assets/styles/fonts.css'
import './App.css'
import Routes from './routes/index.js'

import { useSelector, useDispatch } from 'react-redux'
import { setUser } from './store/reducers/global/actions'

function App(){
  const dispatch = useDispatch()
  const { user } = useSelector((state)=> state.global)
  useEffect(()=>{
    dispatch(setUser(
      { 
        name: "Nome teste",
        username:"Nome do Usuario",
        role: 1
      }))
  },[])
  const toggle = () =>{
    dispatch(setUser( { ...user, role: user.role ? 0 : 1 }))
  }
  return (
    <div className="App">
      { user && <div className="role-frame">
        <button onClick={toggle}> { (user?.role === 0) ? "Padrao" : "Admin" }  </button>
      </div>}
      <Routes user={user}></Routes>   
    </div>
  );

}

export default App