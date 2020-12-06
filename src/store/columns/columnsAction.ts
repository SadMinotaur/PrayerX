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
