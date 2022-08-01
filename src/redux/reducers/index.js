import { combineReducers } from '@reduxjs/toolkit';

import CostomValuesTransfer from './CostomValue';
import ProfileUser from './GetProfileUser'
import auth from './auth';


const reducer = combineReducers({
  costomInputTransfer: CostomValuesTransfer,
  profileUser: ProfileUser,
  auth
})

export default reducer