import {createAction} from '@reduxjs/toolkit';
import {Column} from './columnsTypes';

export const getColumnsRequest = createAction('GET_COLUMNS_REQUEST');

export const getColumnsSuccess = createAction<Column[]>('GET_COLUMNS_SUCCESS');
export interface LoginActionFailurePd {
  error: string;
}
export const getColumnsFailure = createAction<LoginActionFailurePd>(
  'GET_COLUMNS_FAILURE',
);

export interface addColumnActionRequestPd {
  name: string;
  desc: string;
}
export const addColumnRequest = createAction<addColumnActionRequestPd>(
  'ADD_COLUMN_REQUEST',
);

export const addColumnSuccess = createAction<Column>('ADD_COLUMN_SUCCESS');
export interface addColumnActionFailurePd {
  error: string;
}
export const addColumnFailure = createAction<addColumnActionFailurePd>(
  'ADD_COLUMN_FAILURE',
);

export const updateColumnRequest = createAction<Column>(
  'UPDATE_COLUMN_REQUEST',
);

export const updateColumnSuccess = createAction<Column>(
  'UPDATE_COLUMN_SUCCESS',
);

export interface updateColumnActionFailurePd {
  error: string;
}
export const updateColumnFailure = createAction<updateColumnActionFailurePd>(
  'UPDATE_COLUMN_FAILURE',
);
