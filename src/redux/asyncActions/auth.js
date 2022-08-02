import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'qs'
import http from '../../helpers/http';

// login
export const login = createAsyncThunk('auth/login', async (request) => {
  const result = {}
  try {
    const send = qs.stringify(request)
    const { data } = await http().post('/auth/login', send, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
    result.token = data.results.token
    return result
  } catch (e) {
    result.errorMsg = e.response.data.message
    return result
  }
})
// login

// register
export const register = createAsyncThunk('auth/register', async (request) =>{
  const result = {}
  try {
    const send = qs.stringify(request)
    const { data } = await http().post('/auth/register', send, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
    result.successMsg = data.message;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
})
// register

// cerate pin
export const createPin = createAsyncThunk('auth/createPin', async (request) => {
  const result = {}
  try {
    const send = qs.stringify(request)
    const { data } = await http().post('/auth/createPin', send, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
    result.successMsg = data.message;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
})
// cerate pin

// change password
export const changePassword = createAsyncThunk('auth/changePasword', async (param) => {
  const result = {}
  const token = param?.token
  const password = param?.password
  try {
    const send = qs.stringify(password)
    const { data } = await http(token).patch('/authenticated/changePassword', send, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
    result.successMsg = data.message;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
} )
// change password