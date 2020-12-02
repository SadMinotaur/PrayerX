import {all} from 'redux-saga/effects';
import watchOnReg from './user/userSagas';

export function* rootSaga() {
  yield all([watchOnReg()]);
}
