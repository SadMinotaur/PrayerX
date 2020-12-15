import {PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {put, takeLatest} from 'redux-saga/effects';
import {CreateCommentDtoResp} from '../../dto/comments/CommentsDto';
import {API} from '../Api';
import {setIsLoading} from '../isloading/loadingActions';
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
    yield put(setIsLoading(true));
    const json: Comment[] = yield API.getComments();
    yield put(getCommentsSuccess(json));
  } catch (e) {
    yield put(getCommentsFailure(e.toString()));
  } finally {
    yield put(setIsLoading(false));
  }
}

function* addComments(payloadAction: PayloadAction<AddCommentActionRequestPd>) {
  try {
    yield put(setIsLoading(true));
    const {idCard, body} = payloadAction.payload;
    const json: CreateCommentDtoResp = yield API.createComment(idCard, {
      body: body,
      created: new Date().toISOString(),
    });
    yield put(addCommentSuccess({...json} as Comment));
  } catch (e) {
    Alert.alert('Something went wrong!');
    yield put(addCommentFailure(e.toString()));
  } finally {
    yield put(setIsLoading(false));
  }
}

function* updateComments(payloadAction: PayloadAction<UpdateCommentRequestPd>) {
  try {
    yield put(setIsLoading(true));
    const {id, body, created} = payloadAction.payload;
    const json: Comment = yield API.updateComment(id, {
      body: body,
      created: created,
    });
    yield put(updateCommentSuccess(json));
  } catch (e) {
    Alert.alert('Something went wrong!');
    yield put(updateCommentFailure(e.toString()));
  } finally {
    yield put(setIsLoading(false));
  }
}

function* deleteComments(payloadAction: PayloadAction<number>) {
  try {
    yield put(setIsLoading(true));
    yield API.deleteComment(payloadAction.payload);
    yield put(deleteCommentSuccess(payloadAction.payload));
  } catch (e) {
    Alert.alert('Something went wrong!');
    yield put(deleteCommentFailure(e.toString()));
  } finally {
    yield put(setIsLoading(false));
  }
}
