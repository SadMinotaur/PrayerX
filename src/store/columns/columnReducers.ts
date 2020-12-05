import {createReducer} from '@reduxjs/toolkit';
import {setColumnsAction} from './columnsAction';
import {Column} from './columnsTypes';

export const columnsReducer = createReducer([] as Column[], (builder) => {
  builder.addCase(
    setColumnsAction,
    (state: Column[], action) => action.payload.columns,
  );
});
