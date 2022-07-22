import React from 'react'
import {Routes, Route} from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import CreatePin from './pages/CreatePin'
import PinSuccess from './pages/PinSuccess'
import ResetPassword from './pages/ResetPassword'
import CreateNewPassword from './pages/CreateNewPassword'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/pin' element={<CreatePin />} />
      <Route path='/pinsuccess' element={<PinSuccess />} />
      <Route path='/resetpassword' element={<ResetPassword />} />
      <Route path='/createnewpassword' element={<CreateNewPassword />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default App