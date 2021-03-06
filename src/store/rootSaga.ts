import {all} from 'redux-saga/effects';
import {watchOnCards} from './cards/cardsSagas';
import {watchOnColumns} from './columns/columnsSagas';
import {watchOnComments} from './comments/commentsSagas';
import {watchOnUserChange} from './user/userSagas';

export function* rootSaga() {
  yield all([
    watchOnUserChange(),
    watchOnColumns(),
    watchOnCards(),
    watchOnComments(),
  ]);
}
