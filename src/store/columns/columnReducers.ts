import {createReducer} from '@reduxjs/toolkit';
import {getColumnsSuccess} from './columnsAction';

import {Column} from './columnsTypes';

export const columnsReducer = createReducer([] as Column[], (builder) => {
  builder.addCase(
    getColumnsSuccess,
    (state: Column[], action) => action.payload,
  );
});
