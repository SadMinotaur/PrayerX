import {all} from 'redux-saga/effects';
import {watchOnUserSignIn, watchOnUserSignUp} from './user/userSagas';

export function* rootSaga() {
  yield all([watchOnUserSignIn(), watchOnUserSignUp()]);
}
