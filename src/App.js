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
import History from './pages/History'
import SearchReciver from './pages/SearchReciver'
import InputAmount from './pages/InputAmount'
import ConfirmationTransfer from './pages/ConfirmationTransfer'

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
      <Route path='/history' element={<History />} />
      <Route path='/searchreciver' element={<SearchReciver />} />
      <Route path='/inputamount' element={<InputAmount />} />
      <Route path='/confirmation' element={<ConfirmationTransfer />} />
    </Routes>
  )
}

export default App