import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) =>{
  const auth = localStorage.getItem('auth');

  return auth ?  (
    children
  ) : (
    <Navigate to='/login' replace={true} state={{errorMsg: 'babi kau'}} />
  )
}

export default PrivateRoute;