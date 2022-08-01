import { combineReducers } from '@reduxjs/toolkit';

import CostomValuesTransfer from './CostomValue';
import ProfileUser from './GetProfileUser'
import auth from './auth';
import profile from './profile';
import historyTrans from './historyTrans';


const reducer = combineReducers({
  costomInputTransfer: CostomValuesTransfer,
  profileUser: ProfileUser,
  auth,
  profile,
  history: historyTrans
})

export default reducer