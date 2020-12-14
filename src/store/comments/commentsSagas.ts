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
  updateCommentRequest,
  updateCommentSuccess,
  updateCommentFailure,
  deleteCommentRequest,
  deleteCommentSuccess,
  deleteCommentFailure,
  UpdateCommentRequestPd,
} from './commentsAction';
import {Comment} from './commentsTypes';

export function* watchOnComments() {
  yield takeLatest(addCommentRequest, addComments);
  yield takeLatest(getCommentsRequest, getComments);
  yield takeLatest(updateCommentRequest, updateComments);
  yield takeLatest(deleteCommentRequest, deleteComments);
}

function* getComments() {
  try {
    const json: Comment[] = yield API.getComments();
    yield put(getCommentsSuccess(json));
  } catch (e) {
    yield put(getCommentsFailure(e.toString()));
  }
}

function* addComments(payloadAction: PayloadAction<AddCommentActionRequestPd>) {
  try {
    const {idCard, body} = payloadAction.payload;
    const json: CreateCommentDtoResp = yield API.createComment(idCard, {
      body: body,
      created: new Date().toISOString(),
    });
    yield put(addCommentSuccess({...json} as Comment));
  } catch (e) {
    yield put(addCommentFailure(e.toString()));
  }
}

function* updateComments(payloadAction: PayloadAction<UpdateCommentRequestPd>) {
  try {
    const {id, body, created} = payloadAction.payload;
    const json: Comment = yield API.updateComment(id, {
      body: body,
      created: created,
    });
    yield put(updateCommentSuccess(json));
  } catch (e) {
    yield put(updateCommentFailure(e.toString()));
  }
}

function* deleteComments(payloadAction: PayloadAction<number>) {
  try {
    yield API.deleteComment(payloadAction.payload);
    yield put(deleteCommentSuccess(payloadAction.payload));
  } catch (e) {
    yield put(deleteCommentFailure(e.toString()));
  }
}
