import {createAction} from '@reduxjs/toolkit';
import {Column} from './columnsTypes';

export interface SetColumnsActionPd {
  columns: Column[];
}
export const setColumnsAction = createAction<SetColumnsActionPd>('SET_COLUMNS');
