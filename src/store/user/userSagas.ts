import {PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {call, put, takeEvery} from 'redux-saga/effects';
import {AuthSignInSDto} from '../../dto/auth/AuthSignInSDto';
import Api from '../Api';
import {
  loginActionFailure,
  loginActionRequest,
  LoginActionRequestPd,
  loginActionSuccess,
} from './userActions';

export default function* watchOnAuth() {
  yield takeEvery(loginActionRequest, loginUserSaga);
}

function* loginUserSaga(payloadAction: PayloadAction<LoginActionRequestPd>) {
  try {
    const {email, password} = payloadAction.payload;
    const json: AuthSignInSDto = yield call(Api.signIn, {
      email: email,
      password: password,
    });
    put(loginActionSuccess(json));
  } catch (e) {
    put(loginActionFailure(e.toString()));
    Alert.alert('Something went wrong!');
  }
}
