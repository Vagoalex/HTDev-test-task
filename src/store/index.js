import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './page/pageSlice';

const store = configureStore({
  reducer: {
    page: pageReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
