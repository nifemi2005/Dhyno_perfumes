import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Payment1 from './Pages/Payment1'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Routes>
        <Route path='/payment1' element={<Payment1/>} />
      </Routes>
    </div>
  )
}

export default App
