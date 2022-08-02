import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../helpers/http';

export const getHistory = createAsyncThunk('auth/getHistory', async (param)=>{
  const result = {}
  const setpage = param?.page
  const token = param?.token
  try {
    const { data } = await http(token).get(`/authenticated/joinTransactionsJoin${setpage!==undefined?`?page=${setpage}`: ''}`)
    return data
  } catch (e) {
    result.message = e.response.data?.message;
    return result
  }
})

export const getHistoryHome = createAsyncThunk('history/historyHome', async (param)=>{
  const result = {}
  const token = param?.token
  try {
    const  { data } = await http(token).get('/authenticated/joinTransactionsJoin?limit=4&page=1')
    return data
  } catch (e) {
    result.message = e.response.data?.message;
    return result
  }
})