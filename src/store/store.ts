import {applyMiddleware, combineReducers, createStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware, {SagaMiddleware} from 'redux-saga';
import {userReducer} from './user/userSlice';
import {rootSaga, watchOnReg} from './user/userSagas';

const reducers = combineReducers({user: userReducer});
export type RootState = ReturnType<typeof reducers>;

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: storage,
  },
  reducers,
);

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);
export type StoreDispatchType = typeof store.dispatch;

// persistStore(store);
sagaMiddleware.run(rootSaga);
