import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'

function App() {


  return(
    <BrowserRouter>
    <Routes>
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/signup' element={<Signup/>} />
      <Route exact path='/' element={<Home/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
