// import { Navigate } from 'react-router-dom';

// const PrivateRoute = ({ children }) =>{
//   const auth = localStorage.getItem('auth');

//   return auth ?  (
//     children
//   ) : (
//     <Navigate to='/login' replace={true} state={{errorMsg: 'Not Login Yet'}} />
//   )
// }

// export default PrivateRoute;

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = useSelector((state)=> state.auth.token)
  if (token){
    return children;
  }
  return <Navigate to='/login' replace={true} state={{errorMsg: 'Not Login Yet'}} />
  // return <Navigate to={'/login'} />
  
}

export default PrivateRoute;