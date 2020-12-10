import {createAction} from '@reduxjs/toolkit';
import {Column} from './columnsTypes';

export const getColumnsRequest = createAction('GET_COLUMNS_REQUEST');
export const getColumnsSuccess = createAction<Column[]>('GET_COLUMNS_SUCCESS');
export const getColumnsFailure = createAction<string>('GET_COLUMNS_FAILURE');

export interface addColumnActionRequestPd {
  name: string;
  desc: string;
}
export const addColumnRequest = createAction<addColumnActionRequestPd>(
  'ADD_COLUMN_REQUEST',
);

export const addColumnSuccess = createAction<Column>('ADD_COLUMN_SUCCESS');
export const addColumnFailure = createAction<string>('ADD_COLUMN_FAILURE');

export const updateColumnRequest = createAction<Column>(
  'UPDATE_COLUMN_REQUEST',
);

export const updateColumnSuccess = createAction<Column>(
  'UPDATE_COLUMN_SUCCESS',
);
export const updateColumnFailure = createAction<string>(
  'UPDATE_COLUMN_FAILURE',
);
