// import { Navigate } from 'react-router-dom';

// const AlreadyLogin = ({ children }) => {
//   const auth = localStorage.getItem('auth');

//   return auth ? (
//     <Navigate to='/home' replace={true} state={{errorMsg: 'You Already Login'}} />
//   ) : (
//     children
//   )
// }

// export default AlreadyLogin;

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AlreadyLogin = ({ children }) => {
  const token = useSelector((state)=> state.auth.token)
  if (token){
    return <Navigate to='/home' replace={true} state={{errorMsg: 'Not Login Yet'}} />
  }
  return children;
}

export default AlreadyLogin;