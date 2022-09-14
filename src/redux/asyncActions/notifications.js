import {createAsyncThunk} from '@reduxjs/toolkit';
import qs from 'qs';
// import {https} from '../../helpers/http';
import https from '../../helpers/http';

export const getAllNotif = createAsyncThunk(
  'notification/get-notifs',
  async param => {
    const result = {};
    const token = param.token;
    const sort_by =
      param.sort_by === null
        ? 'DESC'
        : param.sort_by === undefined
          ? 'DESC'
          : param.sort_by
            ? param.sort_by
            : 'DESC';
    try {
      const {data} = await https(token).get(
        `/authenticated/getAllNotif?sort_by=${sort_by}`,
      );
      return data;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      return result;
    }
  },
);

export const countNotif = createAsyncThunk(
  'notification/count-notification',
  async param => {
    const result = {};
    try {
      const {data} = await https(param.token).get(
        'authenticated/countNotifications',
      );
      return data;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      return result;
    }
  },
);

export const readNotif = createAsyncThunk('notification/read', async param => {
  const result = {};
  const id = param.id;
  try {
    const {data} = await https(param.token).patch(
      `authenticated/readNotification/${id}`,
    );
    return data;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const readAllNotif = createAsyncThunk('notificaton/read-all', async param => {
  const result = {}
  try {
    const {data} = await https(param.token).patch(
      '/authenticated/readAllNotifs',
    );
    return data;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
})