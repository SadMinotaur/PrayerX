import {applyMiddleware, combineReducers, createStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware, {SagaMiddleware} from 'redux-saga';
import {userReducer} from './user/userRedusers';
import {rootSaga} from './rootSaga';
import AsyncStorage from '@react-native-community/async-storage';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

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
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
persistStore(store);
export type StoreDispatchType = typeof store.dispatch;

sagaMiddleware.run(rootSaga);
