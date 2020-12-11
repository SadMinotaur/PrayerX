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
  deleteCardsFailure,
  deleteCardsRequest,
  deleteCardsSuccess,
  getCardsFailure,
  getCardsRequest,
  getCardsSuccess,
  updateCardsFailure,
  updateCardsRequest,
  updateCardsSuccess,
} from './cardsAction';
import {Card} from './cardsTypes';

export function* watchOnCards() {
  yield takeLatest(getCardsRequest, getAllCardsSaga);
  yield takeLatest(createCardsRequest, addCardsSaga);
  yield takeLatest(deleteCardsRequest, deleteCardSaga);
  yield takeLatest(updateCardsRequest, updateCardSaga);
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

function* deleteCardSaga(action: PayloadAction<number>) {
  try {
    yield API.deleteCard(action.payload);
    yield put(deleteCardsSuccess(action.payload));
  } catch (e) {
    yield put(deleteCardsFailure(e.toString()));
  }
}

function* updateCardSaga(action: PayloadAction<Card>) {
  try {
    const json = yield API.updateCard(action.payload);
    yield put(updateCardsSuccess(json));
  } catch (e) {
    yield put(updateCardsFailure(e.toString()));
  }
}
