import {PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {put, takeLatest} from 'redux-saga/effects';
import {ColumnDtoCreateResp} from '../../dto/columns/ColumnsDto';
import {API} from '../Api';
import {loginActionFailure} from '../user/userActions';
import {
  addColumnActionRequestPd,
  addColumnFailure,
  addColumnRequest,
  addColumnSuccess,
  getColumnsRequest,
  getColumnsSuccess,
} from './columnsAction';
import {Column} from './columnsTypes';

export function* watchOnColumns() {
  yield takeLatest(getColumnsRequest, getColumnsSaga);
  yield takeLatest(addColumnRequest, addColumnSaga);
}

function* getColumnsSaga() {
  try {
    const json: Column[] = yield API.getColumns();
    yield put(getColumnsSuccess(json));
  } catch (e) {
    yield put(loginActionFailure(e.toString()));
    Alert.alert('Something went wrong!');
  }
}

function* addColumnSaga(
  payloadAction: PayloadAction<addColumnActionRequestPd>,
) {
  try {
    const json: ColumnDtoCreateResp = yield API.addColumn({
      title: payloadAction.payload.name,
      description: payloadAction.payload.desc,
    });
    yield put(
      addColumnSuccess({
        id: json.id,
        title: json.title,
        description: json.description,
      }),
    );
  } catch (e) {
    yield put(addColumnFailure(e.toString()));
    Alert.alert('Something went wrong!');
  }
}
