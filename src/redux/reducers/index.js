import { combineReducers } from '@reduxjs/toolkit';

import CostomValuesTransfer from './CostomValue';


const reducer = combineReducers({
  costomInputTransfer: CostomValuesTransfer
})

export default reducer