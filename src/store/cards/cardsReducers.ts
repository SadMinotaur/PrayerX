import {createReducer} from '@reduxjs/toolkit';
import {createCardsSuccess, getCardsSuccess} from './cardsAction';

import {Card} from './cardsTypes';

export const cardsReducer = createReducer([] as Card[], (builder) => {
  builder
    .addCase(getCardsSuccess, (state: Card[], action) => action.payload)
    .addCase(createCardsSuccess, (state: Card[], action) => [
      ...state,
      action.payload,
    ]);
});
