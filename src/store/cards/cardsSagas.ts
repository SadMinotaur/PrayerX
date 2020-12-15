import {PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {put, takeLatest} from 'redux-saga/effects';
import {
  GetAllCardsDto,
  PostCardDto,
  PostCardDtoResp,
} from '../../dto/cards/CardsDto';
import {API} from '../Api';
import {setIsLoading} from '../isloading/loadingActions';
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
    yield put(setIsLoading(true));
    const json: PostCardDtoResp = yield API.createCard(action.payload);
    yield put(createCardsSuccess({...json} as Card));
  } catch (e) {
    Alert.alert('Something went wrong!');
    yield put(createCardsFailure(e.toString()));
  } finally {
    yield put(setIsLoading(false));
  }
}

function* deleteCard(action: PayloadAction<number>) {
  try {
    yield put(setIsLoading(true));
    yield API.deleteCard(action.payload);
    yield put(deleteCardsSuccess(action.payload));
  } catch (e) {
    Alert.alert('Something went wrong!');
    yield put(deleteCardsFailure(e.toString()));
  } finally {
    yield put(setIsLoading(false));
  }
}

function* updateCard(action: PayloadAction<Card>) {
  try {
    yield put(setIsLoading(true));
    const json: PostCardDtoResp = yield API.updateCard(action.payload);
    yield put(updateCardsSuccess({...json} as PostCardDtoResp));
  } catch (e) {
    Alert.alert('Something went wrong!');
    yield put(updateCardsFailure(e.toString()));
  } finally {
    yield put(setIsLoading(false));
  }
}
