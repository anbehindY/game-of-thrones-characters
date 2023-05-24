import { configureStore } from '@reduxjs/toolkit';
import homeReducers from './Home/homeSlice';

const store = configureStore({
  reducer: {
    houses: homeReducers,
  },
});

export default store;
