import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import { collectionApi } from './collectionApi/collectionApi';

export const store = configureStore({ reducer : {
  [collectionApi.reducerPath] : collectionApi.reducer
}, middleware: (getMiddleware) => {
  return getMiddleware().concat(collectionApi.middleware);
}})

setupListeners(store.dispatch)