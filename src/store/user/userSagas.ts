import {PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {put, takeEvery, takeLatest} from 'redux-saga/effects';
import {API} from '../Api';
import {setColumnsAction, SetColumnsActionPd} from '../columns/columnsAction';
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

export function* watchOnUserSignIn() {
  yield takeEvery(loginActionRequest, singInUserSaga);
}

export function* watchOnUserSignUp() {
  yield takeEvery(regAction, singUpUserSaga);
}

function* singInUserSaga(payloadAction: PayloadAction<LoginActionRequestPd>) {
  try {
    const {email, password} = payloadAction.payload;
    const json = yield API.signIn({
      email: email,
      password: password,
    });
    put(loginActionSuccess(json as LoginUserSuccessPd));
  } catch (e) {
    put(loginActionFailure(e.toString()));
    Alert.alert('Something went wrong!');
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
    yield put(setColumnsAction({columns: json.columns} as SetColumnsActionPd));
  } catch (e) {
    yield put(regActionFailure(e.toString()));
    Alert.alert('Something went wrong!');
  }
}
