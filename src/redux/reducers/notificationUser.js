import {createSlice} from '@reduxjs/toolkit';
import { countNotif, getAllNotif, readAllNotif, readNotif } from '../asyncActions/notifications';

const initialState = {
  errorMsg: null,
  successMsg: null,
  dataNotif: [],
  countHomeNotif: null,
};

const notificationUser = createSlice({
  name: 'notificationUser',
  initialState,
  reducers: {},
  extraReducers: build => {
    build.addCase(getAllNotif.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(getAllNotif.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
      state.errorMsg = action.payload.errorMsg;
      if (
        action.payload.results !== null &&
        action.payload.results !== undefined
      ) {
        state.dataNotif = action.payload.results;
      }
      // state.dataNotif = action.payload.results;
    });

    build.addCase(readNotif.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(readNotif.fulfilled, (state, action) => {
      state.successMsg = action.payload.successMsg;
      state.errorMsg = action.payload.errorMsg;
    });

    build.addCase(readAllNotif.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(readAllNotif.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
      state.errorMsg = action.payload.errorMsg;
      if (action.payload.message === 'read all your notifications') {
        state.dataNotif = []
      }
    });

    build.addCase(countNotif.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(countNotif.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
      state.errorMsg = action.payload.errorMsg;
      if (
        action.payload.results !== null &&
        action.payload.results !== undefined
      ) {
        state.countHomeNotif = action.payload.results;
      } else {
        state.countHomeNotif = 0;
      }
    });
  },
});

export {getAllNotif, countNotif, readNotif, readAllNotif};
export default notificationUser.reducer;
