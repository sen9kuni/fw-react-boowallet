import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'

import reducer from './reducers';

export const store = configureStore({
  reducer,
  middleware: [logger]
});