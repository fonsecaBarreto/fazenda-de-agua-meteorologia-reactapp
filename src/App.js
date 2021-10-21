import './assets/styles/root.css'
import './assets/styles/fonts.css'
import './App.css'
import Routes from './routes/index.js'
import { useSelector } from 'react-redux'
import NotificationComponent from './components/global/Notifications'

function App(){
  const { user, loading } = useSelector((state)=> state.global)

  return (
    <div className={`App ${loading? 'loading': ''}`}>
      <NotificationComponent></NotificationComponent>
      <Routes user={user}></Routes>   
    </div>
  );

}

export default App