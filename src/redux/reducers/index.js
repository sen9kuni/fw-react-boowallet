import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import CostomValuesTransfer from './CostomValue';
import ProfileUser from './GetProfileUser'
import auth from './auth';
import profile from './profile';
import historyTrans from './historyTrans';
import getJoinUserProfile from './getJoinUserProfile';
import transactionUser from './transactionUser';

const authConfig = {
  key: 'authUser',
  storage,
}

const reducer = combineReducers({
  costomInputTransfer: CostomValuesTransfer,
  profileUser: ProfileUser,
  auth : persistReducer(authConfig, auth),
  profile,
  history: historyTrans,
  profileUserJoin: getJoinUserProfile,
  transactionUser,
})

export default reducer