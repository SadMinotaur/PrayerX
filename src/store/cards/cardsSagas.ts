import {PayloadAction} from '@reduxjs/toolkit';
import {put, takeLatest} from 'redux-saga/effects';
import {
  GetAllCardsDto,
  PostCardDto,
  PostCardDtoResp,
} from '../../dto/cards/CardsDto';
import {API} from '../Api';
import {
  createCardsFailure,
  createCardsRequest,
  createCardsSuccess,
  DeleteCardRequestPd,
  deleteCardsRequest,
  deleteCardsSuccess,
  getCardsFailure,
  getCardsRequest,
  getCardsSuccess,
} from './cardsAction';

export function* watchOnCards() {
  yield takeLatest(getCardsRequest, getAllCardsSaga);
  yield takeLatest(createCardsRequest, addCardsSaga);
  yield takeLatest(deleteCardsRequest, removeCardSaga);
}

function* getAllCardsSaga() {
  try {
    const json: GetAllCardsDto[] = yield API.getCards();
    yield put(getCardsSuccess(json));
  } catch (e) {
    yield put(getCardsFailure(e.toString()));
  }
}

function* addCardsSaga(action: PayloadAction<PostCardDto>) {
  try {
    const json: PostCardDtoResp = yield API.createCard(action.payload);
    yield put(createCardsSuccess({...json, commentsIds: []}));
  } catch (e) {
    yield put(createCardsFailure(e.toString()));
  }
}

function* removeCardSaga(action: PayloadAction<DeleteCardRequestPd>) {
  try {
    const {idCard, idColumn} = action.payload;
    const json = yield API.deleteCard(idCard, idColumn);
    // yield put(deleteCardsSuccess());
  } catch (e) {
    yield put(createCardsFailure(e.toString()));
  }
}
