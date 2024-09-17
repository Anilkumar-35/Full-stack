import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Singin from './components/singin'
import Singup from './components/singup'
import Home from './pages/home'
import Contact from './pages/Contact'
import About from './pages/About'


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/singin" element={<Singin/>}/>
      <Route path="/singup" element={<Singup/>}/>
      <Route path="/Contact" element={<Contact/>}/>
 



    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
