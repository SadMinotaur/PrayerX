import {PayloadAction} from '@reduxjs/toolkit';
import {put, takeLatest} from 'redux-saga/effects';
import {API} from '../Api';
import {getColumnsSuccess} from '../columns/columnsAction';
import {setIsLoading} from '../isloading/loadingActions';
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
  yield takeLatest(loginActionRequest, signInUser);
  yield takeLatest(regAction, signUpUser);
}

function* signInUser(payloadAction: PayloadAction<LoginActionRequestPd>) {
  try {
    yield put(setIsLoading(true));
    const json: LoginUserSuccessPd = yield API.signIn({
      ...payloadAction.payload,
    });
    yield put(loginActionSuccess(json));
  } catch (e) {
    yield put(loginActionFailure(e.toString()));
  } finally {
    yield put(setIsLoading(false));
  }
}

function* signUpUser(payloadAction: PayloadAction<RegActionPd>) {
  try {
    yield put(setIsLoading(true));
    const json: RegActionSuccessPd = yield API.signUp({
      ...payloadAction.payload,
    });
    yield put(regActionSuccess(json));
    yield put(getColumnsSuccess(json.columns));
  } catch (e) {
    yield put(regActionFailure(e.toString()));
  } finally {
    yield put(setIsLoading(false));
  }
}
