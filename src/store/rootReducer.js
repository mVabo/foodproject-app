import { reducer as userReducer } from '../slices/user';
import { reducer as restaurantReducer } from '../slices/restaurant';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  user: userReducer,
  restaurant: restaurantReducer
});

export default rootReducer;