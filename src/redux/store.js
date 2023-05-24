import { configureStore } from '@reduxjs/toolkit';
import homeReducers from './Home/homeSlice';

const store = configureStore({
  reducer: {
    characters: homeReducers,
  },
});

export default store;
