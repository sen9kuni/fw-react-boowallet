import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProfileUser = createAsyncThunk('profile/user-profile', async (token)=>{
  const {data}= await axios.get('http://localhost:3333/authenticated/profile',
    {headers: {authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjU5MTkwOTM4fQ.e7h9g0oFUPXnab9RsuAJzFRZu28jw_8Pseih4vYeWwI'}})
  return data;
})