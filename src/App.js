import './assets/styles/root.css'
import './assets/styles/fonts.css'
import './App.css'
import Routes from './routes/index.js'
import { useSelector } from 'react-redux'
import NotificationComponent from './components/global/Notifications'
import OptionComponent from './components/global/Options'
import GlobalDialog from './components/global/GlobalDialog'
import {  Handler as GlobalHandler } from './components/global/GlobalDialog'
import { useState } from 'react'
function App(){

  const { user, loading } = useSelector((state)=> state.global)


  return (
    <div className={`App ${loading? 'loading': ''}`}>
      <Routes user={user}></Routes> 
      <GlobalDialog></GlobalDialog>
      <OptionComponent></OptionComponent>
      <NotificationComponent></NotificationComponent>
    </div>
  );

}

export default App
