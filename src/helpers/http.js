import axios from 'axios';

const http = (token) => {
  const headers = {}
  if (token) {
    headers.authorization = `Bearer ${token}`
  }
  return axios.create({
    headers,
    baseURL: process.env.BACKEND_URL_BASE || 'http://localhost:3333'
  })
}

export default http