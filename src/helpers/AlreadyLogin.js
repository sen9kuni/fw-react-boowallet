import { Navigate } from 'react-router-dom';

const AlreadyLogin = ({ children }) => {
  const auth = localStorage.getItem('auth');

  return auth ? (
    <Navigate to='/home' replace={true} state={{errorMsg: 'You Already Login'}} />
  ) : (
    children
  )
}

export default AlreadyLogin;