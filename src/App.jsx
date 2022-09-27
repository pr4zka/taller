import './App.css'
import { Login } from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import { Register } from './pages/Register'
import { Nabvar } from './Nabvar/Nabvar'

function App() {
  return (
    <div className="App">
      <Nabvar />
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
