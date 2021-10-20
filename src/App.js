import React from 'react';
import './assets/styles/root.css'
import './assets/styles/fonts.css'
import './App.css'
import Routes from './routes/index.js'
import { useSelector } from 'react-redux'

function App(){
  const { user, loading } = useSelector((state)=> state.global)
  
  return (
    <div className={`App ${loading? 'loading': ''}`}>
      <Routes user={user}></Routes>   
    </div>
  );

}

export default App