import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: storage,
  },
  () => {},
);

export const store = createStore(persistedReducer, applyMiddleware(logger));
export const persistor = persistStore(store);
export type StoreDispatchType = typeof store.dispatch;
