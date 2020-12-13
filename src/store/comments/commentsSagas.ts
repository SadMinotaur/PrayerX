import {PayloadAction} from '@reduxjs/toolkit';
import {put, takeLatest} from 'redux-saga/effects';
import {CreateCommentDtoResp} from '../../dto/comments/CommentsDto';
import {API} from '../Api';
import {
  AddCommentActionRequestPd,
  addCommentFailure,
  addCommentRequest,
  addCommentSuccess,
  getCommentsFailure,
  getCommentsRequest,
  getCommentsSuccess,
} from './commentsAction';

export function* watchOnComments() {
  yield takeLatest(addCommentRequest, addColumnSaga);
  yield takeLatest(getCommentsRequest, getColumnsSaga);
}

function* getColumnsSaga() {
  try {
    const json = yield API.getComments();
    yield put(getCommentsSuccess(json));
  } catch (e) {
    yield put(getCommentsFailure(e.toString()));
  }
}

function* addColumnSaga(
  payloadAction: PayloadAction<AddCommentActionRequestPd>,
) {
  try {
    const {idCard, name} = payloadAction.payload;
    const json: CreateCommentDtoResp = yield API.createComment(idCard, {
      body: name,
      created: new Date().toISOString().substring(0, 10),
    });
    yield put(addCommentSuccess({...json}));
  } catch (e) {
    yield put(addCommentFailure(e.toString()));
  }
}
