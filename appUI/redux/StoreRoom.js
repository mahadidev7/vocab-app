/* eslint-disable eol-last */
import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './slices/basketSlice';

export const StoreRoom = configureStore({
  reducer: {
    basket: basketSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
