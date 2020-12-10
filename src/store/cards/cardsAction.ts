import {createAction} from '@reduxjs/toolkit';
import {PostCardDto} from '../../dto/cards/CardsDto';
import {Card} from './cardsTypes';

export const getCardsRequest = createAction('GET_CARDS_REQUEST');
export const getCardsSuccess = createAction<Card[]>('GET_CARDS_SUCCESS');
export interface GetCardsFailurePd {
  error: string;
}
export const getCardsFailure = createAction<GetCardsFailurePd>(
  'GET_CARDS_FAILURE',
);

export const createCardsRequest = createAction<PostCardDto>('ADD_CARD_REQUEST');
export const createCardsSuccess = createAction<Card>('ADD_CARD_SUCCESS');
export interface CreateCardFailurePd {
  error: string;
}
export const createCardsFailure = createAction<CreateCardFailurePd>(
  'ADD_CARD_FAILURE',
);
