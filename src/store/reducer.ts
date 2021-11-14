import { combineReducers } from '@reduxjs/toolkit';
import { tickets } from 'features/tickets';

const rootReducers = combineReducers({
  tickets,
});

export default rootReducers