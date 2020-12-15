import {PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {put, takeLatest} from 'redux-saga/effects';
import {ColumnDtoCreateResp} from '../../dto/columns/ColumnsDto';
import {API} from '../Api';
import {setIsLoading} from '../isloading/loadingActions';
import {loginActionFailure} from '../user/userActions';
import {
  addColumnActionRequestPd,
  addColumnFailure,
  addColumnRequest,
  addColumnSuccess,
  getColumnsRequest,
  getColumnsSuccess,
  updateColumnFailure,
  updateColumnRequest,
  updateColumnSuccess,
} from './columnsAction';
import {Column} from './columnsTypes';

export function* watchOnColumns() {
  yield takeLatest(getColumnsRequest, getColumns);
  yield takeLatest(addColumnRequest, addColumn);
  yield takeLatest(updateColumnRequest, updateColumn);
}

function* getColumns() {
  try {
    yield put(setIsLoading(true));
    const json: Column[] = yield API.getColumns();
    yield put(getColumnsSuccess(json));
  } catch (e) {
    yield put(loginActionFailure(e.toString()));
  } finally {
    yield put(setIsLoading(false));
  }
}

function* addColumn(payloadAction: PayloadAction<addColumnActionRequestPd>) {
  try {
    yield put(setIsLoading(true));
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
    Alert.alert('Something went wrong!');
    yield put(addColumnFailure(e.toString()));
  } finally {
    yield put(setIsLoading(false));
  }
}

function* updateColumn(payloadAction: PayloadAction<Column>) {
  try {
    yield put(setIsLoading(true));
    const {id, title, description} = payloadAction.payload;
    const json: ColumnDtoCreateResp = yield API.updateColumn(id, {
      title: title,
      description: description,
    });
    yield put(
      updateColumnSuccess({
        id: json.id,
        title: json.title,
        description: json.description,
      }),
    );
  } catch (e) {
    Alert.alert('Something went wrong!');
    yield put(updateColumnFailure(e.toString()));
  } finally {
    yield put(setIsLoading(false));
  }
}
