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
import {commentsReducer} from './comments/commentsReducers';
import {isLoadingReducer} from './isloading/loadingRedusers';

const reducers = combineReducers({
  user: userReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  comments: commentsReducer,
  isLoading: isLoadingReducer,
});
export type RootState = ReturnType<typeof reducers>;
const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
  },
  reducers,
);

const reduxPromiseListener = createReduxPromiseListener();
const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
export const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(reduxPromiseListener.middleware, sagaMiddleware, logger),
  ),
);
export const persistor = persistStore(store);
export const promiseListener = reduxPromiseListener;

sagaMiddleware.run(rootSaga);
