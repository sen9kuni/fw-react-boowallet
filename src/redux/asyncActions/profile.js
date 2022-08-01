import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../helpers/http';

export const getProfile = createAsyncThunk('auth/getProfile', async (token)=>{
  const result = {}
  try {
    const { data } = await http(token).get('/authenticated/profile')
    return data
  } catch (e) {
    result.message = e.response.data?.message;
    return result
  }
})