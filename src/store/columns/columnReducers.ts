import {createReducer} from '@reduxjs/toolkit';
import {
  addColumnSuccess,
  getColumnsSuccess,
  updateColumnSuccess,
} from './columnsAction';

import {Column} from './columnsTypes';

export const columnsReducer = createReducer([] as Column[], (builder) => {
  builder.addCase(
    getColumnsSuccess,
    (state: Column[], action) => action.payload,
  );
  builder.addCase(addColumnSuccess, (state: Column[], action) => [
    ...state,
    action.payload,
  ]);
  builder.addCase(updateColumnSuccess, (state: Column[], action) =>
    state.map((c: Column) => (c.id === action.payload.id ? action.payload : c)),
  );
});
