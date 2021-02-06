import {createAction} from '@reduxjs/toolkit';
import {Column} from '../columns/columnsTypes';

export interface LoginActionRequestPd {
  email: string;
  password: string;
}
export const loginActionRequest = createAction<LoginActionRequestPd>(
  'LOGIN_USER_REQUEST',
);
export interface LoginUserSuccessPd {
  id: number;
  email: string;
  name: string;
}
export const loginActionSuccess = createAction<LoginUserSuccessPd>(
  'LOGIN_USER_SUCCESS',
);
export const loginActionFailure = createAction<string>('LOGIN_USER_FAILURE');

export interface RegActionPd {
  email: string;
  name: string;
  password: string;
}
export const regAction = createAction<RegActionPd>('REG_USER_REQUEST');
export interface RegActionSuccessPd {
  id: number;
  email: string;
  name: string;
  columns: Column[];
}
export const regActionSuccess = createAction<RegActionSuccessPd>(
  'REG_USER_SUCCESS',
);
export const regActionFailure = createAction<string>('REG_USER_FAILURE');
