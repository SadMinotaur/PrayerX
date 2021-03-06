import {createReducer} from '@reduxjs/toolkit';
import {
  createCardsSuccess,
  deleteCardsSuccess,
  getCardsSuccess,
  updateCardsSuccess,
} from './cardsAction';

import {Card} from './cardsTypes';

export const cardsReducer = createReducer([] as Card[], (builder) => {
  builder
    .addCase(getCardsSuccess, (state: Card[], action) => action.payload)
    .addCase(createCardsSuccess, (state: Card[], action) => [
      ...state,
      action.payload,
    ])
    .addCase(deleteCardsSuccess, (state: Card[], action) =>
      state.filter((v: Card) => v.id !== action.payload),
    )
    .addCase(updateCardsSuccess, (state: Card[], action) => {
      const {id} = action.payload;
      return state.map((v: Card) =>
        v.id === id
          ? {
              ...action.payload,
              columnId: v.columnId,
            }
          : v,
      );
    });
});
