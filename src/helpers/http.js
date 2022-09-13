import axios from 'axios';
// import {store} from '../redux/store';
// import { logout } from '../redux/reducers/auth';

const http = (token) => {
  const headers = {}
  if (token) {
    headers.authorization = `Bearer ${token}`
  }
  return axios.create({
    headers,
    baseURL: process.env.REACT_APP_BACKEND_URL_BASE
  })

  // const inseptor = axios.create({
  //   headers,
  //   baseURL: process.env.REACT_APP_BACKEND_URL_BASE,
  // });

  // inseptor.interceptors.response.use(
  //   config => {
  //     // console.log(config);
  //     return config;
  //   },
  //   e => {
  //     if (e.response.status === 401) {
  //       store.dispatch(logout());
  //     }
  //     return Promise.reject(e);
  //   },
  // );

  // return inseptor;
}

export default http