// index.js

import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { rootReducer } from './slices/wordsSlice';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export * from './thunks/fetchWords';
export * from './thunks/fetchRank';
