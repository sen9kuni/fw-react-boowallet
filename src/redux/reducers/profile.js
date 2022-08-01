import { createSlice } from '@reduxjs/toolkit';
import { getProfile } from '../asyncActions/profile';

const initialState ={
  data: {}
}

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getProfile.fulfilled, (state, action) => {
      state.data = action.payload.results
    })
  }
})

export { getProfile }
export default profile.reducer