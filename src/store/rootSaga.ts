import {all} from 'redux-saga/effects';
import watchOnAuth from './user/userSagas';

export function* rootSaga() {
  yield all([watchOnAuth()]);
}
