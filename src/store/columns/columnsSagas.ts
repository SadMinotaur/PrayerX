import {PayloadAction} from '@reduxjs/toolkit';
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
    const json: Column[] = yield API.getColumns();
    yield put(getColumnsSuccess(json));
  } catch (e) {
    yield put(loginActionFailure(e.toString()));
  }
}

function* addColumn(payloadAction: PayloadAction<addColumnActionRequestPd>) {
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
  }
}

function* updateColumn(payloadAction: PayloadAction<Column>) {
  try {
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
    yield put(updateColumnFailure(e.toString()));
  }
}
