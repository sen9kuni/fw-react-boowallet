import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../helpers/http';

export const getProfile2 = createAsyncThunk('auth/getPofile2', async (token)=>{
  const result = {}
  try {
    const { data } = await http(token).get('/authenticated/joinUserAndProfile')
    return data
  } catch (e) {
    result.message = e.response.data?.message;
    return result
  }
})