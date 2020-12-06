import {createAction} from '@reduxjs/toolkit';
import {Column} from './columnsTypes';

export const getColumnsRequest = createAction('GET_COLUMNS_REQUEST');
export interface SetColumnsActionPd {
  columns: Column[];
}
export const getColumnsSuccess = createAction<SetColumnsActionPd>(
  'GET_COLUMNS_SUCCESS',
);
export interface LoginActionFailurePd {
  error: string;
}
export const getColumnsFailure = createAction<LoginActionFailurePd>(
  'GET_COLUMNS_FAILURE',
);
