import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: storage,
  },
  () => {},
);

export const store = createStore(
  persistedReducer,
  applyMiddleware(logger, sagaMiddleware),
);
export const persistor = persistStore(store);
export type StoreDispatchType = typeof store.dispatch;
