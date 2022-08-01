import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../helpers/http';

export const getHistory = createAsyncThunk('auth/getHistory', async (token)=>{
  const result = {}
  try {
    const { data } = await http(token).get('/authenticated/joinTransactions')
    return data
  } catch (e) {
    result.message = e.response.data?.message;
    return result
  }
})