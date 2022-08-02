import { combineReducers } from '@reduxjs/toolkit';

import CostomValuesTransfer from './CostomValue';
import ProfileUser from './GetProfileUser'
import auth from './auth';
import profile from './profile';
import historyTrans from './historyTrans';
import getJoinUserProfile from './getJoinUserProfile';


const reducer = combineReducers({
  costomInputTransfer: CostomValuesTransfer,
  profileUser: ProfileUser,
  auth,
  profile,
  history: historyTrans,
  profileUserJoin: getJoinUserProfile
})

export default reducer