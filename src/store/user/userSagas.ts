import {PayloadAction} from '@reduxjs/toolkit';
import {put, takeLatest} from 'redux-saga/effects';
import {API} from '../Api';
import {getColumnsRequest, getColumnsSuccess} from '../columns/columnsAction';
import {
  loginActionFailure,
  loginActionRequest,
  LoginActionRequestPd,
  loginActionSuccess,
  LoginUserSuccessPd,
  regAction,
  regActionFailure,
  RegActionPd,
  regActionSuccess,
  RegActionSuccessPd,
} from './userActions';

export function* watchOnUserChange() {
  yield takeLatest(loginActionRequest, singInUserSaga);
  yield takeLatest(regAction, singUpUserSaga);
}

function* singInUserSaga(payloadAction: PayloadAction<LoginActionRequestPd>) {
  try {
    const {email, password} = payloadAction.payload;
    const json: LoginUserSuccessPd = yield API.signIn({
      email: email,
      password: password,
    });
    yield put(loginActionSuccess(json));
    yield put(getColumnsRequest());
  } catch (e) {
    yield put(loginActionFailure(e.toString()));
  }
}

function* singUpUserSaga(payloadAction: PayloadAction<RegActionPd>) {
  try {
    const {email, password, name} = payloadAction.payload;
    const json = yield API.singUp({
      email: email,
      name: name,
      password: password,
    });
    yield put(regActionSuccess(json as RegActionSuccessPd));
    yield put(getColumnsSuccess(json.columns));
  } catch (e) {
    yield put(regActionFailure(e.toString()));
  }
}
