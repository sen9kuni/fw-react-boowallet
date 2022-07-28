import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  amount: 0,
  notes: '-'
};


export const CostomValuesTransfer = createSlice({
  name: 'transfer',
  initialState,
  reducers: {
    costomAmount: (state, action) => {
      state.amount = parseInt(action.payload, 10);
    },
    costomNotes: (state, action) => {
      state.notes = action.payload;
    }
  }
})

export const {
  costomAmount,
  costomNotes
} = CostomValuesTransfer.actions;

export default CostomValuesTransfer.reducer;