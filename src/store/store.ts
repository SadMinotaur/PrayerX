import {applyMiddleware, combineReducers, createStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware, {SagaMiddleware} from 'redux-saga';
import {userReducer} from './user/userRedusers';
import {rootSaga} from './rootSaga';
import AsyncStorage from '@react-native-community/async-storage';

const reducers = combineReducers({user: userReducer});
export type RootState = ReturnType<typeof reducers>;

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
  },
  reducers,
);

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);
persistStore(store);
export type StoreDispatchType = typeof store.dispatch;

sagaMiddleware.run(rootSaga);
