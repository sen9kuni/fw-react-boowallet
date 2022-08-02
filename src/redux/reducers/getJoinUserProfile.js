import { createSlice } from '@reduxjs/toolkit'
import { getProfile2 } from '../asyncActions/getJoinUserProfile'

const initialState = {
  results: {}
}

export const getProfileUserJoin = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getProfile2.fulfilled, (state, action)=>{
      state.results = action.payload.results
    })
  }
})

export { getProfile2 }
export default getProfileUserJoin.reducer