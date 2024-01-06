import './App.css'
import {Routes,Route} from 'react-router-dom'
import Register from './pages/register'
import Login from './pages/login'
import Verify from './pages/verify'

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/verify' element={<Verify />}/>
        </Routes>
    </>
  )
}

export default App
