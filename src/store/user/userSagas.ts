import {PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
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
    yield put(getColumnsRequest());
  } catch (e) {
    yield put(loginActionFailure(e.toString()));
    Alert.alert('Something went wrong!');
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
    Alert.alert('Something went wrong!');
  }
}
