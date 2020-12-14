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
  yield takeLatest(getCardsRequest, getAllCards);
  yield takeLatest(createCardsRequest, addCards);
  yield takeLatest(deleteCardsRequest, deleteCard);
  yield takeLatest(updateCardsRequest, updateCard);
}

function* getAllCards() {
  try {
    const json: GetAllCardsDto[] = yield API.getCards();
    yield put(
      getCardsSuccess(json.map((v: GetAllCardsDto) => ({...v} as Card))),
    );
  } catch (e) {
    yield put(getCardsFailure(e.toString()));
  }
}

function* addCards(action: PayloadAction<PostCardDto>) {
  try {
    const json: PostCardDtoResp = yield API.createCard(action.payload);
    yield put(createCardsSuccess({...json} as Card));
  } catch (e) {
    yield put(createCardsFailure(e.toString()));
  }
}

function* deleteCard(action: PayloadAction<number>) {
  try {
    yield API.deleteCard(action.payload);
    yield put(deleteCardsSuccess(action.payload));
  } catch (e) {
    yield put(deleteCardsFailure(e.toString()));
  }
}

function* updateCard(action: PayloadAction<Card>) {
  try {
    const json: PostCardDtoResp = yield API.updateCard(action.payload);
    yield put(updateCardsSuccess({...json} as PostCardDtoResp));
  } catch (e) {
    yield put(updateCardsFailure(e.toString()));
  }
}
