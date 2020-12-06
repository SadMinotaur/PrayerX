import {all} from 'redux-saga/effects';
import {watchOnColumns} from './columns/columnsSagas';
import {watchOnUserChange} from './user/userSagas';

export function* rootSaga() {
  yield all([watchOnUserChange(), watchOnColumns()]);
}
