import {PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {put, takeEvery} from 'redux-saga/effects';
import {API} from '../Api';
import {
  loginActionFailure,
  loginActionRequest,
  LoginActionRequestPd,
  loginActionSuccess,
  regAction,
  regActionFailure,
  RegActionPd,
  regActionSuccess,
} from './userActions';

export function* watchOnSingIn() {
  yield takeEvery(loginActionRequest, singInUserSaga);
}

export function* watchOnSingUp() {
  // yield takeEvery(regAction, singUpUserSaga);
}

function* singInUserSaga(payloadAction: PayloadAction<LoginActionRequestPd>) {
  try {
    const {email, password} = payloadAction.payload;
    const json = yield API.signIn({
      email: email,
      password: password,
    });
    put(loginActionSuccess(json));
  } catch (e) {
    put(loginActionFailure(e.toString()));
    Alert.alert('Something went wrong!');
  }
}

function* singUpUserSaga(payloadAction: PayloadAction<RegActionPd>) {
  try {
    const {email, password, name} = payloadAction.payload;
    const json = yield API.singUp({
      name: name,
      email: email,
      password: password,
    });
    put(regActionSuccess(json));
  } catch (e) {
    put(regActionFailure(e.toString()));
    Alert.alert('Something went wrong!');
  }
}
