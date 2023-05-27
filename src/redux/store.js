import { configureStore } from '@reduxjs/toolkit';
import characterReducers from './character/characterSlice';

const store = configureStore({
  reducer: {
    characters: characterReducers,
  },
});

export default store;
