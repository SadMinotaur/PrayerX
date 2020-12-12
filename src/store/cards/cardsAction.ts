import {createAction} from '@reduxjs/toolkit';
import {PostCardDto, PostCardDtoResp} from '../../dto/cards/CardsDto';
import {Card} from './cardsTypes';

export const getCardsRequest = createAction('GET_CARDS_REQUEST');
export const getCardsSuccess = createAction<Card[]>('GET_CARDS_SUCCESS');
export const getCardsFailure = createAction<string>('GET_CARDS_FAILURE');

export const createCardsRequest = createAction<PostCardDto>('ADD_CARD_REQUEST');
export const createCardsSuccess = createAction<Card>('ADD_CARD_SUCCESS');
export const createCardsFailure = createAction<string>('ADD_CARD_FAILURE');

export const deleteCardsRequest = createAction<number>('DELETE_CARD_REQUEST');
export const deleteCardsSuccess = createAction<number>('DELETE_CARD_SUCCESS');
export const deleteCardsFailure = createAction<string>('DELETE_CARD_FAILURE');

export const updateCardsRequest = createAction<Card>('UPDATE_CARD_REQUEST');
export const updateCardsSuccess = createAction<PostCardDtoResp>(
  'UPDATE_CARD_SUCCESS',
);
export const updateCardsFailure = createAction<string>('UPDATE_CARD_FAILURE');
