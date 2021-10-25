import './assets/styles/root.css'
import './assets/styles/fonts.css'
import './App.css'
import Routes from './routes/index.js'
import { useSelector } from 'react-redux'
import NotificationComponent from './components/global/Notifications'
import OptionComponent from './components/global/Options'

function App(){

  const { user, loading } = useSelector((state)=> state.global)
  return (
    <div className={`App ${loading? 'loading': ''}`}>
    <NotificationComponent></NotificationComponent>
    <OptionComponent></OptionComponent>
    <Routes user={user}></Routes> 

    </div>
  );

}

export default App

/*  () => { 
        toDo( async ()=> { await new Promise(resolve=>{setTimeout(()=> resolve(true),[2000])}) })
      }
  
    */