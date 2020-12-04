import {all} from 'redux-saga/effects';
import {watchOnSingIn, watchOnSingUp} from './user/userSagas';

export function* rootSaga() {
  yield all([watchOnSingIn(), watchOnSingUp()]);
}
