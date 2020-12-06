import {put, takeLatest} from 'redux-saga/effects';
import {API} from '../Api';
import {loginActionFailure} from '../user/userActions';
import {
  getColumnsRequest,
  getColumnsSuccess,
  SetColumnsActionPd,
} from './columnsAction';

export function* watchOnColumns() {
  yield takeLatest(getColumnsRequest, getColumnsSaga);
}

function* getColumnsSaga() {
  try {
    const json = yield API.getColumns();
    yield put(getColumnsSuccess(json as SetColumnsActionPd));
  } catch (e) {
    yield put(loginActionFailure(e.toString()));
  }
}
