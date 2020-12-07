import {createReducer} from '@reduxjs/toolkit';
import {addColumnSuccess, getColumnsSuccess} from './columnsAction';

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
});
