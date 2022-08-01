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
import TransferSuccess from './pages/TransferSuccess'
import TransferFailed from './pages/TransferFailed'
import TopUp from './pages/TopUp'
import PersonalInformation from './pages/PersonalInformation'
import ProfileUser from './pages/ProfileUser'
import ChangePassword from './pages/ChangePassword'
import OldPin from './pages/OldPin'
import NewPin from './pages/NewPin'
import AddPhone from './pages/AddPhone'
import ManagePhone from './pages/ManagePhone'
import PrivateRoute from './components/PrivateRoutes'
import AlreadyLogin from './helpers/AlreadyLogin'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<AlreadyLogin><Login /></AlreadyLogin>} />
      <Route path='/signup' element={<AlreadyLogin><SignUp /></AlreadyLogin>} />
      <Route path='/pin' element={<AlreadyLogin><CreatePin /></AlreadyLogin>} />
      <Route path='/pinsuccess' element={<AlreadyLogin><PinSuccess /></AlreadyLogin>} />
      <Route path='/resetpassword' element={<AlreadyLogin><ResetPassword /></AlreadyLogin>} />
      <Route path='/createnewpassword' element={<AlreadyLogin><CreateNewPassword /></AlreadyLogin>} />
      <Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path='/history' element={<PrivateRoute><History /></PrivateRoute>} />
      <Route path='/searchreciver' element={<PrivateRoute><SearchReciver /></PrivateRoute>} />
      <Route path='/inputamount' element={<PrivateRoute><InputAmount /></PrivateRoute>} />
      <Route path='/confirmation' element={<PrivateRoute><ConfirmationTransfer /></PrivateRoute>} />
      <Route path='/transfersuccess' element={<PrivateRoute><TransferSuccess /></PrivateRoute>} />
      <Route path='/transferfailed' element={<PrivateRoute><TransferFailed /></PrivateRoute>} />
      <Route path='/topup' element={<PrivateRoute><TopUp /></PrivateRoute>} />
      <Route path='/personalinformation' element={<PrivateRoute><PersonalInformation /></PrivateRoute>} />
      <Route path='/profileuser' element={<PrivateRoute><ProfileUser /></PrivateRoute>} />
      <Route path='/changepassword' element={<PrivateRoute><ChangePassword /></PrivateRoute>} />
      <Route path='/changepinold' element={<PrivateRoute><OldPin /></PrivateRoute>} />
      <Route path='/changepinnew' element={<PrivateRoute><NewPin /></PrivateRoute>} />
      <Route path='/addphonenumber' element={<PrivateRoute><AddPhone /></PrivateRoute>} />
      <Route path='/managephone' element={<PrivateRoute><ManagePhone /></PrivateRoute>} />
    </Routes>
  )
}

export default App