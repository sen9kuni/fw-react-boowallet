import { createSlice } from '@reduxjs/toolkit';
import { getHistory } from '../asyncActions/historyTransactions';

const initialState ={
  data: {}
}

const history = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getHistory.fulfilled, (state, action) => {
      state.data =  action.payload.results
    })
  }
})

export { getHistory }
export default history.reducer