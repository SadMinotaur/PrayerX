import {applyMiddleware, combineReducers, createStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware, {SagaMiddleware} from 'redux-saga';
import {userReducer} from './user/userRedusers';
import {rootSaga} from './rootSaga';
import AsyncStorage from '@react-native-community/async-storage';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import {columnsReducer} from './columns/columnReducers';
import createReduxPromiseListener from 'redux-promise-listener';
import {cardsReducer} from './cards/cardsReducers';

const reduxPromiseListener = createReduxPromiseListener();
const reducers = combineReducers({
  user: userReducer,
  columns: columnsReducer,
  cards: cardsReducer,
});
export type RootState = ReturnType<typeof reducers>;

AsyncStorage.clear();

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
  composeWithDevTools(
    applyMiddleware(reduxPromiseListener.middleware, sagaMiddleware, logger),
  ),
);
persistStore(store);

sagaMiddleware.run(rootSaga);

export const promiseListener = reduxPromiseListener;
