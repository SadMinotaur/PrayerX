import {call, put, takeEvery} from 'redux-saga/effects';
import {Api} from '../Api';
import {
  loginActionFailure,
  loginActionRequest,
  loginActionSuccess,
} from './userActions';

export default function* watchOnReg() {
  yield takeEvery(loginActionRequest, loginUserFunction);
}

function* loginUserFunction(payload: any) {
  try {
    const json = yield call(Api.userLogin, payload);
    put({type: loginActionSuccess.type, payload: json});
  } catch (e) {
    put({type: loginActionFailure.type, payload: e.toString()});
  }
}
