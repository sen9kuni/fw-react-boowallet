import { createSlice } from '@reduxjs/toolkit';
import { getHistory, getHistoryHome } from '../asyncActions/historyTransactions';

const initialState ={
  data: {},
  dataHome: {}
}

const history = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getHistory.fulfilled, (state, action) => {
      state.data =  action.payload
    })
    build.addCase(getHistoryHome.fulfilled, (state, action)=>{
      state.dataHome = action.payload
    })
  }
})

export { getHistory, getHistoryHome }
export default history.reducer