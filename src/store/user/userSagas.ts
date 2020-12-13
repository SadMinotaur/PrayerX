import {PayloadAction} from '@reduxjs/toolkit';
import {put, takeLatest} from 'redux-saga/effects';
import {API} from '../Api';
import {getColumnsSuccess} from '../columns/columnsAction';
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
  yield takeLatest(loginActionRequest, signInUserSaga);
  yield takeLatest(regAction, signUpUserSaga);
}

function* signInUserSaga(payloadAction: PayloadAction<LoginActionRequestPd>) {
  try {
    const {email, password} = payloadAction.payload;
    const json: LoginUserSuccessPd = yield API.signIn({
      email: email,
      password: password,
    });
    yield put(loginActionSuccess(json));
  } catch (e) {
    yield put(loginActionFailure(e.toString()));
  }
}

function* signUpUserSaga(payloadAction: PayloadAction<RegActionPd>) {
  try {
    const {email, password, name} = payloadAction.payload;
    const json = yield API.signUp({
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
