
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import api from '../API';
// middleware
import { rtkQueryErrorLogger } from './middleware';
// import the reducer from the first code snippet

import customizationReducer from './customizationReducer';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  // add your reducer here
  customization: customizationReducer,
});

// Wrap rtkQueryErrorLogger in a function
const errorLoggerMiddleware = rtkQueryErrorLogger();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware, errorLoggerMiddleware),
});

setupListeners(store.dispatch);

export const { dispatch } = store;
export const getState = store.getState;


