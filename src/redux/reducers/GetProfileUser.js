import { createSlice } from '@reduxjs/toolkit'
import { getProfileUser } from '../asyncActions/getProfile';

const initialState = {
  results: {}
}

export const ProfileUser = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getProfileUser.fulfilled, (state, action)=>{
      state.results = action.payload
    })
  }
})

export { getProfileUser }
export default ProfileUser.reducer