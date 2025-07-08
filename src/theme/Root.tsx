import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

// Create a minimal store that matches the OpenAPI theme's expected structure
const rootReducer = combineReducers({
  accept: (state = {}, action) => state,
  contentType: (state = {}, action) => state,
  response: (state = {}, action) => state,
  server: (state = {}, action) => state,
  body: (state = {}, action) => state,
  params: (state = {}, action) => state,
  auth: (state = {}, action) => state,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default function Root({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
} 